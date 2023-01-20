---
sidebar_position: 2
---

# Bungeecord Config

# Config

### Language
Here you can change the language file, the file must to be storage in the lang folder

### Debug
Here you can enable or disable the debug mode
This is only util if you have a bug or a problem

### Helpop
Here you can change the cooldown of the helpop command the default is in 30 seconds

<details><summary>Config file</summary>

```config
#
#  ███▄ ▄███▓ ▄▄▄        ██████ ▄▄▄█████▓ ▄▄▄        █████▒ █████▒
#  ▓██▒▀█▀ ██▒▒████▄    ▒██    ▒ ▓  ██▒ ▓▒▒████▄    ▓██   ▒▓██   ▒
#  ▓██    ▓██░▒██  ▀█▄  ░ ▓██▄   ▒ ▓██░ ▒░▒██  ▀█▄  ▒████ ░▒████ ░
#  ▒██    ▒██ ░██▄▄▄▄██   ▒   ██▒░ ▓██▓ ░ ░██▄▄▄▄██ ░▓█▒  ░░▓█▒  ░
#  ▒██▒   ░██▒ ▓█   ▓██▒▒██████▒▒  ▒██▒ ░  ▓█   ▓██▒░▒█░   ░▒█░
#  ░ ▒░   ░  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░  ▒ ░░    ▒▒   ▓▒█░ ▒ ░    ▒ ░
#  ░  ░      ░  ▒   ▒▒ ░░ ░▒  ░ ░    ░      ▒   ▒▒ ░ ░      ░
#  ░      ░     ░   ▒   ░  ░  ░    ░        ░   ▒    ░ ░    ░ ░
#  ░         ░  ░      ░                 ░  ░
#
# This is the Config file for MAStaff Bungee,
# where you can modify and customize the plugin.
#
# Remember to join my Discord server if you need help:
# https://discord.angelillo15.es/
#
# General configuration for the plugin.
#
Config:
  # The language file you want to use for the plugin messages.
  # Included locales: english.yml and spanish.yml
  language: "english.yml"

Helpop:
  # Cooldown in seconds
  cooldown: 30
```
</details>

* If you modify something remeber to reload the plugin with **/mastb reload**