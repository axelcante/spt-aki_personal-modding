/*
エレシュキガル
*/

"use strict";

class itemsModification {

    static ApplyItemsModifications() {
        const config = require("../config/config.json");
        const database = DatabaseServer.tables;
        const items = database.templates.items;
        const global = database.globals
        const CoreMod = require("../../CoreMod/src/Core.js")
        const OtherModitication = require("./other.js");

        for (const id in items) {
            let base = items[id]

            if (OtherModitication.IsThisIDaMod(id) === false) {

                //Examine all items
                if (config.items.AllExaminedItems === true) {
                    CoreMod.EditSimpleItemData(id, "ExaminedByDefault", true)
                }
                //Change the weight

                switch (config.items.WeightOptions) {
                    case "Forced":
                        if (typeof config.items.WeightChanger === "number") {
                            //Exclude nodes, inventory and pockets from the weight changer
                            if (base._type !== "Node" && (base.parent !== "557596e64bdc2dc2118b4571" || base._parent !== "55d720f24bdc2d88028b456d")) {
                                CoreMod.EditSimpleItemData(id, "Weight", config.items.WeightChanger)
                            }
                        }
                        break;
                    case "Perc":
                        if (typeof config.items.WeightChanger === "number") {
                            //Exclude nodes, inventory and pockets from the weight changer
                            if (base._type !== "Node" && (base.parent !== "557596e64bdc2dc2118b4571" || base._parent !== "55d720f24bdc2d88028b456d")) {
                                CoreMod.EditSimpleItemData(id, "Weight", (base._props.Weight + ((config.items.WeightChanger / 100) * base._props.Weight)).toFixed(3))
                            }
                        }
                        break;
                    case "Mult":
                        if (typeof config.items.WeightChanger === "number") {
                            //Exclude nodes, inventory and pockets from the weight changer
                            if (base._type !== "Node" && (base.parent !== "557596e64bdc2dc2118b4571" || base._parent !== "55d720f24bdc2d88028b456d")) {
                                CoreMod.EditSimpleItemData(id, "Weight", (base._props.Weight * config.items.WeightChanger))
                            }
                        }
                        break;
                }

                if (config.items.RemoveAllGearPenalties === true) {
                    if (base._props.mousePenalty) {
                        CoreMod.EditSimpleItemData(id, "mousePenalty", 0)
                    }
                    if (base._props.weaponErgonomicPenalty) {
                        CoreMod.EditSimpleItemData(id, "weaponErgonomicPenalty", 0)
                    }
                    if (base._props.speedPenaltyPercent) {
                        CoreMod.EditSimpleItemData(id, "speedPenaltyPercent", 0)
                    }
                }
                if (config.items.RemoveItemsDurabilityBurn === true) {
                    if (base._props.DurabilityBurnModificator) {
                        CoreMod.EditSimpleItemData(id, "DurabilityBurnModificator", 0)
                    }
                }

                if (config.items.RemoveBulletsWeaponDurabilityDamage === true) {
                    
                    if (base._props.Deterioration) {
                        CoreMod.EditSimpleItemData(id, "Deterioration", 0)
                    }
                    
                }

                if (config.items.RemoveWeaponsPresetRestriction === true) {
                    if (base._props.CanRequireOnRagfair === false && items[items[base._parent]._parent]._id === "5422acb9af1c889c16000029") {
                        CoreMod.EditSimpleItemData(id, "CanRequireOnRagfair", "true")
                    }
                }

                if (config.items.StackableBarters.activated === true) {
                    switch (base._parent) {
                        case "57864ee62459775490116fc1": // Battery
                            if (typeof config.items.StackableBarters.Battery === "number" && config.items.StackableBarters.Battery != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters.Battery)
                            }
                            break;
                        case "57864ada245977548638de91": //Building materials
                            if (typeof config.items.StackableBarters["Building materials"] === "number" && config.items.StackableBarters["Building materials"] != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters["Building materials"])
                            }
                            break;
                        case "57864a66245977548f04a81f": //Electronics
                            if (typeof config.items.StackableBarters.Electronics === "number" && config.items.StackableBarters.Electronics != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters.Electronics)
                            }
                            break;
                        case "57864c322459775490116fbf": //Household goods
                            if (typeof config.items.StackableBarters["Household goods"] === "number" && config.items.StackableBarters["Household goods"] != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters["Household goods"])
                            }
                            break;
                        case "57864a3d24597754843f8721": // Jewelry
                            if (typeof config.items.StackableBarters.Jewelry === "number" && config.items.StackableBarters.Jewelry != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters.Jewelry)
                            }
                            break;
                        case "57864c8c245977548867e7f1": //Medical supplies
                            if (typeof config.items.StackableBarters.Jewelry === "number" && config.items.StackableBarters["Medical supplies"] != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters["Medical supplies"])
                            }
                            break;
                        case "57864e4c24597754843f8723": //Flammable
                            if (typeof config.items.StackableBarters.Flammable === "number" && config.items.StackableBarters.Flammable != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters.Flammable)
                            }
                            break;
                        case "57864bb7245977548b3b66c2": //Tools
                            if (typeof config.items.StackableBarters.Tools === "number" && config.items.StackableBarters.Tools != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters.Tools)
                            }
                            break;
                        case "590c745b86f7743cc433c5f2": //Other
                            if (typeof config.items.StackableBarters.Other === "number" &&config.items.StackableBarters.Other != 0) {
                                CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.StackableBarters.Other)
                            }
                            break;

                    }
                }

                //Change ammo stacks
                if (typeof config.items.MoreStack == "number") {
                    if (base._name.includes("patron") && !base._name.includes("40x46")) {
                        CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.MoreStack)
                    }
                }

                //Change money stacks
                if (typeof config.items.ForceMoneyStack == "number" && base._parent === "543be5dd4bdc2deb348b4569") {
                    CoreMod.EditSimpleItemData(id, "StackMaxSize", config.items.ForceMoneyStack)
                }

                //Allow armored rigs with armors
                if (config.items.EquipRigsWithArmors === true) {
                    CoreMod.EditSimpleItemData(id, "BlocksArmorVest", false);
                }

                //Remove filters
                if (config.items.RemoveSecureContainerFilters === true) {
                    if (base._parent === "5448bf274bdc2dfc2f8b456a") {
                        if (base._props.Grids[0]._props.filters !== undefined) {
                            base._props.Grids[0]._props.filters = [];
                        }
                    }
                }
                if (config.items.RemoveBackpacksRestrictions === true) {
                    if (base._parent === "5448e53e4bdc2d60728b4567") {
                        if (base._props.Grids[0]._props.filters !== undefined) {
                            base._props.Grids[0]._props.filters = [];
                        }
                    }
                }
                if (config.items.RemoveContainersRestrictions === true) {
                    if (base._parent === "5795f317245977243854e041") {
                        if (base._props.Grids[0]._props.filters !== undefined) {
                            base._props.Grids[0]._props.filters = [];
                        }
                    }
                }

                //Change items experience gain
                if (typeof config.items.IncreaseLootExp == "number") {
                    if (base._props.LootExperience !== undefined) {
                        let calculation = Math.round((base._props.LootExperience + ((config.items.IncreaseLootExp / 100) * base._props.LootExperience)));
                        CoreMod.EditSimpleItemData(id, "LootExperience", calculation);
                    }
                }
                if (typeof config.items.IncreaseExamineExp == "number") {
                    if (base._props.ExamineExperience !== undefined) {

                        let calculation = Math.round((base._props.ExamineExperience + ((config.items.IncreaseExamineExp / 100) * base._props.ExamineExperience)));
                        CoreMod.EditSimpleItemData(id, "ExamineExperience", calculation);
                    }
                }

                //Remove the keys usage
                if (config.items.RemoveKeysUsageNumber === true) {
                    if (base._parent === "5c99f98d86f7745c314214b3" || base._parent === "5c164d2286f774194c5e69fa") {
                        base._props.MaximumNumberOfUsage = 0
                    }
                }

                //Change weapons parts moddability
                if (config.items.InRaidModdable === true) {
                    if (base._props.RaidModdable) {
                        CoreMod.EditSimpleItemData(id, "RaidModdable", true);
                        if (base._props.ToolModdable) {
                            CoreMod.EditSimpleItemData(id, "ToolModdable", true);
                        }
                    }
                    if (base._props.Slots) {
                        for (let k in base._props.Slots) {
                            if (base._props.Slots[k]._required !== "false") {
                                base._props.Slots[k]._required = false
                            }
                        }
                    }
                }
            }

            //Weapons malfunctions
            if(config.items["Weapons malfunctions"].Overheat){
                if(base._props.AllowOverheat){
                    base._props.AllowOverheat = false;
                }
            }
            if(config.items["Weapons malfunctions"].Jam){
                if(base._props.AllowJam){
                    base._props.AllowJam = false;
                }
            }
            if(config.items["Weapons malfunctions"].Feed){
                if(base._props.AllowFeed){
                    base._props.AllowFeed = false;
                }
            }
            if(config.items["Weapons malfunctions"].MisFire){
                if(base._props.AllowMisfire){
                    base._props.AllowMisfire = false;
                }
            }
            if(config.items["Weapons malfunctions"].Slide){
                if(base._props.AllowSlide){
                    base._props.AllowSlide = false;
                }
            }

            //Weapons durabilities min-max
            if(config.items["Weapons durabilities"]["Minimum spawn durability"] != false && typeof config.items["Weapons durabilities"]["Minimum spawn durability"] === "number"){
                if(base._props.durabSpawnMin){
                    base._props.durabSpawnMin = config.items["Weapons durabilities"]["Minimum spawn durability"]
                }
            }
            if(config.items["Weapons durabilities"]["Maximum spawn durability"] != false && typeof config.items["Weapons durabilities"]["Maximum spawn durability"] === "number"){
                if(base._props.durabSpawnMax){
                    base._props.durabSpawnMax = config.items["Weapons durabilities"]["Maximum spawn durability"]
                }
            }

        } //End of the loop for items modifications

        if (config.other["Pre-Wipe events"]["Make Obdolbos Powerfull"] === true) {
            const obdolbosBuff = [
                {
                    "BuffType": "StaminaRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 0.5,
                    "AbsoluteValue": true,
                    "SkillName": ""
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 10,
                    "AbsoluteValue": true,
                    "SkillName": "Endurance"
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 10,
                    "AbsoluteValue": true,
                    "SkillName": "Strength"
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 20,
                    "AbsoluteValue": true,
                    "SkillName": "StressResistance"
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 20,
                    "AbsoluteValue": true,
                    "SkillName": "Charisma"
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": -20,
                    "AbsoluteValue": true,
                    "SkillName": "Memory"
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": -20,
                    "AbsoluteValue": true,
                    "SkillName": "Intellect"
                },
                {
                    "BuffType": "SkillRate",
                    "Chance": 1,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": -20,
                    "AbsoluteValue": true,
                    "SkillName": "Attention"
                },
                {
                    "BuffType": "Pain",
                    "Chance": 0.25,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 0,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "StomachBloodloss",
                    "Chance": 0.25,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 0,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "HydrationRate",
                    "Chance": 0.25,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": -0.05,
                    "AbsoluteValue": true,
                    "SkillName": ""
                },
                {
                    "BuffType": "EnergyRate",
                    "Chance": 0.25,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": -0.05,
                    "AbsoluteValue": true,
                    "SkillName": ""
                },
                {
                    "BuffType": "DamageModifier",
                    "Chance": 0.25,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 0.2,
                    "AbsoluteValue": false,
                    "SkillName": ""
                },
                {
                    "BuffType": "QuantumTunnelling",
                    "Chance": 0.25,
                    "Delay": 1,
                    "Duration": 1800,
                    "Value": 0,
                    "AbsoluteValue": false,
                    "SkillName": ""
                }]
                global.config.Health.Effects.Stimulator.Buffs.Buffs_Obdolbos = obdolbosBuff
        }


        //Individual items proprety changes
        if (config.items.ChangeIndividualItemProperty.activated === true) {
            //Edit item properties
            if (config.items.ChangeIndividualItemProperty.ItemList !== {}) {
                for (let k in config.items.ChangeIndividualItemProperty.ItemList) {
                    if (k === "__REPLACEMEBYITEMID__") {
                        Logger.error("AllinOne Mod: " + k + " : IS NOT AN ITEMID")
                    } else {
                        for (let property in config.items.ChangeIndividualItemProperty.ItemList[k]) {
                            let value = config.items.ChangeIndividualItemProperty.ItemList[k][property]
                            CoreMod.EditSimpleItemData(k, property, value);
                        }
                    }
                }
            }
        }
    }

}

module.exports = itemsModification;