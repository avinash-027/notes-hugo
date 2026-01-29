const presets = {
  "Terminal Dark (default)": { "background": "#1a170f", "foreground": "#eceae5", "accent": "#eec35e" },
  "Teal": { "background": "#1a170f", "foreground": "#eceae5", "accent": "#32858b" },
  "Matrix": { "background": "#000000", "foreground": "#4EEE85", "accent": "#4EEE85" },
  "Viking": { "background": "#0E1923", "foreground": "#D6E8EE", "accent": "#5ACCF0" },
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
  "Tomato": { "background": "#fff7f1", "foreground": "#45372B", "accent": "#ff6347" },
};

// Apply previously saved theme if it exists
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme && presets[savedTheme]) {
  const theme = presets[savedTheme];
  document.documentElement.style.setProperty('--background', theme.background);
  document.documentElement.style.setProperty('--foreground', theme.foreground);
  document.documentElement.style.setProperty('--accent', theme.accent);
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header .header__inner');

  // 🎨 button
  let btn = document.createElement('div');
  btn.textContent = "🎨";
  btn.style.cssText = "float:left; cursor:pointer; padding:5px 10px; background:var(--accent); margin-left:10px;";

  // modal
  let modal = document.createElement('div');
  modal.id = "theme-dialog-Modal";

  // create buttons from presets
  let content = '<p>Select a theme:</p>';
  for (let name in presets) {
    content += `
    <button class="theme-btn" data-theme="${name}" 
    style="border-top: 1px solid color-mix(in srgb,var(--accent) 25%,transparent); 
    border-left: 1px solid var(--accent); border-right: 1px solid var(--accent); 
    border-bottom: 3px solid var(--accent); border-radius: 4px; 
    font-size: 0.9em; padding: 5px; margin: 5px">
    ${name}</button>`;
  }

  modal.innerHTML = `
    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
                background:var(--background); color:var(--foreground);
                padding:20px; border:4px double var(--accent); border-radius:8px;
                box-shadow:0 4px 10px rgba(0,0,0,0.3); max-width:90%; overflow:auto;">
      ${content}
      <br><br>
      <button id="closeModal" style="float: right; border-width: 2px; border-radius:8px;">Close</button>
    </div>
  `;

  modal.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5);";

  // show/hide modal
  btn.onclick = () => modal.style.display = 'block';
  modal.querySelector('#closeModal').onclick = () => modal.style.display = 'none';
  modal.addEventListener('click', e => { if(e.target===modal) modal.style.display='none'; });

  // theme change logic
  modal.querySelectorAll('.theme-btn').forEach(b => {
    b.onclick = () => {
      const theme = presets[b.dataset.theme];
      document.documentElement.style.setProperty('--background', theme.background);
      document.documentElement.style.setProperty('--foreground', theme.foreground);
      document.documentElement.style.setProperty('--accent', theme.accent);

      // Save the selected theme name in localStorage
      localStorage.setItem('selectedTheme', b.dataset.theme);
    };
  });

  header.appendChild(btn);
  document.body.appendChild(modal);
});