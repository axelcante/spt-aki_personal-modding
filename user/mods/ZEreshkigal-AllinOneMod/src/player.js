/*
エレシュキガル
*/

"use strict";

class PlayerModifications {

    static ApplyPlayerModifications() {
        const config = require("../config/config.json");
        const database = DatabaseServer.tables;
        const globals = database.globals.config;


        //Hydratation Drain rate
        if(typeof config.player.HydratationDrainRate === "number"){
            globals.Health.Effects.Existence.HydrationDamage = config.player.HydratationDrainRate
        }

        //Hydratation Drain Time
        if(typeof config.player.HydratationDrainTime === "number"){
            globals.Health.Effects.Existence.HydrationLoopTime = config.player.HydratationDrainTime
        }

        //Energy Drain Rate
        if(typeof config.player.EnergyDrainRate === "number"){
            globals.Health.Effects.Existence.EnergyDamage = config.player.EnergyDrainRate
        }

        //Energy Drain Time
        if(typeof config.player.EnergyDrainTime === "number"){
            globals.Health.Effects.Existence.EnergyLoopTime = config.player.EnergyDrainTime
        }

        //RegenerationLoopTime
        if(typeof config.player.RegenerationLoopTime === "number"){
            globals.Health.Effects.Regeneration.LoopTime = config.player.RegenerationLoopTime
        }
 
        //Energy recovery in hideout
        if(typeof config.player.EnergyRestoration === "number"){
            globals.Health.Effects.Regeneration.Energy = config.player.EnergyRestoration
        }
        //Hydration recovery in hideout
        if(typeof config.player.HydrationRestoration === "number"){
            globals.Health.Effects.Regeneration.Hydration = config.player.HydrationRestoration
        }    

        //Remove scav timer
        if (config.player.RemoveScavTimer === true) {
            globals.SavagePlayCooldown = 1;
        }

        //Change skills progression multiplier
        if (config.player.ChangeSkillProgressionMultiplier !== false && typeof config.player.ChangeSkillProgressionMultiplier == "number") {
            globals.SkillsSettings.SkillProgressRate = config.player.ChangeSkillProgressionMultiplier;
        }

        //Change weapons skill multiplier
        if (config.player.ChangeWeaponSkillMultiplier !== false && typeof config.player.ChangeWeaponSkillMultiplier == "number") {
            globals.SkillsSettings.WeaponSkillProgressRate = config.player.ChangeWeaponSkillMultiplier;
        }

        //Change fleamarket mini level
        if (config.traders.ChangeFleaMarketLvl !== false && typeof config.traders.ChangeFleaMarketLvl == "number") {
            globals.RagFair.minUserLevel = config.traders.ChangeFleaMarketLvl;
        }

        //Change in raids restrictions
        if (config.player.RemoveInRaidsRestrictions === true) {
            globals.RestrictionsInRaid = []
        }

        //Remove fall damages
        if (config.player.DisableFallDamage === true) {
            globals.Health.Falling.SafeHeight = 200
            globals.Health.Falling.DamagePerMeter = 0
        }

        //Change staminas (unlimited or no)
        if (typeof config.player.ChangeMaxStamina == "number" && config.player.UnlimitedStamina === false) {
            globals.Stamina.Capacity = config.player.ChangeMaxStamina
        } else if (config.player.ChangeMaxStamina === false && config.player.UnlimitedStamina === true) {
            globals.Stamina.Capacity = 500,
                globals.Stamina.BaseRestorationRate = 500;
            globals.Stamina.StaminaExhaustionCausesJiggle = false;
            globals.Stamina.StaminaExhaustionStartsBreathSound = false;
            globals.Stamina.StaminaExhaustionRocksCamera = false;
            globals.Stamina.SprintDrainRate = 0;
            globals.Stamina.JumpConsumption = 0;
            globals.Stamina.AimDrainRate = 0;
            globals.Stamina.SitToStandConsumption = 0;
        }

        if (config.player.DisableSkillFatigue === true) {
            globals.SkillMinEffectiveness = 1;
            globals.SkillFatiguePerPoint = 0;
            globals.SkillFreshEffectiveness = 1.0;
        } else if (config.player.DisableSkillFatigue === "Custom") {
            
            globals.SkillMinEffectiveness = config.player.SkillMinEffectiveness;
            globals.SkillFatiguePerPoint = config.player.SkillFatiguePerPoint;
            globals.SkillFreshEffectiveness = config.player.SkillFreshEffectiveness;
            globals.SkillFreshPoints = config.player.SkillFreshPoints;
            globals.SkillPointsBeforeFatigue = config.player.SkillPointsBeforeFatigue;
            globals.SkillFatigueReset = config.player.SkillFatigueReset;
        } else if (config.player.DisableSkillFatigue !== "Custom" && config.player.DisableSkillFatigue !== false && config.player.DisableSkillFatigue !== true) {

        }


        //PreventScavKarma
        if (config.player.RemoveScavKarma == true) {
            const database = DatabaseServer.tables;
            const types = database.bots.types
            for(const bots in types){
                if(types[bots].experience.standingForKill < 0 && types[bots].experience.standingForKill > 0){
                    types[bots].experience.standingForKill = 0
                }
                if(types[bots].experience.aggressorBonus < 0 && types[bots].experience.aggressorBonus > 0){
                    types[bots].experience.aggressorBonus = 0
                }
            }
        }

        function maxSkills(url, info, sessionID) {
            const config = require("../config/config.json")
            let pmcData = null

            if (sessionID) {
                pmcData = ProfileController.getPmcProfile(sessionID);
            }

            if (pmcData !== null) {
                if ( pmcData.Skills.Common !== undefined > 0 && pmcData.Skills.Common.length) {
                    for (let skills in pmcData.Skills.Common) {
                        let skill = pmcData.Skills.Common[skills]
                        switch (skill.Id) {
                            case "BotReload":
                                if (config.player.EnableSkillBotReload === true) {
                                    skill.Progress = 5100
                                }
                                break;
                            case "BotSound":
                                if (config.player.EnableSkillBotSound === true) {
                                    skill.Progress = 5100
                                }
                                break;
                            default:
                                skill.Progress = 5100
                                break;
                        }
                    }

                } else {
                    Logger.error("No skills for PMC to master, skipping")
                }
            }
            return HttpResponse.nullResponse();
        }

        if (config.player.AllSkillsMaster === true) {
            HttpRouter.onStaticRoute["/client/game/version/validate"]["aioMod"] = maxSkills.bind(this)
        }
    }
}

module.exports = PlayerModifications;