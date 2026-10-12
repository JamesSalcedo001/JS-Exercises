"""Real HTTP checks for Express and Flask with temporary SQLite databases."""
import json
import os
from pathlib import Path
import socket
import sqlite3
import subprocess
import tempfile
import time
import urllib.error
import urllib.request
import zipfile
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]


def http(base,method,path,body=None,raw=None):
    data=raw if raw is not None else (json.dumps(body).encode() if body is not None else None)
    req=urllib.request.Request(base+path,data=data,method=method,headers={'Content-Type':'application/json'} if data is not None else {})
    try:response=urllib.request.urlopen(req,timeout=5)
    except urllib.error.HTTPError as error:response=error
    content=response.read()
    return response.status, json.loads(content) if content else None


def test_backends():
    with zipfile.ZipFile(ROOT/'projects/task-api/task-api.zip') as bundle:
        assert len(bundle.namelist()) == 14
        for name in bundle.namelist():
            assert name.startswith('task-api/') and '..' not in name
            assert bundle.read(name) == (ROOT/'projects'/name).read_bytes()
    assert json.loads((ROOT/'projects/task-api/cases.json').read_text()) == json.loads((ROOT/'data/projects.js').read_text().split('export const projectSections = ',1)[1].rstrip(';\n'))[2]['exercises'][-1]['tests']
    cases=json.loads((ROOT/'data/projects.js').read_text().split('export const projectSections = ',1)[1].rstrip(';\n'))[2]['exercises'][-1]['tests']
    python=os.environ.get('TASK_API_PYTHON',str(ROOT/'projects/task-api/python/.venv/bin/python'))
    commands=[('Express',['node','server.js'],ROOT/'projects/task-api/javascript'),('Flask',[python,'app.py'],ROOT/'projects/task-api/python')]
    for label,cmd,cwd in commands:
        with tempfile.TemporaryDirectory() as directory:
            db_path=Path(directory)/'tasks.sqlite';log_path=Path(directory)/'server.log'
            with socket.socket() as sock:sock.bind(('127.0.0.1',0));port=sock.getsockname()[1]
            base=f'http://127.0.0.1:{port}';env={**os.environ,'PORT':str(port),'TASK_DB':str(db_path)};proc=None
            def start():
                nonlocal proc
                log=open(log_path,'ab');proc=subprocess.Popen(cmd,cwd=cwd,env=env,stdout=log,stderr=subprocess.STDOUT);log.close()
                deadline=time.monotonic()+10
                while time.monotonic()<deadline:
                    if proc.poll() is not None:raise AssertionError(log_path.read_text())
                    try:
                        if http(base,'GET','/health')==(200,{'ok':True}):return
                    except (OSError,urllib.error.URLError):pass
                    time.sleep(.05)
                raise AssertionError('Server readiness failed: '+log_path.read_text())
            def stop():
                if proc and proc.poll() is None:
                    proc.terminate()
                    try:proc.wait(timeout=5)
                    except subprocess.TimeoutExpired:proc.kill();proc.wait(timeout=5)
            def records():
                with sqlite3.connect(db_path) as db:return [{'id':row[0],'title':row[1],'done':bool(row[2])} for row in db.execute('SELECT id,title,done FROM tasks ORDER BY id')]
            try:
                start()
                for case in cases:
                    method,path,body,seed=case['args']
                    with sqlite3.connect(db_path) as db:
                        db.execute('DELETE FROM tasks');db.executemany('INSERT INTO tasks (id,title,done) VALUES (?,?,?)',[(t['id'],t['title'],int(t['done'])) for t in seed])
                    status,data=http(base,method,path,body)
                    assert (status,data)==(case['expected']['status'],case['expected']['data']),(label,method,path,status,data)
                    assert records()==case['expected']['tasks']
                assert http(base,'POST','/tasks',raw=b'{bad json')==(400,{'error':'Invalid JSON'})
                assert http(base,'POST','/tasks',raw=json.dumps({'title':'x'*20000}).encode())[0]==413
                with sqlite3.connect(db_path) as db:db.execute('DELETE FROM tasks')
                # Exercise the client page against the real backend, including rename.
                with sync_playwright() as p:
                    browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox']);page=browser.new_page();page.goto(base)
                    page.locator('#title').fill('Read');page.locator('#create button').click();page.locator('li span').wait_for();assert page.locator('li span').inner_text()=='Read'
                    page.once('dialog',lambda dialog:dialog.accept('Study'));page.locator('li button').filter(has_text='Rename').click();page.wait_for_function('document.querySelector("li span")?.textContent==="Study"')
                    page.locator('li input').check();page.wait_for_function('document.querySelector("#status").textContent==="1 tasks"');assert http(base,'GET','/tasks')[1][0]['done'] is True
                    page.locator('li button').filter(has_text='Delete').click();page.wait_for_function('document.querySelectorAll("li").length===0');assert http(base,'GET','/tasks')==(200,[])
                    browser.close()
                status,created=http(base,'POST','/tasks',{'title':'Persist'});assert status==201
                assert http(base,'PATCH',f'/tasks/{created["id"]}',{'done':True})[0]==200
                before=http(base,'GET','/tasks');stop();start();assert http(base,'GET','/tasks')==before
                assert http(base,'DELETE',f'/tasks/{created["id"]}')==(204,None)
                print(f'PASS: {label}: 20 HTTP contract cases, invalid JSON/body limits, real page CRUD, SQLite persistence after restart')
            finally:stop()

if __name__=='__main__':test_backends()
