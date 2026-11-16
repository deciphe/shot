# Maintaining Shot

`shot.user.js` is the complete installable source. `shot.meta.js` is its metadata-only update manifest. No production build is required.

## Publish an update

1. Edit `shot.user.js`.
2. Increase its `@version` using a higher numeric release, such as `1.0.1`.
3. Run `node scripts/sync-meta.mjs`.
4. Run `npm test` (Node 22 or later; no npm install required).
5. Review the diff and manually verify affected UI using a controlled account/session. Syntax checks alone do not verify trading behavior.
6. Commit the script and matching metadata together, and push to `main`.

The existing install link remains the same. Installed users receive the higher version when their userscript manager checks for updates. Do not change `@name`, `@namespace`, or `shot.v1` for routine releases.

Do not commit account exports, tokens, browser profiles, local storage dumps, or populated user settings. Preserve runtime authentication behavior and review any new grants or external domains explicitly.

A rollback must also have a new, higher version: restore the desired source, increment its version, regenerate metadata, and publish. Decreasing the version will not reliably update installed clients.
