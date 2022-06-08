/*
エレシュキガル
*/

"use strict";

class RaidsModifications {
    static ApplyRaidsModifications() {
        const config = require("../config/config.json")
        const database = DatabaseServer.tables;
        const hideout = database.hideout
        const locations = database.locations;
        const botList = database.bots.types
        const OtherModitication = require("./other.js");

        //Change hideout fuel consumption
        if (config.hideout.ChangeFuelConsumptionRate !== false) {
            if (typeof config.hideout.ChangeFuelConsumptionRate === "number") {
                hideout.settings.generatorFuelFlowRate = config.hideout.ChangeFuelConsumptionRate
            }
        }

        //Enable hideout fast constructions
        if (config.hideout.FastHideoutConstruction === true) {

            for (const data in hideout.areas) {
                let areaData = hideout.areas[data]
                if (OtherModitication.IsThisIDaMod(areaData._id) === false) {
                    for (const i in areaData.stages) {

                        if (areaData.stages[i].constructionTime > 2400) {
                            areaData.stages[i].constructionTime = 2400;
                        }

                    }
                }
            }
        }

        //Enable fast hideout production
        if (config.hideout.FastHideoutProduction === true) {

            for (const data in hideout.production) {
                let productionData = hideout.production[data];
                if (OtherModitication.IsThisIDaMod(productionData._id) === false) {
                    if (productionData.continuous === false && productionData.productionTime > 900) {
                        productionData.productionTime = 900;
                    }
                }
            }

        }

        //Scav cases modifications
        if (config.hideout.FastScavCase === true) {

            for (const scav in hideout.scavcase) {
                let caseData = hideout.scavcase[scav];
                if (OtherModitication.IsThisIDaMod(caseData._id) === false) {
                    if (caseData.ProductionTime > 1200) {
                        caseData.ProductionTime = 1200;
                    }
                }
            }
        }
        if (config.hideout.ScavCasePriceReducer === true) {
            for (const scase in hideout.scavcase) {
                let caseData = hideout.scavcase[scase];
                if (OtherModitication.IsThisIDaMod(caseData._id) === false) {
                    if (caseData.Requirements[0].count >= 10 && (caseData.Requirements[0].templateId === "5449016a4bdc2d6f028b456f" || caseData.Requirements[0].templateId === "5696686a4bdc2da3298b456a" || caseData.Requirements[0].templateId === "569668774bdc2da2298b4568")) {
                        caseData.Requirements[0].count = 10;
                    }
                }
            }
        }

        //Remove construction requirements
        if(config.hideout.RemoveConstructionsRequirements === true){
            for (const data in hideout.areas) {
                let areaData = hideout.areas[data]
                if (OtherModitication.IsThisIDaMod(areaData._id) === false) {
                    for (const i in areaData.stages) {
                        if (areaData.stages[i].requirements !== undefined) {
                            areaData.stages[i].requirements = [];
                        }

                    }
                }
            }
        }

        //Remove labs entry keycard
        if (config.raids.RemoveLabKeycard === true) {
            locations["laboratory"].base.AccessKeys = []
        }

        //Remove extracts restrictions
        if (config.raids.NoExtractsRestrictions === true) {
            for (let i in locations) {
                if (i !== "base") {
                    for (let x in locations[i].base.exits) {
                        if (locations[i].base.exits[x].Name !== "EXFIL_Train" && !locations[i].base.exits[x].Name.includes("lab") || locations[i].base.exits[x].Name === "lab_Vent") {
                            if (locations[i].base.exits[x].PassageRequirement !== "None") {
                                locations[i].base.exits[x].PassageRequirement = "None";
                            }
                            if (locations[i].base.exits[x].ExfiltrationType !== "Individual") {
                                locations[i].base.exits[x].ExfiltrationType = "Individual";
                            }
                            if (locations[i].base.exits[x].Id !== '') {
                                locations[i].base.exits[x].Id = '';
                            }
                            if (locations[i].base.exits[x].Count !== 0) {
                                locations[i].base.exits[x].Count = 0;
                            }
                            if (locations[i].base.exits[x].RequirementTip !== '') {
                                locations[i].base.exits[x].RequirementTip = '';
                            }
                            if (locations[i].base.exits[x].RequiredSlot) {
                                delete locations[i].base.exits[x].RequiredSlot;
                            }
                        }
                    }
                }
            }
        }

        //Make all extractions available to extract
        if (config.raids.AllExtractionsAvailable === true) {
            for (let i in locations) {
                if (i !== "base") {
                    for (let x in locations[i].base.exits) {
                        if (locations[i].base.exits[x].Name !== "EXFIL_Train") {
                            if (locations[i].base.exits[x].Chance !== 100) {
                                locations[i].base.exits[x].Chance = 100;
                            }
                        }
                    }
                }
            }
        }

        //Make all maps have functional insurance
        if (config.raids.InsuranceOnAllMaps === true) {
            for (let i in locations) {
                if (i !== "base") {
                    locations[i].base.Insurance = true;
                }
            }
        }

        //Make all bosses to 100% spawn
        if (config.raids.IncreasedBossChance === true) {
            Logger.info("AllinOne Mod: IncreasedBossChance activated");
            for (let i in locations) {
                if (i !== "base") {
                    if (locations[i].base.BossLocationSpawn !== []) {
                        for (let x in locations[i].base.BossLocationSpawn) {
                            locations[i].base.BossLocationSpawn[x].BossChance = 100
                        }
                    }
                }
            }
        }

        if(config.other["Pre-Wipe events"]["Raiders on all maps"] === true){
            HttpRouter.onStaticRoute["/client/game/bot/generate"]["aki"] = OtherModitication.SpawnRaidersEverywhere.bind(this);
            
        }

        if(config.other["Pre-Wipe events"]["Killa on factory"] === true){
            const KillaWave = OtherModitication.CreateBossWave("bossKilla",100,"followerBully",0,locations["factory4_day"].base.OpenZones)
            locations["factory4_day"].base.BossLocationSpawn.push(KillaWave)
            locations["factory4_night"].base.BossLocationSpawn.push(KillaWave)
        }

        if(config.other["Pre-Wipe events"]["All bosses on reserve"] === true){
           let bossWave = OtherModitication.CreateBossWave("bossKilla",100,"followerBully",0,locations["rezervbase"].base.OpenZones)
           locations["rezervbase"].base.BossLocationSpawn.push(bossWave)
           bossWave = OtherModitication.CreateBossWave("bossBully",100,"followerBully",4,locations["rezervbase"].base.OpenZones)
           locations["rezervbase"].base.BossLocationSpawn.push(bossWave)
           bossWave = OtherModitication.CreateBossWave("bossKojaniy",100,"followerKojaniy",2,locations["rezervbase"].base.OpenZones)
           locations["rezervbase"].base.BossLocationSpawn.push(bossWave)
           bossWave = OtherModitication.CreateBossWave("bossSanitar",100,"followerSanitar",2,locations["rezervbase"].base.OpenZones)
           locations["rezervbase"].base.BossLocationSpawn.push(bossWave)
        }

        if(config.other["Pre-Wipe events"]["Gluhkar on labs"] === true){
            const GlugluWave = {
                "BossName": "bossGluhar",
                "BossChance": 43,
                "BossZone": "ZoneRailStrorage,ZoneRailStrorage,ZoneRailStrorage,ZonePTOR1,ZonePTOR2,ZoneBarrack,ZoneBarrack,ZoneBarrack,ZoneSubStorage",
                "BossPlayer": false,
                "BossDifficult": "normal",
                "BossEscortType": "followerGluharAssault",
                "BossEscortDifficult": "normal",
                "BossEscortAmount": "0",
                "Time": -1,
                "TriggerId": "",
                "TriggerName": "",
                "Supports": [
                    {
                        "BossEscortType": "followerGluharAssault",
                        "BossEscortDifficult": [
                            "normal"
                        ],
                        "BossEscortAmount": "2"
                    },
                    {
                        "BossEscortType": "followerGluharSecurity",
                        "BossEscortDifficult": [
                            "normal"
                        ],
                        "BossEscortAmount": "2"
                    },
                    {
                        "BossEscortType": "followerGluharScout",
                        "BossEscortDifficult": [
                            "normal"
                        ],
                        "BossEscortAmount": "2"
                    }
                ]
            }
            GlugluWave.BossZone = locations["laboratory"].base.OpenZones
            locations["laboratory"].base.BossLocationSpawn.push(GlugluWave)
        }

        //Extend raids to defined number
        if (config.raids.ExtendedRaid != false && typeof config.raids.ExtendedRaid === "number") {
            for (let map in locations) {
                if (map !== "base") {
                    locations[map].base.exit_access_time = config.raids.ExtendedRaid
                    locations[map].base.escape_time_limit = config.raids.ExtendedRaid
                }
            }
        }

        //Make all extractions of the map available regardless of the infill
        if (config.raids.ExtractionsExtended === true) {
            for (let map in locations) {
                switch (map) {
                    case "base":
                        break;
                    case "bigmap":
                        for (const extract in locations[map].base.exits) {
                            locations[map].base.exits[extract].EntryPoints = "Customs,Boiler Tanks"
                        }
                        break;
                    case "interchange":
                        for (const extract in locations[map].base.exits) {
                            locations[map].base.exits[extract].EntryPoints = "MallSE,MallNW"
                        }
                        break;
                    case "shoreline":
                        for (const extract in locations[map].base.exits) {
                            locations[map].base.exits[extract].EntryPoints = "Village,Riverside"
                        }
                        break;
                    case "woods":
                        for (const extract in locations[map].base.exits) {
                            locations[map].base.exits[extract].EntryPoints = "House,Old Station"
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

module.exports = RaidsModifications;