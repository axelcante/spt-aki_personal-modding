/*
エレシュキガル
*/

"use strict";

//AIO Modules
const Other = require("./src/other.js");
const Items = require("./src/items.js");
const Raids = require("./src/raids.js");
const Traders = require("./src/traders.js");
const Players = require("./src/player.js");
const Warnings = require("./src/warnings.js");
const Fixes = require("./src/fixes.js");


class Ereshkigal {
    constructor() {
        const mod = require("./package.json")
        const config = require("./config/config.json");
        Logger.info(`Loading: ${mod.name} : ${mod.version}`);
        ModLoader.onLoad["AioMod-items"] = Items.ApplyItemsModifications;
        ModLoader.onLoad["AioMod-raids"] = Raids.ApplyRaidsModifications;
        ModLoader.onLoad["AioMod-traders"] = Traders.ApplyTradersModifications;
        ModLoader.onLoad["AioMod-players"] = Players.ApplyPlayerModifications;
        ModLoader.onLoad["AioMod-other"] = Other.ApplyVariousModifications;
        ModLoader.onLoad["AioMod-fixes"] = Fixes.ApplyFix;
        if (config.other.ShowModLogs === true) {
            ModLoader.onLoad["AioMod-warnings"] = Warnings.SendUserInformations;
        }
    }
}

module.exports = new Ereshkigal();