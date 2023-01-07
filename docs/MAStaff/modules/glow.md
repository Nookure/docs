---
sidebar_position: 2
---

# Glow

:::warning
This module only works if you have Vault installed
:::

You only need to add the group name as a key and it color as a children

You can disable it setting **enabled** to false

<details><summary>Avaible colors</summary>
  BLUE, GREEN, YELLOW, AQUA, DARK_AQUA, DARK_BLUE,
  DARK_GRAY, DARK_GREEN, DARK_PURPLE, DARK_RED, GOLD,
  GRAY, LIGHT_PURPLE, WHITE, BLACK
</details>

<details><summary>Config file</summary>

```config
#
# This is the player glow configuration
# file for MAStaff Spigot, where you can modify and
# customize the player glow while in staff mode.
#
# Remember to join my Discord server if you need help:
# https://discord.angelillo15.es/
#
Config:
  enabled: true
  # The plugin will get the groups from Vault,
  # make sure you have it installed.
  # Color per group. These are the available colors:
  # BLUE, GREEN, YELLOW, AQUA, DARK_AQUA, DARK_BLUE,
  # DARK_GRAY, DARK_GREEN, DARK_PURPLE, DARK_RED, GOLD,
  # GRAY, LIGHT_PURPLE, WHITE, BLACK
  groups:
    helper:
      color: 'GREEN'
    moderator:
      color: 'DARK_AQUA'
    administrator:
      color: 'RED'
    owner:
      color: 'DARK_RED'

```
</details>

