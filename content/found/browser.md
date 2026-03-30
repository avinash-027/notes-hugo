---
title: Browser Related
date: 2026-03-15
description: ""
tags: []
author: a027
---
### Search Engine

- **Youtube**: `https://www.youtube.com/results?search_query=%s`
- **Brave Search:** `https://search.brave.com/search?q=%s&source=desktop`
- **Google:** `https://www.google.com/search?q=%s`
- **DuckDuckGo:** `https://duckduckgo.com/?q=%s`
- **Reddit Search:** `https://www.google.com/search?q=%s+site:reddit.com`

[How Do Search Engines Work?](https://www.spyfu.com/blog/how-do-search-engines-work/)

### Browser
*[Almost full list of all desktop web browsers](https://nerdyslacker.github.io/desktop-web-browsers/#/)*

- **Brave**: Chromium-based browser focused on privacy through built-in ad and tracker blocking, enabling faster loading and lower resource use.
- **Chrome**: Google's dominant Chromium-based browser excels in speed, vast extension ecosystem, and seamless Google service integration.
- **Chromium**: Open-source project serving as the foundation for Chrome and many browsers, prioritizing web standards and performance without proprietary features.
- **DuckDuckGo**: Privacy-focused browser blocking trackers by default, with a clean interface and built-in search protection.
- **Opera**: Chromium-powered browser offering a free VPN, built-in ad blocker, and sidebar for messengers, ideal for efficient multitasking.
- **Microsoft Edge**: Chromium-based browser from Microsoft with efficient performance, vertical tabs, and deep Windows/Copilot integration.
- **Arc Browser**: A modern, Chromium-based browser designed around workspaces and a minimal sidebar-driven interface.
- **Safari**: Apple's WebKit-based browser optimized for macOS/iOS, prioritizing speed, battery life, and ecosystem privacy features.
- **Maxthon**: Dual-engine browser (Blink/Trident) known for cloud syncing, resource sniffer, and high customization across platforms.
- **Vivaldi**: A highly customizable Chromium browser packed with power-user features like tab stacking and built-in tools.
- **Falkon or Qutebrowser**: Ultra-lightweight options for minimal setups, though less feature-rich for Spaces.

- **Firefox**: Mozilla’s open-source, Gecko-based browser focused on privacy, customization, and independent web standards.
- **Tor Browser**: A Firefox-based browser that routes traffic through the Tor network to maximize anonymity and bypass censorship.
- **Midori**: A Firefox derivative, known for being lightweight and privacy-focused. Midori is a free and open-source web browser known for its lightweight design and speed. It was originally developed using the WebKitGTK engine but has since transitioned to a version based on the Gecko engine, which is used by Firefox, and it emphasizes user privacy and security.
- **Zen Browser**: A modern Firefox fork featuring vertical tabs, workspaces, and a refined productivity-focused interface.
- **LibreWolf**: A hardened Firefox fork that removes telemetry and tracking while enforcing strict privacy defaults.
- **Pale Moon**: A Firefox fork maintaining legacy extension support with a lightweight and highly customizable experience.
- **Floorp**: A Firefox-based browser offering extensive UI customization, dual sidebars, and enhanced productivity tools.
- **Mullvad Browser**: A privacy-hardened Firefox-based browser developed with the Tor Project to minimize tracking and fingerprinting.
- **Waterfox**: A Firefox-based browser optimized for performance, user control, and legacy add-on support.
#### Browser -Related links

- [GitHub - CosmoCreeper/Sine: The ultimate theme manager for Firefox-based browsers.](https://github.com/CosmoCreeper/Sine/tree/main)
- [GitHub - JustAdumbPrsn/Zen-Nebula: A minimalist Glassmorphism based theme to elevate the UI of Zen browser](https://github.com/JustAdumbPrsn/Zen-Nebula/tree/main)
- [Greasy Fork - safe and useful user scripts](https://greasyfork.org/en)
- [Sleazy Fork - safe and useful adult user scripts](https://sleazyfork.org/en)

#### Store data on the client side

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
