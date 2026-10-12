"""Run the actual tutorial programs from empty folders, using the learner handler."""
import json
import os
from pathlib import Path
import socket
import subprocess
import tempfile
import time
from test_backends import ROOT, http


def test_build():
    guides=json.loads(subprocess.check_output(['node','--input-type=module','-e','import {serverBuildSteps} from "./data/server-build.js"; console.log(JSON.stringify(serverBuildSteps));'],cwd=ROOT,text=True))
    walkthrough=(ROOT/'projects/task-api/BUILD.md').read_text()
    for steps in guides.values():
        for step in steps:assert step['code'] in walkthrough
    projects=json.loads((ROOT/'data/projects.js').read_text().split('export const projectSections = ',1)[1].rstrip(';\n'))
    for language in ['javascript','python']:
        with tempfile.TemporaryDirectory() as directory:
            folder=Path(directory);is_js=language=='javascript'
            if is_js:
                (folder/'package.json').write_text('{"type":"module"}')
                (folder/'node_modules').symlink_to(ROOT/'projects/task-api/javascript/node_modules',target_is_directory=True)
            handler=next(b for b in projects if b.get('backend') and b['language']==language)['exercises'][-1]['answer']
            (folder/('routes.js' if is_js else 'routes.py')).write_text(('export ' if is_js else '')+handler)
            with socket.socket() as sock:sock.bind(('127.0.0.1',0));port=sock.getsockname()[1]
            base=f'http://127.0.0.1:{port}';filename='server.js' if is_js else 'app.py'
            executable='node' if is_js else str(ROOT/'projects/task-api/python/.venv/bin/python')
            env={**os.environ,'PORT':str(port),'TASK_DB':str(folder/'tasks.sqlite')};proc=None
            def start():
                nonlocal proc
                proc=subprocess.Popen([executable,filename],cwd=folder,env=env,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
                deadline=time.monotonic()+10
                while time.monotonic()<deadline:
                    if proc.poll() is not None:raise AssertionError(proc.stderr.read().decode())
                    try:
                        if http(base,'GET','/health')==(200,{'ok':True}):return
                    except OSError:pass
                    time.sleep(.05)
                raise AssertionError('Tutorial server did not become ready')
            def stop():
                if proc and proc.poll() is None:proc.terminate();proc.wait(timeout=5)
            try:
                for index in [1,2,4]:
                    if index==4:
                        database_file='database.js' if is_js else 'database.py'
                        (folder/database_file).write_text(guides[language][3]['code'])
                        result=subprocess.run([executable,database_file],cwd=folder,capture_output=True,text=True,check=True)
                        assert 'Read' in result.stdout and (folder/'demo.sqlite').exists()
                    (folder/filename).write_text(guides[language][index]['code']);start()
                    if index>=2:
                        assert http(base,'GET','/tasks')==(200,[])
                        status,task=http(base,'POST','/tasks',{'title':' Learn '});assert status==201 and task['title']=='Learn'
                        assert http(base,'PATCH',f'/tasks/{task["id"]}',{'done':True})[1]['done'] is True
                        if index==4:
                            before=http(base,'GET','/tasks');stop();start();assert http(base,'GET','/tasks')==before
                        assert http(base,'DELETE',f'/tasks/{task["id"]}')==(204,None)
                    stop()
                print(f'PASS: {language} tutorial: smallest server → own handler/in-memory CRUD → SQLite and restart')
            finally:stop()

if __name__=='__main__':test_build()
