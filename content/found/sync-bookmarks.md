---
title: Sync bookmarks across Brave, Firefox, Zen, and Edge
description: Floccus and xBrowserSync are free, open-source extensions for syncing bookmarks across Brave, Firefox, Zen (a Firefox fork), and Edge.
date: 2025-01-28
tags:
  - browsers
---
- **Firefox Sync** offers richer tab/history syncing inside Firefox. Firefox Sync does work with some Firefox forks — but not all browsers.
- **Brave Sync** is ideal if you’re all-in on Brave: it’s end-to-end encrypted, account-less, and syncs bookmarks, tabs, history, and settings—but only within Brave. 
- **Floccus** and **xBrowserSync** win for cross-browser setups, with Floccus favoring self-hosting and xBrowserSync prioritizing anonymous simplicity.
- [GitHub - dudor/BookmarkHub: BookmarkHub , sync bookmarks across different browsers](https://github.com/dudor/BookmarkHub)
- [GitHub - TCB13/LoFloccus: Sync Floccus' browser bookmarks to a local folder / any cloud.](https://github.com/TCB13/LoFloccus)

---

Floccus excels in self-hosted flexibility via your own cloud storage, while xBrowserSync offers quick anonymous setup with public servers or self-hosting.
- [Download - Floccus bookmarks sync](https://floccus.org/download)
- [xBrowserSync - Browser syncing as it should be: secure, anonymous and free!](https://www.xbrowsersync.org/#download)

**Floccus** is a tool that allows you to **sync your bookmarks privately across multiple browsers and devices**. It supports various platforms, including Chrome, Firefox, and Edge, and can sync bookmarks using your own cloud storage or services like Nextcloud, Google Drive, and Git servers.

- It uses your preferred cloud (e.g., Google Drive, Nextcloud, WebDAV) without vendor lock-in.
- Primarily syncs bookmarks; history requires manual exports/imports or complementary tools.
- Free, open-source, and privacy-oriented with end-to-end encryption options via your storage.

xBrowserSync is a strong alternative, confirmed working on Brave, Firefox, Edge, and likely Zen (Firefox-based), syncing bookmarks with tags/descriptions and some browser data.

---
### Bookmark Sync — Simple Steps

1. Floccus uses **your storage**. Pick one: Nextcloud (best), WebDAV, Google Drive, Git (advanced), Local folder (same PC only, multiple browsers)
2. Install Floccus on **every browser/device**:  👉 [https://floccus.org/download](https://floccus.org/download)
3. Add a sync account:
4. Click the **Floccus icon** -> Open **Settings** -> **Add new account** -> Choose your storage (Nextcloud/WebDAV/etc.) -> Login
5. Choose a bookmark folder: Use **Root bookmarks** OR Create one bookmarks folder (recommended)
6. Set sync settings (recommended):
	- Sync: **Bidirectional**
	- Interval: **15–30 min**
	- Conflicts: **Keep newer**
	- Save
7. Sync other browsers:
	- Install Floccus
	- Use the **same account + same folder**
	- Sync one browser first, then others
8. Your bookmarks now sync:
	- Across browsers
	- Across devices
	- Privately (no Floccus server)

---

If error occurs – **E043: Failsafe**
- Floccus detected that if it runs the sync now, it would **double the number of bookmarks on the server** (or cloud folder).
- This usually happens on the **first sync** if your local browser already has bookmarks and the server/cloud folder is empty.
- The “100% increase” warning is Floccus trying to **prevent accidental duplication** of bookmarks.

**How to resolve it:**

**Option 1✅: Disable the failsafe temporarily**
- Go to your LoFloccus/Floccus profile settings → **Advanced settings** → look for `Failsafe` or similar.
- Disable or reduce the threshold (e.g., allow >100% increase).
- Then **run the sync again**.
- Safe if your local bookmarks are the ones you want to upload.

**Option 2: Start with an empty browser bookmarks**
- If you want the server/folder to be authoritative, **clear your browser bookmarks** first.
- Then sync once; Floccus will copy everything safely.
**Option 3: Merge carefully**
- If both your browser and cloud folder have bookmarks, Floccus is trying to **avoid accidental doubling**.
- In that case, review bookmarks manually or do a **test sync with a few bookmarks first**.

---

### Floccus Bookmark Sync - Local

LoFloccus enables true local/cloud sync for Floccus by acting as a lightweight WebDAV server, bridging browser restrictions.

1. **Download *LoFloccus***: [GitHub - TCB13/LoFloccus: Sync Floccus' browser bookmarks to a local folder / any cloud.](https://github.com/TCB13/LoFloccus). it auto-generates a random port, username, and password, then minimizes to tray/menu bar.​
2. **Install *Floccus***: Add the extension from floccus.org/download for your browser (Chrome/Edge/Firefox).
3. **Configure Sync**: In Floccus settings, create "New Profile" > Custom WebDAV. Use *LoFloccus* details:
    - **URL**: `http://127.0.0.1:[LoFloccus-port]/` (e.g., `http://127.0.0.1:49152/`).
    - **Username/Password**: Copy from *LoFloccus* interface.
    - Set folder path (e.g., `/bookmarks/`) and optional passphrase. Save—Floccus connects locally.​
4. **Export Profile**: In Floccus > IMPORT/EXPORT PROFILES > "Export profiles" to JSON file.

**Multi-Browser/PC Transfer**
* Import the JSON via "IMPORT/EXPORT PROFILES" on another browser/device (re-run LoFloccus there first). Adjust sync folder if needed, then hit "SYNC NOW." Changes bi-sync via the local XBEL/HTML file, which you can further sync with Dropbox/Syncthing.​