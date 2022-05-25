"use strict";
const httpsModule = require('https');
const pkg = require("../package.json");
const modName = `${pkg.author}-${pkg.name}`;
const modConfig = require("../config/config.json");
const priceTable = {};
const queryOptions = {
	hostname: 'api.tarkov.dev',
	path: '/graphql',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	}
};
const queryData = JSON.stringify(
	{query:
		`{
			itemsByType(type: any){
				id
				avg24hPrice
				traderPrices{
					price
					trader {
						name
					}
				}
			}
		}`
	}
);
let _load = false;
/*
	::WARNING::
	This is Public API and It costs money to run/maintain API
	Flea Price data is updated every 5 minutes, do not lower than 5 miniutes (300*1000)

	If you do, You will get banned for a while.
*/
const updateInterval = (!modConfig.UpdateIntervalSecond || typeof(modConfig.UpdateIntervalSecond) !== "number" || modConfig.UpdateIntervalSecond < 300 ? 300 : modConfig.UpdateIntervalSecond)*1000;

class Mod
{
	constructor()
	{
        Logger.info(`Loading: ${modName} ${pkg.version}`);
		Mod.updateInterval();
		setInterval(Mod.updateInterval, updateInterval);
	}

	// Code based from MertCan - RealTimeFleaMarket mod
	static updateInterval() {
		const req = httpsModule.request(queryOptions, res => {
			if (res.statusCode == 200)
			{
				var response = '';
				res.on('data', function(d) {
					response += d;
				});
				res.on('end', function(d) {
					try {
						var datas_json = JSON.parse(response);
                        var updatedCount = 0;

						for (let i in datas_json.data.itemsByType)
						{
							let id = datas_json.data.itemsByType[i].id;
							let price = datas_json.data.itemsByType[i].avg24hPrice;

							let skip = false;
							for (let j in modConfig.Blacklist)
							{
								if (modConfig.Blacklist[j] === id)
								{
									skip = true;
									break;
								}
							}
							if (skip === true) continue;
	
							// Bitcoin price from Therapist
							if (id === "59faff1d86f7746c51718c9c")
							{
								for (let trader in datas_json.data.itemsByType[i].traderPrices)
								{
									if (datas_json.data.itemsByType[i].traderPrices[trader].trader.name.toLowerCase() === "therapist")
									{
										price = datas_json.data.itemsByType[i].traderPrices[trader].price;
										break;
									}
								}
							}

							// Skip undefiend items
							if (RagfairServer.prices.dynamic[id] === undefined || price < 1) continue;

							RagfairServer.prices.dynamic[id] = price;
							updatedCount++;
						}

						if (_load === false) {
							_load = true;
							RagfairServer.generateDynamicOffers();
						}
                        Logger.success(`${modName}: Updated market data, Total ${updatedCount} items`);
					} catch (error) {
						Logger.error(`${modName}: ${error}`);
					}
				});
			}
			else {
				if (res.statusCode >= 400 && res.statusCode <= 403)
				{
					Logger.error(`${modName}: (${res.statusCode}) Tarkov.dev might banned your IP or having trouble on the server. Retry in ${(updateInterval/60000).toFixed(0)} mins`);
					Logger.error(`${modName}: (${res.statusCode}) If you keep having this error, Try to increase the \"UpdateIntervalSecond\"`);
				}
				else if (res.statusCode == 503)
				{
					Logger.error(`${modName}: (${res.statusCode}) Tarkov.dev site is offline. Retry in ${(updateInterval/60000).toFixed(0)} mins`);
				}
				else
				{
					Logger.error(`${modName}: (${res.statusCode}) Failed to update market data. Retry in ${(updateInterval/60000).toFixed(0)} mins`);
				}
				setTimeout(Mod.updatePrices, updateInterval);
			}
		}).on('error', error => {
			Logger.error(`${modName}: ${error}`);
		});

		req.write(queryData);
		req.end();
	}
}

module.exports.Mod = Mod;