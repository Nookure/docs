---
sidebar_position: 2
---

# Config

### Language
Here you can change the language file, the file must to be storage in the lang folder

### Debug
Here you can enable or disable the debug mode
This is only util if you have a bug or a problem

### Database
see [database](database)

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
# This is the Config file for MAStaff Spigot,
# where you can modify and customize the plugin.
#
# Remember to join my Discord server if you need help:
# https://discord.nookure.com/
#
# General configuration for the plugin.
#
Config:
  # The language file you want to use for the plugin messages.
  # Included locales: english.yml and spanish.yml
  language: "english.yml"
  # Enable or disable the debug mode.
  # If enabled, the plugin will send more information about the plugin status.
  debug: false
# Database configuration for the plugin. With the Bungee version, you must use MariaDB or MySQL.
Database:
  # The type of database you want to use, you can choose between SQLite or MySQL.
  # The MySQL driver also works with MariaDB
  type: 'SQLite'
  # Your database host IP address.
  host: '127.0.0.1'
  # Your database host connection port. Default for MariaDB and MySQL is 3306.
  port: 3306
  # Name of your database. A database server can contain multiple databases.
  database: 'mastaff'
  # Your database host username.
  user: 'mastaff'
  # Your database host password.
  password: 'mastaff'

```
</details>

* If you modify something remeber to reload the plugin with **/mast reload**