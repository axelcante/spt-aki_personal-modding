/*
エレシュキガル
*/

"use strict";

const DontNukeMyModPlz = []

class OtherModifications {

    static ApplyVariousModifications() {
        const config = require("../config/config.json");
        if (config.other.CompatibilityMods.TerragroupSpecialist === true) {
            DontNukeMyModPlz.push("terragroupSpecialist")
        } else if (config.other.CompatibilityMods["CoD MW - Mil-Sim: CTSFO I"] === true) {
            DontNukeMyModPlz.push("ctsfo1")
        } else if (config.other.CompatibilityMods["Additionnal Gear - Tan"]) {
            DontNukeMyModPlz.push("AddGearTan")
        } else if (config.other.CompatibilityMods["Additionnal Gear - Black"]) {
            DontNukeMyModPlz.push("AddGearBlack")
        } else if (config.other.CompatibilityMods["Additionnal Gear - Untar"]) {
            DontNukeMyModPlz.push("AddGearUntar")
        } else if (config.other.CompatibilityMods["Additionnal Clothing"]) {
            DontNukeMyModPlz.push("AdditionalClothing")
        } else if (config.other.CompatibilityMods["Andrudis Quest Maniac"]) {
            DontNukeMyModPlz.push("Ammo_Proficiency")
        }

    }

    static IsThisIDaMod(id) {
        if (DontNukeMyModPlz.length > 0) {
            for (const mod in DontNukeMyModPlz) {
                if (id.includes(DontNukeMyModPlz[mod])) {
                    return true;
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }

    static CustomWarning(prefix, text, suffix = "") {
        Logger.log("[" + prefix + "]" + text + " " + suffix, "white", "red")
    }

    static SpawnRaidersEverywhere(url, info, sessionID){
        for (let type in info.conditions) {
            let roles = info.conditions[type]
            roles.Role = "pmcBot"
            roles.Difficulty = "impossible"
        }
        return HttpResponse.getBody(BotController.generate(info));
    }
    static CreateBossWave(role,chance,followers,escortAmount,zones){
        const newWave = {
			"BossName": role,
			"BossChance": chance,
			"BossZone": zones,
			"BossPlayer": false,
			"BossDifficult": "normal",
			"BossEscortType": followers,
			"BossEscortDifficult": "normal",
			"BossEscortAmount": escortAmount,
			"Time": -1
		}
        return newWave
    }
}

module.exports = OtherModifications;