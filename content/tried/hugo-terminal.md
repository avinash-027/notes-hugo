---
title: "hugo-theme-terminal"
description: "using hugo-theme-terminal installing and config..."
date: 2026-01-23
tags: 
  - hugo
---
> https://github.com/adityatelange/hugo-PaperMod/blob/master/assets/css/core/theme-vars.css

[GitHub: Hugo Terminal](https://github.com/panr/hugo-theme-terminal)

- Installing theme into themes folder : `git submodule add https://github.com/panr/hugo-theme-terminal themes/terminal`
- [configuration](https://github.com/panr/hugo-theme-terminal#how-to-configure)

### Adding a custom `style.css` file in Hugo

1. [override styles](https://github.com/panr/hugo-theme-terminal?tab=readme-ov-file#how-to-edit-the-theme-)  at `hugosite/static/style.css` 
2. can also add at `hugosite/assets/css/style.css`
3. themes from [terminal-css](https://github.com/panr/terminal-css). can also add `terminal.css` file at `static/style.css`
```css
/* Placeholder file for your custom settings. */
/* You can get the color scheme variables from https://panr.github.io/terminal-css/ */

/* ------------------------------------------- */
.table-of-contents{
  background: color-mix(in srgb, var(--accent) 3%, transparent);
}
.container {
  margin: auto;
  max-width: 900px;
  border-left: 1px solid color-mix(in srgb, var(--accent) 10%, transparent);
}

/* ------------------------------------------- */
.content .post-content {
  font-family: "Segoe UI", "Inter", "San Francisco", "Roboto"; 
}

.posts .post .post-content p{
  margin: 5px 0 !important;
}
.post .post-title a {
  display: block;
}

.post .post-title a:hover { background: color-mix(in srgb, var(--accent) 1%, transparent); }
.post .post-title a:hover::after {
  content: " ➡";
}

.post ul {
  list-style: square;
}
.post ul li:not(:empty)::before {
  content: "";
  position: absolute;
  left: -20px;
  color: var(--accent);
}

.post .post-content { margin-top: 15px !important;}
.post .post-tags { margin-bottom: 15px !important;}

/* .post { background: color-mix(in srgb, var(--accent) 4%, transparent); background-clip: content-box;} */

/* ------------------------------------------- */
/* General scrollbar (vertical and horizontal) */
::-webkit-scrollbar {
  width: 7px;   /* vertical scrollbar width */
  height: 7px;  /* horizontal scrollbar height */
}
/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}
/* Thumb */
::-webkit-scrollbar-thumb {
  background: var(--accent);
}
/* Thumb hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--foreground);
}

/* ------------------------------------------- */
/* 
h1, h2, h3, h4, h5 {
  padding-bottom: 2px;
  border-bottom: 2px solid color-mix(in srgb, var(--accent) 30%, transparent);
}
*/

blockquote { background: color-mix(in srgb, var(--accent) 3%, transparent); }

table {
  /* font-size: .8em;*/
}

summary {
  cursor: pointer;
}
details {
  color: var(--accent);
  padding: 6px 10px;
  border: 2px solid color-mix(in srgb, var(--accent, red) 9%, transparent);
}
```

### Enable raw HTML in site configuration

**by default, Hugo’s Goldmark Markdown renderer is in “safe” mode**

In hugo.toml (or config.yaml / config.json).
```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

**Suppress the warning without enabling raw HTML**

`ignoreLogs = ["warning-goldmark-raw-html"]`: This won’t render raw HTML—it just hides the warning.


### Adding a custom `custom.js` file in Hugo

1. **Create your JavaScript file**: `static/js/custom.js`

2. **Include the script in the theme layout**

   ```html
   <script src="{{ "js/custom.js" | relURL }}"></script>
   ```

3. **Where to add the script**

   Place the script tag in **one of these theme files** (usually near the end):

   * `themes/<theme-name>/layouts/_default/baseof.html`
   * `themes/<theme-name>/layouts/partials/footer.html`
   * `themes/<theme-name>/layouts/partials/header.html`

   👉 Many themes already include a footer partial, which is the **recommended place** to add custom JS.

4. **Best practice (do not edit the theme directly)**

   Instead of modifying theme files, **copy the file** into your site and edit it there:

   ```bash
   layouts/_default/baseof.html
   layouts/partials/footer.html
   ```

   Hugo will automatically use your version instead of the theme’s.

### add theme change btn

<details>
  <summary>theme.js</summary>

```js
const defaultTheme = "Viking";

const presets = {
  "Terminal Dark": { "background": "#1a170f", "foreground": "#eceae5", "accent": "#eec35e" },
  "Teal": { "background": "#1a170f", "foreground": "#eceae5", "accent": "#32858b" },
  "Matrix": { "background": "#000000", "foreground": "#4EEE85", "accent": "#4EEE85" },
  "Viking": { "background": "#0E1923", "foreground": "#D6E8EE", "accent": "#5ACCF0" },
  "rosepine": { "background": "#191724", "foreground": "#e0def4", "accent": "#56949f" },
  "catppuccin": { "background": "#181825", "foreground": "#cdd6f4", "accent": "#f5c2e7" },
  "monokai": { "background": "#272822", "foreground": "#e2e2dc", "accent": "#a6e22e" },
  "serika_dark": { "background": "#323437", "foreground": "#d1d0c5", "accent": "#e2b714" },
  "Pink Panther": { "background": "#1a170f", "foreground": "#eceae5", "accent": "#ee82cf" },
  "Black & White": { "background": "#000000", "foreground": "#ffffff", "accent": "#ffffff" },
  "Heliotrope": { "background": "#25062A", "foreground": "#F7E9F9", "accent": "#E575F8" },
  "Pistachio": { "background": "#1d2021", "foreground": "#ebdbb2", "accent": "#8ec07c" },
  "Blue Screen of Death": { "background": "#153489", "foreground": "#eceae5", "accent": "#5ea5ee" },
  "Terminal Light": { "background": "#ffffff", "foreground": "#454545", "accent": "#b9975c" },
  "White & Black": { "background": "#ffffff", "foreground": "#000000", "accent": "#000000" },
  "Studio": { "background": "#F7F4FF", "foreground": "#403352", "accent": "#6F49AB" },
  "Hopbush": { "background": "#FFF6F6", "foreground": "#462D2D", "accent": "#cc6099" },
  "Tahiti Gold": { "background": "#FFFBF7", "foreground": "#45372B", "accent": "#DF7020" },
  "Vanilla Sky": { "background": "#fff4f2", "foreground": "#424140", "accent": "#8f6a5e" },
  "Tomato": { "background": "#fff7f1", "foreground": "#45372B", "accent": "#ff6347" }
};

// Apply previously saved theme if it exists, else default
const applyTheme = (name) => {

  const theme = presets[name];
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--foreground', theme.foreground);
  root.style.setProperty('--accent', theme.accent);
};

// 🚀 PREVENT THEME BLINK ON REFRESH
(function () {

  const savedTheme = localStorage.getItem('selectedTheme') || defaultTheme;
  applyTheme(savedTheme)

})();

document.addEventListener('DOMContentLoaded', () => {

  let activeTheme = localStorage.getItem('selectedTheme') || defaultTheme;
  applyTheme(activeTheme);

  const header = document.querySelector('header .header__inner');

  // 🎨 button
  let btn = document.createElement('div');
  btn.textContent = "🎨";
  btn.style.cssText = "float:left; cursor:pointer; padding:5px 10px; background:var(--accent); margin-left:10px;";

  // modal
  let modal = document.createElement('div');
  modal.id = "theme-dialog-modal";

  // create buttons from presets
  let content = '<span style="display: block; padding: 10px 0 5px 0; margin-bottom:15px; text-align: center; border-bottom:1px solid var(--accent)">Select a theme</span>';
  for (let name in presets) {
    content += `
      <button class="theme-btn" data-theme="${name}">${name}</button>`;
  }

  modal.innerHTML = `
    <style>
      .theme-btn{
        padding: 4px; margin: 4px;
        border-top: 1px solid color-mix(in srgb,var(--accent) 25%,transparent); 
        border-left: 1px solid var(--accent); 
        border-right: 1px solid var(--accent); 
        border-bottom: 3px solid var(--accent); 
        border-radius: 4px; 
        font-size: 0.9em; 
        transition: all 0.3s ease;
      }
      .modal-content-theme {
        position:absolute; 
        top:20%; 
        width:50%;
        max-width:90%; 
        overflow:auto;
        background:var(--background); color:var(--foreground);
        padding:20px; 
        border:4px double var(--accent); border-radius:8px;
        box-shadow:0 4px 10px rgba(0,0,0,0.3); 
      }
      @media (max-width: 768px)
      {
        .modal-content-theme { top: 15%; width: 100%; padding:8px; margin:0; border:2px solid var(--accent); }
        .theme-btn { padding: 3px; margin: 3px; }
      }
    </style>
    <div class='modal-content-theme'>
      ${content}
      <br><br>
      <button id="closeModal" style="float: right; border-width: 2px; border-radius:8px;">Close</button>
    </div>
  `;

  modal.style.cssText = "display:none; justify-content:center; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7);";

  // Show/hide modal
  btn.onclick = () => modal.style.display = 'flex';
  modal.querySelector('#closeModal').onclick = () => modal.style.display = 'none';
  modal.addEventListener('click', e => { if(e.target===modal) modal.style.display='none'; });

  // Initialize buttons state
  let modalBtns = modal.querySelectorAll('.theme-btn');

  // Theme change logic
  modalBtns.forEach(b => {

    if (b.dataset.theme === activeTheme) {
      b.setAttribute('aria-pressed', 'true');
      b.style.background = 'var(--accent)';
      b.style.color = 'var(--background)';
    }

    b.onclick = () => {
      activeTheme = b.dataset.theme;

      applyTheme(activeTheme);
      // Save the selected theme name in localStorage
      localStorage.setItem('selectedTheme', b.dataset.theme);

      // Manage button active state
      modalBtns.forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
        btn.style.background = '';
        btn.style.color = '';
      });
      b.setAttribute('aria-pressed', 'true');
      b.style.setProperty('background', 'var(--accent)');
      b.style.setProperty('color', 'var(--background)');
    };
  });

  header.appendChild(btn);
  document.body.appendChild(modal);
});
```
</details>
