(() => {
  // <stdin>
  var defaultTheme = "Viking";
  var presets = {
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
  var applyTheme = (name) => {
    const theme = presets[name];
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
    root.style.setProperty("--accent", theme.accent);
  };
  (function() {
    const savedTheme = localStorage.getItem("selectedTheme") || defaultTheme;
    applyTheme(savedTheme);
  })();
  document.addEventListener("DOMContentLoaded", () => {
    let activeTheme = localStorage.getItem("selectedTheme") || defaultTheme;
    applyTheme(activeTheme);
    const header = document.querySelector("header .header__inner");
    let btn = document.createElement("div");
    btn.textContent = "\u{1F3A8}";
    btn.style.cssText = "float:left; cursor:pointer; padding:5px 10px; background:var(--accent); margin-left:10px;";
    let modal = document.createElement("div");
    modal.id = "theme-dialog-modal";
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
    btn.onclick = () => modal.style.display = "flex";
    modal.querySelector("#closeModal").onclick = () => modal.style.display = "none";
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
    let modalBtns = modal.querySelectorAll(".theme-btn");
    modalBtns.forEach((b) => {
      if (b.dataset.theme === activeTheme) {
        b.setAttribute("aria-pressed", "true");
        b.style.background = "var(--accent)";
        b.style.color = "var(--background)";
      }
      b.onclick = () => {
        activeTheme = b.dataset.theme;
        applyTheme(activeTheme);
        localStorage.setItem("selectedTheme", b.dataset.theme);
        modalBtns.forEach((btn2) => {
          btn2.setAttribute("aria-pressed", "false");
          btn2.style.background = "";
          btn2.style.color = "";
        });
        b.setAttribute("aria-pressed", "true");
        b.style.setProperty("background", "var(--accent)");
        b.style.setProperty("color", "var(--background)");
      };
    });
    header.appendChild(btn);
    document.body.appendChild(modal);
  });
})();
