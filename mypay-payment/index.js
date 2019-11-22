var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/'; // this folder should contain your html files.

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});