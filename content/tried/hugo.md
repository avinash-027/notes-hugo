---
author: a027
title: Obsdian Wepages
date: 2026-01-22
description: Creating Hugo project directly from Obsidian vault contents
tags:
  - obsidian
  - hugo
  - websites
---
**About Hugo:** Written in Go, Hugo is an open source static site generator available under the Apache Licence 2.0. Hugo supports TOML, YAML and JSON data file types, Markdown and HTML content files and uses short codes to add rich content. Hugo is ideal for blogs, corporate websites, creative portfolios, online magazines, single page applications or even a website with thousands of pages.

Obsidian vaults with YAML frontmatter convert seamlessly to Hugo sites on *Windows*, generating static web pages from Markdown notes. Native YAML support in Obsidian eliminates extra plugins, streamlining the workflow.

**Install Hugo**

Use Chocolatey or Winget for the extended version supporting Windows.
- Run PowerShell as admin: `choco install hugo-extended`.
- Or via Winget: `winget install Hugo.Hugo.Extended`.
- Verify: `hugo version` (should show v0.140+ as of 2026).

Create and serve your Hugo project directly from Obsidian vault contents.

```shell
hugo new site mysite 
cd mysite 
hugo server -D
```
Access at [http://localhost:1313](http://localhost:1313/). 

**Connect Obsidian Vault**

- **Option A (Recommended)**: Symlink vault to Hugo `content/` for live sync. `mklink /D content C:\Path\To\Obsidian\Vault\Notes`
- **Option B**: `xcopy` vault notes to `content/notes/` (manual updates needed).

**Choose & Add Theme**

* PaperMod `git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod`
* Alternatives: Docsy (docs-focused), LoveIt (feature-rich), Ananke (minimal.

**Config Setup**

Replace `hugo.toml` (or create `config.toml`) with this optimized for notes:
```toml
baseURL = "https://yourdomain.com/"
languageCode = "en-us"
title = "My Obsidian Notes"
theme = "PaperMod"

[params]
  ShowReadingTime = true
  ShowToc = true
  ShowBreadcrumbs = true
  ShowPostNavLinks = true

[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "Notes"
  url = "/notes/"
  weight = 2
```

**File Structure**
```txt
mysite/
├── archetypes/
├── content/
│   └── notes/          # Symlinked Obsidian folder
│       └── post1.md    # YAML frontmatter preserved
├── layouts/
├── static/
├── themes/
│   └── PaperMod/
└── hugo.toml
```

Build with `hugo` for deployable static files. Symlinking ensures Obsidian edits reflect instantly during `hugo server -D`.