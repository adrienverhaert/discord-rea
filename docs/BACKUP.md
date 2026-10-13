# Complete backup and restoration

The private **backup-2026-10-13** release preserves the complete local directory,
including hidden files, nested Git repositories, ignored files, existing builds,
dependencies, evidence, and local worktrees. Nothing is intentionally excluded.
The ordinary Git checkout is only the navigable source; the release is the full backup.

Release assets:

- `*.tar.gz.partNNNN`: consecutively numbered segments of one gzip-compressed tar archive.
- `backup-manifest.json`: full path, type, size, and SHA-256 inventory of original files,
  together with the ordered release segments and their hashes.
- `SHA256SUMS.txt`: checksums for the archive segments.
- `VERIFICATION.json`: results of downloading every segment and streaming the archive
  to compare every archived file against its original hash.
- `RESTORE.py`: Python 3.12+ helper to download, validate, extract and verify the backup.

## Restore on Windows

Install GitHub CLI and Python 3.12 or newer, then authenticate with `gh auth login`.
Download `RESTORE.py` from the private release, then run:

```powershell
python .\RESTORE.py --repo antonio-in-stem/discord-rea --output-dir C:\Restored
```

The helper downloads the release into `backup-download`, reads the numbered parts
as one archive without creating another combined archive, and checks the restored
file hashes. Use an empty output directory. Allow disk space for both compressed
downloads and the uncompressed project. Original file bytes are preserved; OS-specific
ACLs, NTFS alternate data streams and filesystem creation timestamps are not part of
this file-content backup. Symlinks require appropriate permissions on Windows.

To download manually:

```powershell
gh release download backup-2026-10-13 --repo antonio-in-stem/discord-rea --dir backup-download
python .\RESTORE.py --repo antonio-in-stem/discord-rea --already-downloaded --output-dir C:\Restored
```

Do not extract individual parts: they are segments, not independent archives.
Existing generated builds are retained, not newly rebuilt by this backup operation.
If you restore to a different path, reconfigure CMake caches before rebuilding.
For Discord's preserved secondary worktree, repair absolute Git worktree links:

```powershell
git -C C:\Restored\discord-rea worktree repair C:\Restored\discord-rea\.worktrees\frontend
```

Keep original copyright and license notices when using recovered or third-party files.
