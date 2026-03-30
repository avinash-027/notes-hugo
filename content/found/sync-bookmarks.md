---
title: Sync bookmarks across Brave, Firefox, Zen, and Edge
description: Floccus and xBrowserSync are free, open-source extensions for syncing bookmarks across Brave, Firefox, Zen (a Firefox fork), and Edge.
date: 2025-01-28
tags:
  - browsers
---
- **Firefox Sync** offers richer tab/history syncing inside Firefox. Firefox Sync does work with some Firefox forks — but not all browsers.
- [Private by Design: How we built Firefox Sync - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/)
- **Brave Sync** is ideal if you’re all-in on Brave: it’s end-to-end encrypted, account-less, and syncs bookmarks, tabs, history, and settings—but only within Brave. 
- **Floccus** and **xBrowserSync** win for cross-browser setups, with Floccus favoring self-hosting and xBrowserSync prioritizing anonymous simplicity.
- [GitHub - dudor/BookmarkHub: BookmarkHub , sync bookmarks across different browsers](https://github.com/dudor/BookmarkHub)
- [GitHub - TCB13/LoFloccus: Sync Floccus' browser bookmarks to a local folder / any cloud.](https://github.com/TCB13/LoFloccus)
- [Bookmark Manager with Cross-Device Sync Needed : r/brave_browser](https://www.reddit.com/r/brave_browser/comments/1e1p0vl/bookmark_manager_with_crossdevice_sync_needed/)

---

Floccus excels in self-hosted flexibility via your own cloud storage, while xBrowserSync offers quick anonymous setup with public servers or self-hosting.
- [Download - Floccus bookmarks sync](https://floccus.org/download)
- [xBrowserSync - Browser syncing as it should be: secure, anonymous and free!](https://www.xbrowsersync.org/#download)
- [Floccus sync on nextcloud via Webdav option : r/NextCloud](https://www.reddit.com/r/NextCloud/comments/j3tsz1/floccus_sync_on_nextcloud_via_webdav_option/)

**Floccus** is a tool that allows you to **sync your bookmarks privately across multiple browsers and devices**. It supports various platforms, including Chrome, Firefox, and Edge, and can sync bookmarks using your own cloud storage or services like Nextcloud, Google Drive, and Git servers.

- It uses your preferred cloud (e.g., Google Drive, Nextcloud, WebDAV) without vendor lock-in.
- Primarily syncs bookmarks; history requires manual exports/imports or complementary tools.
- Free, open-source, and privacy-oriented with end-to-end encryption options via your storage.

xBrowserSync is a strong alternative, confirmed working on Brave, Firefox, Edge, and likely Zen (Firefox-based), syncing bookmarks with tags/descriptions and some browser data.

---
### Bookmark Sync — Simple Steps

1. Floccus uses **your storage**. Pick one: Nextcloud (best), WebDAV, Google Drive, Git (advanced), Local folder (same PC only, multiple browsers)
	- [What’s the use case for nextcloud? : r/selfhosted](https://www.reddit.com/r/selfhosted/comments/ythhir/whats_the_use_case_for_nextcloud/)
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

---
### Chrome Bookmark Sync

*Works on*: PC + Android + iPhone   
*Limitation*: **Only works inside Chrome**

1. Open **Chrome on PC**
2. Click **profile icon (top right)**
3. Click **Sign in → enter Google account**
4. Click **“Turn on sync” → Yes, I’m in** 
5. Go to **Settings → Sync and Google services**
6. Click **Manage what you sync**
7. Turn ON **Bookmarks** (or “Sync everything”) 
8. On mobile: open Chrome → **3 dots → Settings**
9. Tap **Account → Sync → enable Bookmarks + Sync** 
10. Use **same Google account on all devices** → bookmarks auto-sync

---
- [Is XbrowserSync still good and Trustworthy ? : r/PrivacyGuides](https://www.reddit.com/r/PrivacyGuides/comments/w3ggnc/is_xbrowsersync_still_good_and_trustworthy/)
- [Is there a simple alternative to Xbrowsersync? : r/selfhosted](https://www.reddit.com/r/selfhosted/comments/1j2r3g5/is_there_a_simple_alternative_to_xbrowsersync/)

### xBrowserSync (cross-browser method)

- [Home · xbrowsersync/app Wiki · GitHub](https://github.com/xbrowsersync/app/wiki)
- Works on: Chrome + Firefox + Edge + Android  
- No account needed

**🖥️ On PC (first browser)**
1. Install extension:
    - Go to Chrome Web Store / Firefox Add-ons
    - Search: **xBrowserSync**
2. Click **Add to browser**
3. Open extension (click its icon)
4. Click **“Create new sync”**
5. It will give:
    - Sync ID, Password, QR code
    - **SAVE THIS (very important)**

**📱 On Mobile (Android)**
1. Install **xBrowserSync app**
2. Open app
3. Tap **“Scan QR code”** (or enter ID manually)
4. Enter password

**🌐 On other browsers (PC)**
1. Install xBrowserSync extension again
2. Click extension icon
3. Choose **“I already have sync data”**
4. Enter:
    - Sync ID
    - Password
> 🔁 Sync bookmarks: *Click **Sync now***
 - ✔ Done — bookmarks now sync across: Chrome + Firefox + Edge + Android  
- If you lose **sync ID/password → DATA LOST**
- First sync may take time
- Works best on Android (iOS limited)

## xBrowserSync (how it works)
*(src: ChatGPT-search)*
[xBrowserSync - Browser syncing as it should be: secure, anonymous and free!](https://www.xbrowsersync.org/#faqs)
1. No account needed → you get a **Sync ID + password instead**
2. Sync ID acts like **username (identity)**
3. Password acts like **encryption key (security)**
4. Your bookmarks are **encrypted on your device first**
5. Then encrypted data is uploaded to a **cloud server**
6. Can Stored on:  xBrowserSync public servers (cloud) OR Your own server (optional)
7. Server stores only **unreadable encrypted data (not plain bookmarks)**
8. When another device connects → it uses **same Sync ID + password**
9. That device downloads data and **decrypts it locally**
10. Sync works because all devices access the **same stored encrypted data**
11. If you lose Sync ID or password → ❌ **data cannot be recovered**
