"use strict";

const mod = require("./src/LootConfig.js");

class Mod {
    constructor() {
        Logger.info("Loading: ThatGuyXIV Loot Config-1.0.0");
        ModLoader.onLoad["ThatGuyXIV-LootConfig"] = mod.onLoad;
    }
}

module.exports.Mod = new Mod();