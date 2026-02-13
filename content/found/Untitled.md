---
title: Key notes
description: Android emulators, PC video player, Music Players, Build Apps, TUI...
date: 2026-01-29
Toc: true
---

### PWA

- [What PWA Can Do Today](https://whatpwacando.today/)

### Android emulators

**BlueStacks and NoxPlayer** are the top Android emulators that run Android apps/games smoothly on both Windows and Mac.

### PC video player

- [VLC media player](https://www.videolan.org/vlc/index.html) (Windows, macOS, Linux, iOS, Android) 
- [MPV](https://mpv.io/) (Windows, macOS, Linux, Android)
- [K-Lite Codec Pack](https://codecguide.com/download_kl.htm) (Windows)

### Music Players

- [GitHub - OuterTune/OuterTune: A Material 3 Music Player for Android with local file & YouTube Music support. Forked from InnerTune](https://github.com/OuterTune/OuterTune)
- [GitHub - ytmdesktop/ytmdesktop: A Desktop App for YouTube Music](https://github.com/ytmdesktop/ytmdesktop)

### Build Apps

| Title                                   | Method                            | Description                                                                                                                                                                                                                                                                                            |
| --------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Flutter                                 | Cross-platform (Dart)             | Google's UI toolkit for native-like apps on iOS/Android with a single codebase; uses Skia for rendering, excels in fast development and rich animations, but has larger app sizes.                                                                                                                     |
| React Native                            | Cross-platform (JS/TS)            | Facebook's framework bridging JS to native components; great for web devs, hot reload speeds iteration, supports large community but can face bridge overhead performance issues.                                                                                                                      |
| .NET MAUI Blazor                        | Cross-platform (.NET/C# + Blazor) | Microsoft's evolution of Xamarin for multi-platform apps; Blazor Hybrid enables web tech (Razor/HTML/CSS) in native shells, strong for enterprise with C# ecosystem, maturing UI controls.                                                                                                             |
| Kotlin (or Java) with Android Studio    | Native Android                    | Google's preferred language (Kotlin) or Java for Android-only apps; offers peak performance, full access to Android APIs via IDE, but requires separate iOS code for multi-platform.                                                                                                                   |
| [CapacitorJS](https://capacitorjs.com/) | Hybrid (JS/HTML/CSS)              | Ionic's runtime for web apps as native; builds on webviews with plugins for device features, easy for web teams, lightweight but less performant than fully native/cross-platform rivals.​ [benefits](https://www.reddit.com/r/ionic/comments/yv739h/understanding_the_benefits_of_using_capacitorjs/) |
| Electron                                | Desktop (JS/HTML/CSS + Chromium)  | Bundles Chromium and Node.js for cross-platform desktop apps (Windows/macOS/Linux); easy for web devs, mature ecosystem (e.g., VS Code, Discord), but results in large bundles (80-150MB) and high memory use (150-400MB). Not ideal for mobile due to size and performance overhead.                  |
| Tauri                                   | Desktop (Rust + WebView)          | Lightweight alternative using system WebViews and Rust backend; tiny bundles (3-10MB), low memory (30-170MB), better security and speed than Electron. Supports experimental mobile (iOS/Android) from shared codebases, suiting efficiency-focused projects.                                          |

### Store data on the client side

[Storing data in the browser](https://javascript.info/data-storage)

- **Browser-native storage (runs fully in the browser):** localStorage, sessionStorage, Cookies, IndexedDB, Cache API
- **In-memory** : Just JavaScript variables, Lost on refresh
- **used _with_ web apps:** SQLite
- **sql.js** : sql.js is a database engine

| Storage Method | Persistent | Size Capacity     | Query Support    | Offline    | Platform Support      | Best Use Case       |
| -------------- | ---------- | ----------------- | ---------------- | ---------- | --------------------- | ------------------- |
| localStorage   | ✅ Yes      | Very small (~5MB) | ❌ No             | ✅ Yes      | Web                   | User preferences    |
| sessionStorage | ❌ No       | Very small (~5MB) | ❌ No             | ❌ No       | Web                   | Temporary UI state  |
| Cookies        | ✅ Yes      | Tiny (~4KB)       | ❌ No             | ⚠️ Limited | Web / Server          | Auth, sessions      |
| IndexedDB      | ✅ Yes      | Large (100MB+)    | ❌ No (key-value) | ✅ Yes      | Web                   | Offline web data    |
| Cache API      | ✅ Yes      | Large             | ❌ No             | ✅ Yes      | Web (Service Workers) | Assets, API caching |
| In-memory      | ❌ No       | N/A               | ❌ No             | ❌ No       | All                   | Runtime UI logic    |
| SQLite         | ✅ Yes      | Very large        | ✅ SQL            | ✅ Yes      | Mobile / Desktop      | Structured app data |

- **localStorage :** Simple synchronous key-value storage built into browsers. Data persists across sessions but is limited in size and blocks the main thread. Best for lightweight, non-sensitive data like theme settings, language preference, or feature flags. Not suitable for large or structured datasets.
- **sessionStorage :** Works like localStorage but only lasts for a single browser tab session. Data is cleared when the tab closes. Ideal for temporary UI state such as form progress or step navigation. Limited capacity and synchronous access make it unsuitable for complex data.
- **Cookies :** Tiny pieces of data sent with every HTTP request. Primarily used for authentication, session tracking, and server-side state. Size is extremely limited and performance can suffer if overused. Cookies can be secured with flags like HttpOnly and Secure.
- **IndexedDB :** Asynchronous, browser-native NoSQL database for storing large amounts of structured data. Supports indexes and transactions but not SQL queries. Excellent for offline-first web apps, caching API responses, or storing complex objects without size constraints.
- **Cache API :** Designed for caching network requests and responses, mainly used with Service Workers. Enables offline access to assets and API data. Not meant for arbitrary data storage, but perfect for performance optimization, PWA support, and reducing network usage.
- **In-memory Storage :** Data stored in JavaScript variables during runtime. Extremely fast but completely volatile—everything is lost on refresh or app restart. Best for transient UI logic, derived state, or caching computed values within a single session.
- **SQLite :** A full relational database engine embedded directly into mobile and desktop apps. Supports SQL queries, relations, indexing, and transactions. Ideal for complex, large-scale, offline-first applications. In Capacitor, it’s native on mobile and typically emulated on the web.
- **sql.js _is_ SQLite, compiled for the browser**, but **without native disk access**
### TUI

- [Ghostty : cross-platform terminal emulator](https://ghostty.org/)
- [WezTerm - Wez's Terminal Emulator](https://wezterm.org/)
- [GitHub - rothgar/awesome-tuis: List of projects that provide terminal user interfaces](https://github.com/rothgar/awesome-tuis)
- [Ratatui | Ratatui](https://ratatui.rs/)

| Terminal  | Strengths                              | Platform        |
| --------- | -------------------------------------- | --------------- |
| Ghosty    | GPU acceleration, multiplexing         | Mac             |
| Alacritty | Speed and simplicity                   | Cross-platform  |
| Kitty     | Feature-rich, image support            | Cross-platform  |
| WezTerm   | Integrated multiplexer, font rendering | Cross-platform  |
| iTerm2    | Mac-specific, rich features            | Mac             |
| ST        | Lightweight, efficient                 | Unix-like       |
| Foot      | Lightweight, Wayland-native            | Linux (Wayland) |
