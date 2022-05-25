/*
エレシュキガル
*/

"use strict";

class TradersModifications {
  static ApplyTradersModifications() {
    const config = require("../config/config.json");
    const database = DatabaseServer.tables;
    const traders = database.traders;
    const quests = database.templates.quests;
    const suits = database.templates.customization;
    const OtherModitication = require("./other.js");

    //Enable all the quests
    if (config.traders.AllQuestsAvailable === true) {
      Logger.info("AllinOne Mod: AllQuestsAvailable activated");

      for (let id in quests) {
        if (OtherModitication.IsThisIDaMod(id) === false) {
          let questData = quests[id];

          questData.conditions.AvailableForStart = [
            {
              _parent: "Level",
              _props: {
                compareMethod: ">=",
                value: "1",
                index: 0,
                parentId: "",
                id: "AllInOne-Mod: AllQuestsAvailable",
              },
            },
          ];
        }
      }
    }

    if (config.traders["Remove FIR condition on quests"]) {
      for (const id in quests) {
        let condition = quests[id].conditions.AvailableForFinish;
        for (const requirements in condition) {
          let requirement = condition[requirements];
          if (
            requirement._parent === "FindItem" ||
            requirement._parent === "HandoverItem"
          ) {
            if (
              "_props" in requirement &&
              "onlyFoundInRaid" in requirement._props
            ) {
              requirement._props.onlyFoundInRaid = false;
            }
          }
        }
      }
    }

    //Enable all clothes available for both side
    if (config.traders.AllClotheForEverySide === true) {
      for (let suit in suits) {
        if (OtherModitication.IsThisIDaMod(suit) === false) {
          let suitData = suits[suit];
          suitData._props.Side = ["Savage", "Bear", "Usec"];
        }
      }
    }

    //Enable all clothes for free
    if (config.traders.AllClothesFree === true) {
      for (let trader in traders) {
        if (OtherModitication.IsThisIDaMod(trader) === false) {
          if (traders[trader].suits) {
            for (let file in traders[trader].suits) {
              let fileData = traders[trader].suits[file];
              fileData.requirements.loyaltyLevel = 1;
              fileData.requirements.profileLevel = 1;
              fileData.requirements.standing = 0;
              fileData.requirements.skillRequirements = [];
              fileData.requirements.questRequirements = [];
              fileData.requirements.itemRequirements = [];
            }
          }
        }
      }
    }

    //All cheap items on traders
    if (
      config.other["Pre-Wipe events"]["All traders sells cheap items"] === true
    ) {
      for (const trader in traders) {
        for (const assort in traders[trader].assort.barter_scheme) {
          let itemScheme = traders[trader].assort.barter_scheme[assort];
          switch (itemScheme[0][0]._tpl) {
            case "5449016a4bdc2d6f028b456f": //Roubles
              itemScheme[0][0].count = itemScheme[0][0].count * 0.01;
              break;
            case "5696686a4bdc2da3298b456a": //Dollars
              itemScheme[0][0].count = itemScheme[0][0].count * 0.1;
              break;
            case "5696686a4bdc2da3298b456a": //Euros
              itemScheme[0][0].count = itemScheme[0][0].count * 0.05;
              break;
            default:
              break;
          }
        }
      }
    }

    //Change insurances return times
    if (config.traders.InsuranceTime.activated === true) {
      Logger.info("AllinOne Mod: InsuranceTime activated");

      if (config.traders.InsuranceTime.Prapor.activated === true) {
        Logger.info("AllinOne Mod: Prapor insurance changed");
        traders["54cb50c76803fa8b248b4571"].base.insurance.min_return_hour =
          config.traders.InsuranceTime.Prapor.min;
        traders["54cb50c76803fa8b248b4571"].base.insurance.max_return_hour =
          config.traders.InsuranceTime.Prapor.max;
      }
      if (config.traders.InsuranceTime.Therapist.activated === true) {
        Logger.info("AllinOne Mod: Therapist insurance changed");
        traders["54cb57776803fa99248b456e"].base.insurance.min_return_hour =
          config.traders.InsuranceTime.Therapist.min;
        traders["54cb57776803fa99248b456e"].base.insurance.max_return_hour =
          config.traders.InsuranceTime.Therapist.max;
      }
    }

    //Change the maximum time for insurance to be in mails
    if (config.traders.MaxInsuranceStorageTime !== false) {
      traders["54cb50c76803fa8b248b4571"].base.insurance.max_storage_time =
        config.traders.MaxInsuranceStorageTime;
      traders["54cb57776803fa99248b456e"].base.insurance.max_storage_time =
        config.traders.MaxInsuranceStorageTime;
    }

    

    //Various traders changes
    function ReduceTradersStuff(traderID) {
        const loyaltyLevels = DatabaseServer.tables.traders[traderID].base.loyaltyLevels;
          for (const level in loyaltyLevels) {
            const loyalty = loyaltyLevels[level];
            loyalty.minLevel = 1;
            loyalty.minSalesSum = 0;
            loyalty.minStanding = 0;
          }
    }
    //UnlockAllItemsAtLL1
    if (config.traders.TradersChanges.UnlockAllItemsAtLL1) {
      for (const traderID in DatabaseServer.tables.traders) {
        if (traderID === "579dc571d53a0658a154fbec") {
          continue;
        }
        const loyaltyItems = DatabaseServer.tables.traders[traderID].assort;

        for (const LLItem in loyaltyItems) {
          loyaltyItems[LLItem] = 1;
        }
      }
    }

    //Remove assorts locked by quests
    if (config.traders.TradersChanges.RemoveItemsFromQuestLocks) {
      for (const traderID in DatabaseServer.tables.traders) {
        if (DatabaseServer.tables.traders[traderID].questassort.success) {
          DatabaseServer.tables.traders[traderID].questassort.success = {};
        }
      }
    }

    if (config.traders.TradersChanges.AllTraders4Stars === true) {
      for (const traderID in DatabaseServer.tables.traders) {
        ReduceTradersStuff(traderID);
      }
    }
  }
}

module.exports = TradersModifications;
