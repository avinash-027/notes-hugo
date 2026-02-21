---
title: Key notes
description: Android emulators, PC video player, Music Players, Build Apps, TUI...
date: 2026-01-29
Toc: true
---
## Useful Links

* [Learn Anything](https://learn-anything.xyz/) - collection of learning resources across various topics ^learn-anything
* [Quick Reference](https://quickref.me/) - collection of cheat-sheets and quick references ^quickref
* [Learn X in Y Minutes](https://learnxinyminutes.com/) - Programming Language Tours ^learnxinyminutes
* [cheatography cheatsheets](https://cheatography.com/)

- [Algorithms & Data Structures & Computer Science studies](https://github.com/imteekay/algorithms) ^github
- [Free Programming Books – GoalKicker.com](https://goalkicker.com/)
* [BairesDev AI Colors](https://www.bairesdev.com/tools/ai-colors) ^bairesdev
* [ExtendsClass - Free Online Toolbox for developers](https://extendsclass.com/) ^extendsclass
* [TechWithTim](https://www.youtube.com/@TechWithTim/playlists) ^youtube
* [swerikcodes](https://linktr.ee/swerikcodes?utm_source=linktree_profile_share) ^linktr
	* [5 Free Coding Courses Every Developer Needs](https://www.youtube.com/shorts/HS5laCuCGiA)

* [Table conversion tool](https://tableconvert.com/) ^tableconvert
* [Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)  
* [Giscus: A commenting system powered by GitHub Discussions.](https://giscus.app/) ^comments-tool
- [GitHub - catppuccin/catppuccin: 😸 Soothing pastel theme for the high-spirited!](https://github.com/catppuccin/catppuccin) ^styles

### PWA

- [What PWA Can Do Today](https://whatpwacando.today/)

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


### Browser
*[Almost full list of all desktop web browsers](https://nerdyslacker.github.io/desktop-web-browsers/#/)*

- **Brave**: Chromium-based browser focused on privacy through built-in ad and tracker blocking, enabling faster loading and lower resource use.
- **Chrome**: Google's dominant Chromium-based browser excels in speed, vast extension ecosystem, and seamless Google service integration.
- **Chromium**: Open-source project serving as the foundation for Chrome and many browsers, prioritizing web standards and performance without proprietary features.
- **Opera**: Chromium-powered browser offering a free VPN, built-in ad blocker, and sidebar for messengers, ideal for efficient multitasking.
- **Tor**: Privacy-centric browser routing traffic through the Tor network to anonymize users and bypass censorship.
- **Firefox**: Mozilla's Gecko-based browser emphasizing customization, open-source development, and strong privacy controls.
- **Midori**: A Firefox derivative, known for being lightweight and privacy-focused. Midori is a free and open-source web browser known for its lightweight design and speed. It was originally developed using the WebKitGTK engine but has since transitioned to a version based on the Gecko engine, which is used by Firefox, and it emphasizes user privacy and security.
- **Zen**: Firefox fork (Zen Browser) enhancing usability with vertical tabs, workspaces, and modern aesthetics for power users.
- **Maxthon**: Dual-engine browser (Blink/Trident) known for cloud syncing, resource sniffer, and high customization across platforms.
- **Microsoft Edge**: Chromium-based browser from Microsoft with efficient performance, vertical tabs, and deep Windows/Copilot integration.
- **Safari**: Apple's WebKit-based browser optimized for macOS/iOS, prioritizing speed, battery life, and ecosystem privacy features.
- **DuckDuckGo**: Privacy-focused browser blocking trackers by default, with a clean interface and built-in search protection.
- **LibreWolf**: Firefox fork stripped of telemetry, auto-updates, and tracking for maximum privacy, deleting cookies/history on close.
- **Pale Moon**: Firefox fork maintaining legacy extensions and a lightweight footprint for customized, efficient browsing.
- **Floorp**: Highly customizable Firefox variant with unique UI tweaks like dual sidebars and Zen-style improvements.
- Arc Browser
- Vivaldi
- **Falkon or Qutebrowser**: Ultra-lightweight options for minimal setups, though less feature-rich for Spaces.

