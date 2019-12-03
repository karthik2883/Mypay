//save the coin value ...

import Api from "bittrex-api-node";
import Env from "./env";
import './database/db';
import controller from "./controller/coinvalueController"

const api = Api({
    publicKey: Env.PUBLIC_KEY,
    secretKey: Env.SECREATE_KEY,
    verbose: Env.VERBOSE
});

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
            var find_data = {
                "coinname": element.MarketName
            }
            var insert_data = {
                coinname: element.MarketName,
                coinvalue: element.Last,
                coinvolume: element.BaseVolume
            };
            var coinname = controller.getbyname(find_data);
            console.log("information", coinname);
            if (typeof coinname !== 'undefined') {
                controller.update(find_data, insert_data);
            } else {
                controller.create(insert_data, function (e) {
                    console.log(e);
                });
            }
            //            console.log(element.MarketName);
            //   console.log(element.Last);
        });

    });
});
