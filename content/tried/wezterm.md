---
title: "WezTerm"
description: "Wez's Terminal"
tags:
  - tui
---

<img src="https://raw.githubusercontent.com/wez/wezterm/main/assets/icon/wezterm-icon.svg" align="right" width="144" />
<br>

A GPU-accelerated cross-platform terminal emulator and multiplexer written by <a href="https://github.com/wez">@wez</a> and implemented in <a href="https://www.rust-lang.org/">Rust</a>

[Wez's Terminal Official Site](https://wezterm.org/)

**Links**
- [Install WezTerm](https://wezterm.org/installation.html)
- [How to Start with WezTerm](https://alexplescan.com/posts/2024/08/10/wezterm/)
- [Collections of awesome WezTerm plugins](https://github.com/michaelbrusegard/awesome-wezterm)
- [GitHub: wezterm 🔍](https://github.com/topics/wezterm)
- [Terminal Setup For NeoVim: WezTerm + Starship](https://www.reddit.com/r/neovim/comments/1edd9yj/my_favorite_terminal_setup_for_neovim_wezterm/)

## WezTerm configuration

- Font styles and sizes set for readability; color scheme changes with system light/dark mode.
- Background uses random local images with semi-transparent overlay.
- Window decorations and tab bar font customized.
- Keybindings for search, reload, debug overlay, and opening config in Neovim.
- Leader key for tmux-style pane navigation; directional keys for pane movement; key table for resizing; PaneSelect and split commands enabled.
- Status bar shows workspace, battery, time, and host with color-gradient segments.

### **Built-in/Standard Shortcuts (WezTerm Defaults)**

- **CTRL + SHIFT + L**: Show debug overlay.
- **CTRL + SHIFT + P**: Open command palette.
- **CTRL + SHIFT + R**: Reload config (refresh WezTerm settings).
- **CTRL + SHIFT + F**: Search (also remapped in your config).

### **Custom Keybindings (From Your Config)**

- **CTRL + a**: Enter leader mode (like tmux); `LEADER` key is set to CTRL+a.
- **CTRL + v**: Paste from clipboard.
- **ALT + LeftArrow**: Move cursor word-wise to the left (\x1bb).
- **ALT + RightArrow**: Move cursor word-wise to the right (\x1bf).
- **LEADER + CTRL + a**: Send actual CTRL + a to the terminal.
- **LEADER + RightArrow**: Split pane horizontally at the current pane.
- **LEADER + DownArrow**: Split pane vertically at the current pane.
- **LEADER + r**: Activate pane resize mode (`resize_panes` key table).
- **LEADER resize_panes table (when activated by LEADER + r)**:
  - **j**: Resize pane up by 3 cells.
  - **k**: Resize pane down by 3 cells.
  - **h**: Resize pane left by 3 cells.
  - **l**: Resize pane right by 3 cells.
- **LEADER + Tab**: Trigger pane selection mode (choose pane by label).
- **LEADER + t**: Trigger pane selection mode (choose pane by label), swap the position of the active pane with the selected pane
- **CTRL + SHIFT + <**: Open WezTerm config file in Neovim, in a new tab.
- **CTRL + q**: Close current tab (with confirmation).
- **CTRL + w**: Close WezTerm application.
- **LEADER + q**: Close current pane (with confirmation).
- **CTRL + SHIFT + F**: Search in terminal (open search overlay).