var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', '2N8sA8PXGufmc19ZbRxYzVeoGsmYmnVBzsD')
            client.publish('presence', '2N8sA8PXGufmc19ZbRxYzVeoGsmYmnVBzsD')
            client.publish('presence', '2N8sA8PXGufmc19ZbRxYzVeoGsmYmnVBzsD')
            client.publish('presence', '2N8sA8PXGufmc19ZbRxYzVeoGsmYmnVBzsD')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})