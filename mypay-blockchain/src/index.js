/**
   
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
            client.publish('presence', 'hello world')            
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})