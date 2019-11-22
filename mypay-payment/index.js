var express = require("express");
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');
var app = express();
var router = express.Router();
var path = __dirname + '/views/'; // this folder should contain your html files.

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jq', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use("/", router);

app.listen(3000, function () {
    console.log("Live at Port 3000");
});
/*

client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    // client.end()
})*/