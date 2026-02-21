---
title: "sublime: Custom context Menu command"
description: add “Open in LazyGit” when you right-click a file in the Sublime sidebar...
---
### Custom context Menu command

To add “Open in LazyGit” when you right-click a file in the Sublime sidebar, do this:

**STEP 1**: 
- Go to Tools → Developer → New Plugin.
- Delete everything in the new file and paste this:

```python
import sublime
import sublime_plugin
import subprocess
import os

class OpenInLazygitCommand(sublime_plugin.WindowCommand):
    def run(self, paths=[]):
        if not paths:
            return

        path = paths[0]

        # If it's a file, use its folder
        if os.path.isfile(path):
            path = os.path.dirname(path)

        subprocess.Popen(["lazygit"], cwd=path)
```

*Save the file as:`open_in_lazygit.py`*

**STEP 2**: 
- Now add the right-click menu option.
- Go to Preferences → Browse Packages → Open the User folder → Create a new file called: `Side Bar.sublime-menu`

```json
[
    {
        "caption": "Open in LazyGit",
        "command": "open_in_lazygit",
        "args": {"paths": []}
    }
]
```

> Save the file and restart Sublime Text. Now when you right-click any file or folder in the sidebar, you will see “Open in LazyGit”.
