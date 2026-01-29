---
title: "Starship"
description: "Starship: to customize the terminal text view (does not work on CMD)."
tags:
  - tui
---

**[Starship](https://starship.rs/)** – A fast, customizable shell prompt written in Rust, often used in terminals like bash, zsh, fish, etc.

> The minimal, blazing-fast, and infinitely customizable prompt for any shell!

**Links :**

* [Christian Lempa Starship Config](https://github.com/ChristianLempa/dotfiles-win/blob/main/.starship/starship.toml)
* [YouTube (Christian Lempa)](https://www.youtube.com/watch?v=AK2JE2YsKto)
* [Hendrik’s Starship Config](https://github.com/hendrikmi/dotfiles/tree/main/starship)
* [Henry’s YouTube](https://www.youtube.com/@henrymisc)
* [The Ultimate Mac Terminal Setup - Beginner Tutorial](https://www.youtube.com/watch?v=d4bTkiftBOk)

### Install Starship(In Windows)

- [Starship Installation Guide](https://starship.rs/installing/)

```powershell
winget install starship
```

### PowerShell Setup

**Edit profile:**

```powershell
notepad $PROFILE
```

**Add to profile:**

```powershell
# Set Starship config environment variable... 
# ...(optional if you use default path($HOME\.config\starship.toml))
$ENV:STARSHIP_CONFIG = "$HOME\.config\starship\starship.toml"
# export STARSHIP_CONFIG = "$HOME/.config/starship/starship.toml"

# Initialize Starship prompt in PowerShell
Invoke-Expression (&starship init powershell)
```

**For WezTerm(if Using):**

- Set the default program to PowerShell or your preferred shell.

**Edit Starship Config:**

```powershell
notepad $HOME\.config\starship\starship.toml
```

[Click to Visit configuration presets for Starship](https://starship.rs/presets/)

![starship-image](images/starship.png)

From image
- 1st is **Custom03**
- 2nd is **2 -Extended of presets/tokyo-night**
- 3rd is **1 -Extended of presets/tokyo-night**

> starship.toml

<!-- tabs:start -->

<details>
<summary>1 -Extended of presets/tokyo-night</summary>

```toml
# https://starship.rs/presets/

# Add a "\" at the end of an item, if you want the next item to show on the same line
# use \n to next line
format = """
[░▒▓](#a3aed2)\
[$os](bg:#a3aed2 fg:#090c0c)\
[](bg:#769ff0 fg:#a3aed2)\
$directory\
[](fg:#769ff0 bg:#394260)\
$git_branch\
$git_status\
[](fg:#394260 bg:#212736)\
$nodejs\
$rust\
$golang\
$php\
[](fg:#212736 bg:#1d2230)\
[](fg:#1d2230)\
$fill\
[](fg:#1d2230)\
[](fg:#212736 bg:#1d2230)\
$cmd_duration\
[](fg:#394260 bg:#212736)\
$time\
\n$character"""

# Disable the blank line at the start of the prompt
# add_newline = false

[fill]
symbol = '-'

[os]
format = '[$symbol](bg:#a3aed2 fg:#090c0c) '   
disabled = false

[os.symbols]
Windows = ''
Arch = '󰣇'
Ubuntu = ''
Macos = '󰀵'

[directory]
style = "fg:#e3e5e5 bg:#769ff0"
format = "[ $path ]($style)"
truncation_length = 3
truncation_symbol = "…/"

[directory.substitutions]
"Documents" = "󰈙 "
"Downloads" = " "
"Music" = " "
"Pictures" = " "

[git_branch]
symbol = ""
style = "bg:#394260"
format = '[[ $symbol $branch ](fg:#769ff0 bg:#394260)]($style)'

[git_status]
style = "bg:#394260"
format = '[[($all_status$ahead_behind )](fg:#769ff0 bg:#394260)]($style)'

[nodejs]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[rust]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[golang]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[php]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[time]
disabled = false
time_format = "%R" # Hour:Minute Format
style = "bg:#394260"
format = '[[  $time ](fg:#769ff0 bg:#394260)]($style)'

[cmd_duration]
min_time = 700
style = "bg:#212736"
format = '[[ $duration ](fg:#769ff0 bg:#212736)]($style)'
```

</details>

<details>
<summary>2 -Extended of presets/tokyo-night</summary>

```toml
# https://starship.rs/presets/

# Add a "\" at the end of an item, if you want the next item to show on the same line
# use \n to next line
format = """
[░▒▓](#a3aed2)\
[$os](bg:#a3aed2 fg:#090c0c)\
[](bg:#769ff0 fg:#a3aed2)\
$directory\
[](fg:#769ff0 bg:#394260)\
$git_branch\
$git_status\
[](fg:#394260 bg:#212736)\
$nodejs\
$rust\
$golang\
$php\
[](fg:#212736 bg:#1d2230)\
$time\
[ ](fg:#1d2230)\
\n$character"""

# Disable the blank line at the start of the prompt
# add_newline = false

[fill]
symbol = '.'

[os]
format = '[$symbol](bg:#a3aed2 fg:#090c0c) '   
disabled = false

[os.symbols]
Windows = ''
Arch = '󰣇'
Ubuntu = ''
Macos = '󰀵'

[directory]
style = "fg:#e3e5e5 bg:#769ff0"
format = "[ $path ]($style)"
truncation_length = 3
truncation_symbol = "…/"

[directory.substitutions]
"Documents" = "󰈙 "
"Downloads" = " "
"Music" = " "
"Pictures" = " "

[git_branch]
symbol = ""
style = "bg:#394260"
format = '[[ $symbol $branch ](fg:#769ff0 bg:#394260)]($style)'

[git_status]
style = "bg:#394260"
format = '[[($all_status$ahead_behind )](fg:#769ff0 bg:#394260)]($style)'

[nodejs]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[rust]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[golang]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[php]
symbol = ""
style = "bg:#212736"
format = '[[ $symbol ($version) ](fg:#769ff0 bg:#212736)]($style)'

[time]
disabled = false
time_format = "%R" # Hour:Minute Format
style = "bg:#1d2230"
format = '[[  $time ](fg:#a0a9cb bg:#1d2230)]($style)'
```
</details>

<details>
<summary>Custom03</summary>

```toml
# This will show the time on a 2nd line
# Add a "\" at the end of an item, if you want the next item to show on the same line
# use \n to next line
format = """
$os\
$username\
$hostname
$directory\
$git_branch\
$git_status\
$fill\
$cmd_duration\
$time\
$all\
$character"""

[character]
success_symbol = '[❯❯❯](#37f499 bold)'
error_symbol = '[XX](#f16c75 bold)'
vicmd_symbol = '[❮❮❮](#987afb bold)'

[fill]
symbol = '.'

[battery]
disabled = false

[gcloud]
disabled = true

[time]
style = '#987afb bold'
disabled = false
format = '[\[$time\]]($style) '
# format = '[\[$time  \]]($style) '
# https://docs.rs/chrono/0.4.7/chrono/format/strftime/index.html
# %T	00:34:60	Hour-minute-second format. Same to %H:%M:%S.
# time_format = '%y/%m/%d %T'
# time_format = '%y/%m/%d'
time_format = '%T'

[cmd_duration]
min_time = 500
format = '[$duration](bold yellow) '

[username]
style_user = '#987afb bold'
style_root = 'white bold'
format = '[$user]($style).'
show_always = true

[os]
format = '[$symbol](bold white) '   
disabled = false

[os.symbols]
Windows = ''
Arch = '󰣇'
Ubuntu = ''
Macos = '󰀵'

# [hostname]
# ssh_only = false
# format = '[.@.](white bold)[$hostname](#37f499 bold)'

# Shows current directory
[directory]
style = "fg:#e3e5e5 bg:none"
format = 'at [$path]($style) '
truncation_length = 3
truncation_symbol = '…/'
truncate_to_repo = false

[directory.substitutions]
"Documents" = " "
"Downloads" = " "
"Music" = " "
"Pictures" = " "

[git_branch]
symbol = ""
style = "bg:#394260"
format = '[[ $symbol $branch ](fg:#769ff0 bg:#394260)]($style)'

[git_status]
style = "bg:#394260"
format = '[[($all_status$ahead_behind )](fg:#769ff0 bg:#394260)]($style)'
```
</details>

<!-- tabs:end -->