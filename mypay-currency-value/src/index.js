/**
 * 
 * @develop by karthik
 * save the coin value ...
 * 
*/

import Api from "bittrex-api-node";
import Env from "./env";
import './database/db';
import controller from "./controller/coinvalueController"

const api = Api({
    publicKey: Env.PUBLIC_KEY,
    secretKey: Env.SECREATE_KEY,
    verbose: Env.VERBOSE
});
/**
 * webSocket connection & disconnection
 * no operation on this level
 */

const ws = api.webSocket();
ws.on('connected', () => { console.log("welcome") });
ws.on('disconnected', () => { console.log("good bye") });

/**
 * filter the data and save in database 
 * save the data if exist than update 
 */

ws.connect((client) => {
    client.authenticate();
    client.getSummaryDeltas((data) => {
        var d = data.Deltas.filter(function (a) {
            return a.MarketName.match(/USD-/g);
        });
        d.forEach(element => {
          // console.log(element.MarketName ,element.Last);
            var find_json_data = {
                "coinname": element.MarketName
            }
            var insert_json_data = {
                coinname: element.MarketName,
                coinvalue: element.Last,
                coinvolume: element.BaseVolume
            };
            var update_json_data = {
                coinname: element.MarketName,
                coinvalue: element.Last,
                coinvolume: element.BaseVolume
            };
            controller.getCount(find_json_data, function (counter) {
                if (counter >= 1) {
                    controller.getbyname(find_json_data, function (id) {
                        if (id) {
                            console.log(update_json_data);
                            controller.update({_id:id._id}, update_json_data, function (err, data) {
                                if (!err) {
                                    console.log(data);
                                } else {
                                    console.log(err);
                                }
                            });
                        } else {
                            console.log(err);
                        }
                    });
                } else {
                    controller.create(insert_json_data, function (e) {
                        console.log(e);
                    });
                }

            });
        });
    });
});
