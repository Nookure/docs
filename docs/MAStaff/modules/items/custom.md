---
sidebar_position: 2
---

# Custom Items


Here you can add custom items to the game.
You can add as many items as you want.

Remember to join my Discord server if you need help:
https://discord.nookure.com/


### Params


| Key        | Explanation                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled    | enable/disable the item                                                                                                                                 |
| permission | The permission that must have the player to get the item                                                                                                |
| name       | The item name                                                                                                                                           |
| material   | The material of the item see: [javadoc material enum](https://javadocs.angelillo15.es/javadocs/mastaff/es/angelillo15/mast/api/material/XMaterial.html) |
| slot       | The slot to put the item                                                                                                                                |
| lore       | the item lore that will have the item                                                                                                                   |
| type       | The item type (COMMAND or COMMAND_TARGET) |
| command    | The command to execute use {player} placeholder to get player name and {target} to get target name if the type is COMMAND_TARGET |

<details><summary>Config file</summary>

```yaml
#
# Here you can add custom items to the game.
# You can add as many items as you want.
#
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/
#
StaffItems:
  staffList:
    enabled: true
    permission: 'mast.item.stafflist'
    name: '&bStaff List'
    type: 'COMMAND'
    command: 'staff staffList'
    material: 'CLOCK'
    slot: 7
    lore:
      - '&7Click to open the'
      - '&7staff list.'
  banTarget:
    enabled: true
    permission: 'mast.item.kick'
    name: '&bKick Target'
    type: 'COMMAND_TARGET'
    command: 'kick {target} kicked by {player}'
    material: 'REDSTONE_BLOCK'
    slot: 2
    lore:
      - '&7Click to ban the'
      - '&7player you are looking at.'
```

</details>

* If you modify something remeber to reload the plugin with **/mast reload**