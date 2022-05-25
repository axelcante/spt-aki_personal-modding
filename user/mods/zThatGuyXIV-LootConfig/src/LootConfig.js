"use strict";

const config = require("../conf/config.json");

class mod {
    static onLoad() {
        
        const locations = LocationConfig;

            for (const map in config.LooseLootMultiplier)
            locations.looseLootMultiplier[map] = config.LooseLootMultiplier[map];

            for (const map in config.StaticLootMultiplier)
            locations.staticLootMultiplier[map] = config.StaticLootMultiplier[map];
        }
    }


module.exports = mod;