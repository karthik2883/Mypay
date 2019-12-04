/**
 * what should be their in this middle ware 
 * authenticate the call
 * channel -- enum ecommerce  , chat , iot etc
 * if ecommerce than invoice key ,
 * merchant key ,
 * product information , 
 * description ,
 * price amount ,
 * pay amount
 * coins information , current coin price 
 *  
 */
import env from './env'
import MQTT from 'mqtt'
var client = MQTT.connect(env.MQTT_CONNECTION);
var message = [];

/**
 * what type of call will come 
 * a) address creation , transaction from the node
 * b) request from the merchant 
 * d) session alive management
 *
 **/
client.on('connect', function () {
    
    client.subscribe('presence', function (err) {
        if (!err) {
            message
            client.publish('presence', '')            
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})