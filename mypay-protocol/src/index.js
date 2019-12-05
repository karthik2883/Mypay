/*******************************************************************/
 /* what should be their in this middle ware 
 * authenticate the call
 * channel -- enum ecommerce  , chat , iot etc
 * if ecommerce than invoice key ,
 * merchant key ,
 * product information , 
 * description ,
 * price amount ,
 * pay amount
 * coins information , current coin price 
 */  
 /**********************************************************************/

//qos is not working need to change with paho 

//channel/presence/id
//channel/invoice/id
//channel/merchant/id
//channel/blockchain/id

//identifier/presence/id
//identifier/invoice/id
//identifier/merchant/id
//identifier/blockchain/id

import env from './env'
import MQTT from 'mqtt'
var client = MQTT.connect(env.MQTT_CONNECTION);
 

/**
 * what type of call will come 
 * a) address creation , transaction from the node
 * b) request from the merchant 
 * d) session alive management
 **/

client.on('connect', function () {
     client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'hello')            
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
   // console.log(message.toString())
    client.end()
})