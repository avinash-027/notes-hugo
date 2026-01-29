---
title: Untitled
description: Just some Key notes
date: 2026-01-29
---
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

### TUI

https://ghostty.org/
https://wezterm.org/

| Terminal  | Strengths                              | Platform        |
| --------- | -------------------------------------- | --------------- |
| Ghosty    | GPU acceleration, multiplexing         | Mac             |
| Alacritty | Speed and simplicity                   | Cross-platform  |
| Kitty     | Feature-rich, image support            | Cross-platform  |
| WezTerm   | Integrated multiplexer, font rendering | Cross-platform  |
| iTerm2    | Mac-specific, rich features            | Mac             |
| ST        | Lightweight, efficient                 | Unix-like       |
| Foot      | Lightweight, Wayland-native            | Linux (Wayland) |
