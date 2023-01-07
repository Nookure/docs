---
sidebar_position: 1
---
# Internal Items
These include the items of the StaffMode the default Items

### Params


| Key        | Explanation                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled    | enable/disable the item                                                                                                                                 |
| permission | The permission that must have the player to get the item                                                                                                |
| name       | The item name                                                                                                                                           |
| material   | The material of the item see: [javadoc material enum](https://javadocs.angelillo15.es/javadocs/mastaff/es/angelillo15/mast/api/material/XMaterial.html) |
| slot       | The slot to put the item                                                                                                                                |
| lore       | the item lore that will have the item                                                                                                                   |

<details><summary>Config file</summary>

```yaml
#
# This is the internal modules configuration file for
# MAStaff Spigot, where you can modify and customize
# staff mode plugin items.
#
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/
#
StaffItems:
  RANDOM_PLAYER_TELEPORT:
    enabled: true
    permission: 'mast.item.rtp'
    name: '&bRandom Teleport'
    material: 'ENDER_PEARL'
    slot: 0
    lore:
      - '&7Click to teleport'
      - '&7to a random player.'
  FREEZE:
    enabled: true
    permission: 'mast.item.freeze'
    name: '&bFreeze'
    material: 'BLAZE_ROD'
    slot: 1
    lore:
      - '&7Click to freeze'
      - '&7the player you are looking at.'
  ENDER_CHEST:
    enabled: true
    permission: 'mast.item.enderchest'
    name: '&bEnder Chest'
    material: 'ENDER_CHEST'
    slot: 3
    lore:
      - '&7Click to view the enderchest of'
      - '&7the player you are looking at.'
  VANISH:
    enabled: true
    permission: 'mast.item.vanish'
    name: '&bVanish'
    material: 'ENDER_EYE'
    slot: 4
    lore:
      - '&7Click to enable or disable'
      - '&7the vanish.'
  CHEST:
    enabled: true
    permission: 'mast.item.chest'
    name: '&bChest'
    material: 'CHEST'
    slot: 5
    lore:
      - '&7Click to view the inventory of'
      - '&7the player you are looking at.'
  THRU:
    enabled: true
    permission: 'mast.item.thru'
    name: '&bTHRU'
    material: 'COMPASS'
    slot: 8
    lore:
      - '&7Click to passthrough a wall.'
```

</details>

* If you modify something remeber to reload the plugin with **/mast reload**