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
import './database/db';
import controller from "./controller/coinvalueController"
var client = MQTT.connect(env.MQTT_CONNECTION);
 

/**
 * what type of call will come 
 * a) address creation , transaction from the node
 * b) request from the merchant 
 * d) session alive management
 **/
/**
 * in future all will be in mongodb
 */
function defaultSubscription(){

    var array_of_subscription = [
        'channel/presence',
        'channel/invoice',
        'channel/merchant',
        'channel/blockchain',
        'identifier/presence',
        'identifier/invoice',
        'identifier/merchant',
        'identifier/blockchain'  
  ];
    return array_of_subscription;
} 

client.on('connect', function () {
    defaultSubscription().forEach(element => {
        client.subscribe(element);
    });
     
})
//creating mockup

client.on('message', function (topic, message) {
    // message is Buffer
   var message = message.toString();
    console.log(topic,message);
  // json parse and subscribe and publish
    // client.subscribe('channel/presence/', function (err) {
    //     if (!err) {
                
       
    //     }
    // });
    var response = '{ "MerchantName": "findmeeveryday", "message": "welcome to fastest payment gateway", "session-id": "4545-558e-45" }';
    client.publish('channel/presence/1575615410', response);       
    //client.end()
})