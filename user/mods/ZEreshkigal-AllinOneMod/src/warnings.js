/*
エレシュキガル
*/

"use strict";

class Warnings {
    static SendUserInformations() {

        const config = require("../config/config.json");
        const errors = require("../config/errors.json")
        const OtherModitication = require("./other.js");
        //Notice information
        if (config.other.HideWarningMessage === false) {
            Logger.log(`[AIO Mod INFORMATION]`, "white", "red");
            Logger.log(`Please read the README.PDF carefully as this has all the information you need.`, "white", "red");
            Logger.log(`[AIO Mod INFORMATION]`, "white", "red");
        }
        if (typeof config.items["Weapons malfunctions"].Feed !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons malfunctions"].Feed)
        }
        if (typeof config.items["Weapons malfunctions"].Jam !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons malfunctions"].Jam)
        }
        if (typeof config.items["Weapons malfunctions"].Slide !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons malfunctions"].Slide)
        }
        if (typeof config.items["Weapons malfunctions"].Misfire !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons malfunctions"].Misfire)
        }
        if (typeof config.items["Weapons malfunctions"].Overheat !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons malfunctions"].Overheat)
        }
        if (typeof config.items["Weapons durabilities"]["Minimum spawn durability"] !== "number" && config.items["Weapons durabilities"]["Minimum spawn durability"] != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons durabilities"])
        }
        if (typeof config.items["Weapons durabilities"]["Maximum spawn durability"] !== "number" && config.items["Weapons durabilities"]["Maximum spawn durability"] != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.items["Weapons durabilities"]["Maximum spawn durability"])
        }
        if (typeof config.player.HydratationDrainRate !== "number" && config.player.HydratationDrainRate != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.HydratationDrainRate)
        }
        if (typeof config.player.HydratationDrainTime !== "number" && config.player.HydratationDrainTime != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.HydratationDrainTime)
        }
        if (typeof config.player.EnergyDrainRate !== "number" && config.player.EnergyDrainRate != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.EnergyDrainRate)
        }
        if (typeof config.player.EnergyDrainTime !== "number" && config.player.EnergyDrainTime != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.EnergyDrainTime)
        }
        if (typeof config.player.RegenerationLoopTime !== "number" && config.player.RegenerationLoopTime != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.RegenerationLoopTime)
        }
        if (typeof config.player.EnergyRestoration !== "number" && config.player.EnergyRestoration != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.EnergyRestoration)
        }
        if (typeof config.player.HydrationRestoration !== "number" && config.player.HydrationRestoration != false) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.HydrationRestoration)
        }
        if (typeof config.items.ChangeIndividualItemProperty.activated !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.ChangeIndividualItemProperty.activated)
        }
        if (typeof config.items.AllExaminedItems !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.AllExaminedItems)
        }
        if (typeof config.items.StackableBarters.activated !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.StackableBarters)
        }
        if (typeof config.items.RemoveAllGearPenalties !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveAllGearPenalties)
        }
        if (typeof config.items.RemoveItemsDurabilityBurn !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveItemsDurabilityBurn)
        }
        if (typeof config.items.RemoveBulletsWeaponDurabilityDamage !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveBulletsWeaponDurabilityDamage)
        }
        if (typeof config.items.RemoveWeaponsPresetRestriction !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveWeaponsPresetRestriction)
        }
        if (typeof config.hideout.RemoveConstructionsRequirements !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.hideout.RemoveConstructionsRequirements)
        }
        if (typeof config.player.DisableFallDamage !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.DisableFallDamage)
        }
        if (typeof config.traders["Remove FIR condition on quests"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders["Remove FIR condition on quests"])
        }
        if (typeof config.raids.ExtractionsExtended !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.ExtractionsExtended)
        }
        if (typeof config.raids.InsuranceOnAllMaps !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.InsuranceOnAllMaps)
        }
        if (config.items.MoreStack !== false && typeof config.items.MoreStack !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.MoreStack)
        }
        if (config.items.WeightOptions !== "Forced" && config.items.WeightOptions !== "Perc" && config.items.WeightOptions !== false
             && config.items.WeightOptions !== "Mult") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.WeightOptions)
        }
        if (typeof config.items.EquipRigsWithArmors !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.EquipRigsWithArmors)
        }
        if (typeof config.items.ForceMoneyStack !== "number" && config.items.ForceMoneyStack !== false) {
            OtherModitication.CustomWarning("AIO Mod", errors.items.ForceMoneyStack)
        }
        if (typeof config.items.RemoveSecureContainerFilters !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveSecureContainerFilters)
        }
        if (typeof config.items.RemoveBackpacksRestrictions !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveBackpacksRestrictions)
        }
        if (typeof config.items.RemoveContainersRestrictions !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveContainersRestrictions)
        }
        if (typeof config.items.InRaidModdable !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.InRaidModdable)
        }
        if (config.items.IncreaseLootExp !== false && typeof config.items.IncreaseLootExp !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.IncreaseLootExp)
        }
        if (config.items.IncreaseExamineExp !== false && typeof config.items.IncreaseExamineExp !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.IncreaseExamineExp)
        }
        if (typeof config.raids.RemoveLabKeycard !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.RemoveLabKeycard)
        }
        if (typeof config.traders.TradersChanges.AllTraders4Stars !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.TradersChanges.AllTraders4Stars)
        }
        if (typeof config.traders.TradersChanges.UnlockAllItemsAtLL1 !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.TradersChanges.UnlockAllItemsAtLL1)
        }
        if (typeof config.traders.TradersChanges.RemoveItemsFroMQuestLocks !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.TradersChanges.RemoveItemsFroMQuestLocks)
        }
        if (typeof config.player.AllSkillsMaster !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.AllSkillsMaster)
        }
        if (typeof config.traders.InsuranceTime.activated !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.InsuranceTime.activated)
        }
        if (config.raids.ExtendedRaid !== false && typeof config.raids.ExtendedRaid !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.ExtendedRaid)
        }
        if (typeof config.raids.IncreasedBossChance !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.IncreasedBossChance)
        }
        if (typeof config.raids.AllExtractionsAvailable !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.AllExtractionsAvailable)
        }
        if (typeof config.raids.NoExtractsRestrictions !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.raids.NoExtractsRestrictions)
        }
        if (typeof config.player.RemoveInRaidsRestrictions !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.RemoveInRaidsRestrictions)
        }
        if (typeof config.player.UnlimitedStamina !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.UnlimitedStamina)
        }
        if (config.player.ChangeMaxStamina !== false && typeof config.player.ChangeMaxStamina !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.ChangeMaxStamina)
        }
        if (config.player.DisableSkillFatigue !== "Custom" && config.player.DisableSkillFatigue !== false && config.player.DisableSkillFatigue !== true) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.DisableSkillFatigue)
        }
        if (config.traders.ChangeFleaMarketLvl !== false && typeof config.traders.ChangeFleaMarketLvl !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.ChangeFleaMarketLvl)
        }
        if (config.player.ChangeWeaponSkillMultiplier !== false && typeof config.player.ChangeWeaponSkillMultiplier !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.ChangeWeaponSkillMultiplier)
        }
        if (config.player.ChangeSkillProgressionMultiplier !== false && typeof config.player.ChangeSkillProgressionMultiplier !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.ChangeSkillProgressionMultiplier)
        }
        if (typeof config.player.RemoveScavTimer !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.player.RemoveScavTimer)
        }
        if (typeof config.traders.AllClothesFree !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.AllClothesFree)
        }
        if (typeof config.traders.AllClotheForEverySide !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.AllClotheForEverySide)
        }
        if (typeof config.traders.AllQuestsAvailable !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.traders.AllQuestsAvailable)
        }
        if (typeof config.hideout.ScavCasePriceReducer !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.hideout.ScavCasePriceReducer)
        }
        if (typeof config.hideout.FastScavCase !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.hideout.FastScavCase)
        }
        if (typeof config.hideout.FastHideoutProduction !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.hideout.FastHideoutProduction)
        }
        if (typeof config.hideout.FastHideoutConstruction !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.hideout.FastHideoutConstruction)
        }
        if (typeof config.hideout.ChangeFuelConsumptionRate !== "number" && config.hideout.ChangeFuelConsumptionRate !== false) {
            OtherModitication.CustomWarning("AIO Mod", errors.hideout.ChangeFuelConsumptionRate)
        }
        if (typeof config.items.ChangeIndividualItemProperty.activated !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.ChangeIndividualItemProperty.activated)
        }
        if (typeof config.items.RemoveKeysUsageNumber !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.RemoveKeysUsageNumber)
        }
        if (config.player.DisableSkillFatigue !== "Custom" && config.player.DisableSkillFatigue !== false && config.player.DisableSkillFatigue !== true) {
            OtherModitication.CustomWarning("AIO Mod", errors.player.DisableSkillFatigue)
        }
        if (typeof config.other["Pre-Wipe events"]["Raiders on all maps"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.other["Pre-Wipe events"]["Raiders on all maps"])
        }
        if (typeof config.other["Pre-Wipe events"]["Killa on factory"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.other["Pre-Wipe events"]["Killa on factory"])
        }
        if (typeof config.other["Pre-Wipe events"]["All bosses on reserve"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.other["Pre-Wipe events"]["All bosses on reserve"])
        }
        if (typeof config.other["Pre-Wipe events"]["All traders sells cheap items"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.other["Pre-Wipe events"]["All traders sells cheap items"])
        }
        if (typeof config.other["Pre-Wipe events"]["Make Obdolbos Powerfull"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.other["Pre-Wipe events"]["Make Obdolbos Powerfull"])
        }
        if (typeof config.other["Pre-Wipe events"]["Gluhkar on labs"] !== "boolean") {
            OtherModitication.CustomWarning("AIO Mod", errors.other["Pre-Wipe events"]["Gluhkar on labs"])
        }
        if (config.Fixes["Fins-Choke-Me-Harder"] !== true && config.Fixes["Fins-Choke-Me-Harder"] !== false) {
            OtherModitication.CustomWarning("AIO Mod", errors.Fixes.FinsChokeMeHarder);
        }
        if (config.Fixes["Chomps-RaiderSpawnFix"] !== true && config.Fixes["Chomps-RaiderSpawnFix"] !== false) {
            OtherModitication.CustomWarning("AIO Mod", errors.Fixes.ChompsRaiderSpawnFix);
        }
        if (config.Fixes["JustNU's-EvenMoreOpenZones"] !== true && config.Fixes["JustNU's-EvenMoreOpenZones"] !== false) {
            OtherModitication.CustomWarning("AIO Mod", errors.Fixes.JustNUsEvenMoreOpenzones);
        }
        /////// Activation notices
        if (config.items.RemoveKeysUsageNumber === true) {
            Logger.info("AllinOne Mod: RemoveKeysUsageNumber activated.");
        }
        if (config.hideout.FastScavCase === true) {
            Logger.info("AllinOne Mod: FastScavCase activated.");
        }
        if (config.hideout.FastHideoutConstruction === true) {
            Logger.info("AllinOne Mod: FastHideoutConstruction activated.");
        }
        if (config.hideout.FastHideoutProduction === true) {
            Logger.info("AllinOne Mod: FastHideoutProduction activated.");
        }
        if (config.hideout.ScavCasePriceReducer === true) {
            Logger.info("AllinOne Mod: ScavCasePriceReducer activated");
        }
        if (config.traders.AllQuestsAvailable === true) {
            Logger.info("AllinOne Mod: AllQuestsAvailable activated.");
        }
        if (config.traders.AllClotheForEverySide === true) {
            Logger.info("AllinOne Mod: AllClotheForEverySide activated.");
            OtherModitication.CustomWarning("AIO Mod", " THIS OPTION MIGHT HAVE ISSUES CURRENTLY WITH SPT-AKI.");
        }
        if (config.traders.AllClothesFree === true) {
            Logger.info("AllinOne Mod: AllClothesFree activated.");
            OtherModitication.CustomWarning("AIO Mod", " THIS OPTION MIGHT HAVE ISSUES CURRENTLY WITH SPT-AKI.");
        }
        if (config.player.RemoveScavTimer === true) {
            Logger.info("AllinOne Mod: RemoveScavTimer activated.");
        }
        if (config.player.ChangeSkillProgressionMultiplier !== false && typeof config.player.ChangeSkillProgressionMultiplier == "number") {
            Logger.info("AllinOne Mod: ChangeSkillProgressionMultiplier activated.");
        }
        if (config.player.ChangeWeaponSkillMultiplier !== false && typeof config.player.ChangeWeaponSkillMultiplier == "number") {
            Logger.info("AllinOne Mod: ChangeWeaponSkillMultiplier activated.");
        }
        if (config.traders.ChangeFleaMarketLvl !== false && typeof config.traders.ChangeFleaMarketLvl == "number") {
            Logger.info("AllinOne Mod: ChangeFleaMarketLvl activated.");
        }
        if (config.player.DisableSkillFatigue === true) {
            Logger.info("AllinOne Mod: DisableSkillFatigue activated.");
        }
        if (config.player.DisableSkillFatigue === "Custom") {
            Logger.info("AllinOne Mod: DisableSkillFatigue activated on Custom settings.");
            Logger.info("AllinOne Mod: Fatigue Settings: MinEffect: " + config.player.SkillMinEffectiveness + " FatiguePerPoint: " + config.player.SkillFatiguePerPoint + " FreshEffect: " + config.player.SkillFreshEffectiveness + " FreshPoints: " + config.player.SkillFreshPoints + " PointsBeforeFatigue: " + config.player.SkillPointsBeforeFatigue + " FatigueResetTime: " + config.player.SkillFatigueReset);
        }
        if (typeof config.player.ChangeMaxStamina == "number" && config.player.UnlimitedStamina === false) {
            Logger.info("AllinOne Mod: ChangeMaxStamina activated.");
        }
        if (config.player.ChangeMaxStamina === false && config.player.UnlimitedStamina === true) {
            Logger.info("AllinOne Mod: UnlimitedStamina activated.");
        }
        if(typeof config.player.RegenerationLoopTime === "number"){
            Logger.info("AllinOne Mod: RegenerationLoopTime set to: " + config.player.RegenerationLoopTime + " seconds.");
        }
	    if(typeof config.player.HydrationRestoration === "number"){
            Logger.info("AllinOne Mod: HydrationRestoration set to: " + config.player.HydrationRestoration + " per loop.");
        }
	    if(typeof config.player.EnergyRestoration === "number"){
            Logger.info("AllinOne Mod: EnergyRestoration set to: " + config.player.EnergyRestoration + " per loop.");
        }
        if (config.player.RemoveInRaidsRestrictions === true) {
            Logger.info("AllinOne Mod: RemoveInRaidsRestrictions activated.");
        }
        if (config.raids.RemoveLabKeycard === true) {
            Logger.info("AllinOne Mod: RemoveLabKeycard activated.");
        }
        if (config.raids.NoExtractsRestrictions === true) {
            Logger.info("AllinOne Mod: NoExtractsRestrictions activated.");
        }
        if (config.raids.AllExtractionsAvailable === true) {
            Logger.info("AllinOne Mod: AllExtractionsAvailable activated.");
        }
        if (config.raids.ExtendedRaid === true) {
            Logger.info("AllinOne Mod: ExtendedRaid activated.");
        }
        if (config.items.WeightOptions === "Forced") {
            Logger.info("AllInOne Mod: WeightOptions Forced to " + config.items.WeightChanger + " kg");
        }
        if (typeof config.items.WeightChanger !== "number") {
            OtherModitication.CustomWarning("AIO Mod", errors.items.WeightChanger);
        }
        if (config.items.WeightOptions === "Perc" && config.items.WeightChanger > 0) {
            Logger.info("AllInOne Mod: WeightOptions Increased by " + config.items.WeightChanger + "%");
        }
        if (config.items.WeightOptions === "Perc" && config.items.WeightChanger < 0) {
            Logger.info("AllInOne Mod: WeightOptions Decreased by " + config.items.WeightChanger + "%");
        }
        if (config.items.WeightOptions === "Mult") {
            Logger.info("AllInOne Mod: WeightOptions Multiplied by " + config.items.WeightChanger)
        }
        if (typeof config.items.MoreStack == "number") {
            Logger.info("AllInOne Mod: MoreStack Increased to " + config.items.MoreStack);
        }
        if (config.items.EquipRigsWithArmors === true) {
            Logger.info("AllInOne Mod: EquipRigsWithArmors activated.");
        }
        if (config.items.ForceMoneyStack !== false && typeof config.items.ForceMoneyStack == "number") {
            Logger.info("AllInOne Mod: ForceMoneyStack Increased to " + config.items.ForceMoneyStack);
        }
        if (config.items.RemoveSecureContainerFilters === true) {
            Logger.info("AllInOne Mod: RemoveSecureContainerFilters activated.");
        }
        if (config.items.RemoveBackpacksRestrictions === true) {
            Logger.info("AllInOne Mod: RemoveBackpacksRestrictions activated.");
        }
        if (config.items.RemoveContainersRestrictions === true) {
            Logger.info("AllInOne Mod: RemoveContainersRestrictions activated.");
        }
        if (config.items.AllExaminedItems === true) {
            Logger.info("AllInOne Mod: AllExaminedItems activated.");
        }
        if (config.traders.TradersChanges.AllTraders4Stars === true) {
            Logger.info("AllInOne Mod: AllTraders4Stars activated.")
        }
        if (config.traders.TradersChanges.UnlockAllItemsAtLL1 === true) {
            Logger.info("AllInOne Mod: UnlockAllItemsAtLL1 activated.")
        }
        if (config.traders.TradersChanges.RemoveItemsFroMQuestLocks === true) {
            Logger.info("AllInOne Mod: RemoveItemsFromQuestLocks activated.")
        }
        if (config.items.StackableBarters.activated === true) {
            Logger.info("AllInOne Mod: StackableBarters activated.")
        }
        if (config.items.RemoveAllGearPenalties === true) {
            Logger.info("AllInOne Mod: RemoveAllGearPenalties activated.")
        }
        if (config.hideout.RemoveConstructionsRequirements === true) {
            Logger.info("AllInOne Mod: RemoveConstructionsRequirements activated.")
        }
        if (config.player.DisableFallDamage === true) {
            Logger.info("AllInOne Mod: DisableFallDamage activated.")
        }
        if (config.traders["Remove FIR condition on quests"] === true) {
            Logger.info("AllInOne Mod: Remove FIR condition on quests activated.")
        }
        if (config.raids.ExtractionsExtended === true) {
            Logger.info("AllInOne Mod: ExtractionsExtended activated.")
        }
        if (config.raids.InsuranceOnAllMaps === true) {
            Logger.info("AllInOne Mod: InsuranceOnAllMaps activated.")
        }
        if (config.player.DisableSkillFatigue === true) {
            Logger.info("AllinOne Mod: DisableSkillFatigue activated.");
        }
        if (config.player.DisableSkillFatigue === "Custom") {
            Logger.info("AllinOne Mod: DisableSkillFatigue activated on Custom settings.");
            Logger.info(`AllinOne Mod: Fatigue Settings: MinEffect: ${config.player.SkillMinEffectiveness} FatiguePerPoint:  ${config.player.SkillFatiguePerPoint} FreshEffect: ${config.player.SkillFreshEffectiveness} FreshPoints:  ${config.player.SkillFreshPoints} PointsBeforeFatigue: ${config.player.SkillPointsBeforeFatigue} FatigueResetTime: ${config.player.SkillFatigueReset}`);
        }
        if (config.other["Pre-Wipe events"]["Raiders on all maps"] === true) {
            Logger.info("AllinOne Mod: Prewipe event activated: Raiders on all maps.");
        }
        if (config.other["Pre-Wipe events"]["Killa on factory"] === true) {
            Logger.info("AllinOne Mod: Prewipe event activated: Killa on factory.");
        }
        if (config.other["Pre-Wipe events"]["All bosses on reserve"] === true) {
            Logger.info("AllinOne Mod: Prewipe event activated: All bosses on reserve.");
        }
        if (config.other["Pre-Wipe events"]["All traders sells cheap items"] === true) {
            Logger.info("AllinOne Mod: Prewipe event activated: All traders sells cheap items.");
        }
        if (config.other["Pre-Wipe events"]["Make Obdolbos Powerfull"] === true) {
            Logger.info("AllinOne Mod: Prewipe event activated: Make Obdolbos Powerfull.");
        }
        if (config.other["Pre-Wipe events"]["Gluhkar on labs"] === true) {
            Logger.info("AllinOne Mod: Prewipe event activated: Gluhkar on labs.");
        }
        if (config.traders.PreventFenceMastering === true) {
            Logger.info("AllinOne Mod: PreventFenceMastering activated.");
        }
        if (config.player.RemoveScavKarma === true) {
            Logger.info("AllinOne Mod: RemoveScavKarma activated.");
        }
        if (config.items.RemoveItemsDurabilityBurn === true) {
            Logger.info("AllinOne Mod: RemoveItemsDurabilityBurn activated.");
        }
        if (config.items.RemoveBulletsWeaponDurabilityDamage === true) {
            Logger.info("AllinOne Mod: RemoveBulletsWeaponDurabilityDamage activated.");
        }
        if (config.items.RemoveWeaponsPresetRestriction === true) {
            Logger.info("AllinOne Mod: RemoveWeaponsPresetRestriction activated.");
        }
        if (config.items["Weapons malfunctions"].Feed === true) {
            Logger.info("AllinOne Mod: Feed Malfunctions removed.");
        }
        if (config.items["Weapons malfunctions"].Jam === true) {
            Logger.info("AllinOne Mod: Jam Malfunctions removed.");
        }
        if (config.items["Weapons malfunctions"].Slide === true) {
            Logger.info("AllinOne Mod: Slide Malfunctions removed.");
        }
        if (config.items["Weapons malfunctions"].Misfire === true) {
            Logger.info("AllinOne Mod: Misfire Malfunctions removed.");
        }
        if (config.items["Weapons malfunctions"].Overheat === true) {
            Logger.info("AllinOne Mod: Overheat Malfunctions removed.");
        }
        if (typeof config.items["Weapons durabilities"]["Minimum spawn durability"] !== "number" && config.items["Weapons durabilities"]["Minimum spawn durability"] != false) {
            Logger.info("AllinOne Mod: Minimum weapon durability activated.");
        }
        if (typeof config.items["Weapons durabilities"]["Maximum spawn durability"] !== "number" && config.items["Weapons durabilities"]["Maximum spawn durability"] != false) {
            Logger.info("AllinOne Mod: Maximum weapon durability activate.");
        }
        if (config.items.InRaidModdable === true) {
            Logger.info("AllinOne Mod: InRaidModdable activated.");
            OtherModitication.CustomWarning("AIO Mod", " THIS OPTION CAN CAUSE ISSUES WITH WEAPON GENERATION FOR BOTS, USE WITH THE EXPECTATION THAT WEAPONS MIGHT GET WEIRD!");
        }
        if (config.Fixes["Fins-Choke-Me-Harder"] === true) {
            Logger.info("AllinOne Mod: Using Fin's ChokeMeHarder to fix a few shotguns.");
        }
        if (config.Fixes["Chomps-RaiderSpawnFix"] === true) {
            Logger.info("AllinOne Mod: Using Chomp's RaiderSpawnFix to fix a few spawns.");
        }
        if (config.Fixes["JustNU's-EvenMoreOpenZones"] === true) {
            Logger.info("AllinOne Mod: Using JustNU's EvenMoreOpenzones to fix a few zones.");
        }
    }
}

module.exports = Warnings;