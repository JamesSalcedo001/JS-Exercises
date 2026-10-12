"""Create a deterministic source-only download; never include deps or databases."""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
API = ROOT / 'projects/task-api'
FILES = ['BUILD.md', 'README.md', 'cases.json', 'javascript/package.json', 'javascript/package-lock.json',
         'javascript/routes.js', 'javascript/routes.starter.js', 'javascript/routes.test.js',
         'javascript/server.js', 'python/app.py', 'python/routes.py', 'python/routes_starter.py',
         'python/test_routes.py', 'python/requirements.txt', 'web/index.html']

def build():
    with zipfile.ZipFile(API / 'task-api.zip', 'w', compression=zipfile.ZIP_DEFLATED) as archive:
        for name in FILES:
            info = zipfile.ZipInfo('task-api/' + name, date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(info, (API / name).read_bytes())

if __name__ == '__main__':
    build()
    print('Built source-only task-api.zip')
