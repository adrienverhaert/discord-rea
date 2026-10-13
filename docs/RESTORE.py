"""Restore the complete private release backup without concatenating parts on disk."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import tarfile

class Parts:
    def __init__(self, folder, parts):
        self.folder, self.parts = folder, iter(parts)
        self.stream = None
    def read(self, n):
        while True:
            if self.stream is None:
                part = next(self.parts, None)
                if part is None:
                    return b''
                path = self.folder / part['name']
                h = hashlib.sha256()
                with path.open('rb') as source:
                    for b in iter(lambda: source.read(1024*1024), b''):
                        h.update(b)
                if path.stat().st_size != part['bytes'] or h.hexdigest() != part['sha256']:
                    raise ValueError(f'Invalid backup part: {path.name}')
                self.stream = path.open('rb')
            b = self.stream.read(n)
            if b:
                return b
            self.stream.close()
            self.stream = None

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--repo', required=True)
parser.add_argument('--tag', default='backup-2026-10-13')
parser.add_argument('--download-dir', type=Path, default=Path('backup-download'))
parser.add_argument('--output-dir', type=Path, default=Path('restored'))
parser.add_argument('--already-downloaded', action='store_true')
args = parser.parse_args()
args.download_dir.mkdir(parents=True, exist_ok=True)
if not args.already_downloaded:
    subprocess.run(['gh', 'release', 'download', args.tag, '--repo', args.repo, '--dir', str(args.download_dir)], check=True)
manifest = json.loads((args.download_dir/'backup-manifest.json').read_text(encoding='utf-8'))
if args.output_dir.exists() and any(args.output_dir.iterdir()):
    raise ValueError('Output directory must be empty; this script never overwrites an existing project.')
args.output_dir.mkdir(parents=True, exist_ok=True)
with tarfile.open(fileobj=Parts(args.download_dir, manifest['parts']), mode='r|gz') as archive:
    archive.extractall(args.output_dir, filter='data')
for entry in manifest['entries']:
    if entry['type'] != 'file':
        continue
    path = args.output_dir / entry['path']
    h = hashlib.sha256()
    with path.open('rb') as source:
        for b in iter(lambda: source.read(1024*1024), b''):
            h.update(b)
    if path.stat().st_size != entry['bytes'] or h.hexdigest() != entry['sha256']:
        raise ValueError(f'Restored file differs from backup: {entry["path"]}')
print(f'Restored and hash-verified every file in {args.output_dir.resolve()}')
print('If relocated, run git worktree repair for Discord worktrees. CMake build caches may need reconfiguration.')
