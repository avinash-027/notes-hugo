---
title: ASCII
description: "ASCII text"
---
# ASCII Text

ASCII text is a fun way to make words look cool using characters. It’s often used in terminals or logs to add some style.

### Tools to Make ASCII Text:

* **figlet**
  A tool that turns regular text into big, fancy letters using characters.
  Example:

  ```bash
  figlet Hello
  ```

* **toilet**
  Like figlet, but with more font styles and color options.

* **cowsay**
  A fun tool that shows a cow (or other characters) saying your message.

* **ascii-art-cli** (for Node.js)
  A modern tool that makes ASCII art from text or images.

* **Online generators**
  Just type your text on websites like [patorjk.com/taag](http://patorjk.com/taag), and get instant ASCII art.


**Extras**

* [How to add ASCII art in Vim/Neovim](https://blog.chaitanyashahare.com/posts/how-to-add-ascii-art-in-any-text-file-in-vim-neovim)
* [ASCII Text Images](https://www.youtube.com/watch?v=55iwMYv8tGI)


### Use ASCII in WezTerm

Show ASCII Text in WezTerm with a Key

- You can set up a key in WezTerm (like `Ctrl+Shift+A`) to show cool ASCII text using `figlet`.

**What You Need:**

* WezTerm installed
* figlet installed

**How to Set It Up:**

1. Open your WezTerm config file (`~/.wezterm.lua`)
2. Add this:

```lua
local wezterm = require 'wezterm'

return {
  keys = {
    {
      key = 'A',
      mods = 'CTRL|SHIFT',
      action = wezterm.action.SplitPane {
        direction = 'Down',
        size = 0.3,
        command = { args = { 'bash', '-c', 'figlet Hello; read' } },
      },
    },
  },
}
```

Save and restart WezTerm. Press `Ctrl+Shift+A` to see your ASCII text!
