/*
This Code was written completely by Cloudway
*/
const crossGPIO = new Map();
var Gpio = require("onoff").Gpio;
var express = require('express');
var path = require("path");
 var app = express();
 app.use('/res', express.static('res'))
  app.get('/', function(req, res){
  		res.sendFile(path.join(__dirname+"/res/index.html"));
  	
  	}); 
  app.get("/lights", function (req,res) {
  	var body = ['<html><head><link rel="stylesheet" href="res/css/index.css"/></head><body><img src="res/bg/wood.jpg" class="bg" id="bg"/><div class="bg-overlay"/><img src="res/menu/home.png" onclick="home()"  class="home"/><div class="container"><div class="menu-bar">','</div></div><script src="res/js/index.js"></script></body></html>'];
 var box_preset =['<img src="res/menu/','" class="box" id="','" onclick="lights(',')" onload="refresh(',')"/>'];
 var item_src = ["blocks.png","reinhaeuser.png"];
 var item_id = ["p4","p17"];
 var items = [4,17];
 var boxes = "";
 for (i=0;i<items.length;i++) {
 	var c_item_src = item_src[i];
 	var  c_item_id = item_id[i];
 	boxes = boxes + box_preset[0] + c_item_src + box_preset[1] + c_item_id + box_preset[2] + items[i] + "," + c_item_id + box_preset[3] + items[i] + "," + c_item_id + box_preset[4];
 	
 	}
  res.send(body[0]+boxes+body[1]);
  	});
  	app.get("/switch", function (req,res) {
  	var body = ['<html><head><link rel="stylesheet" href="res/css/index.css"/></head><body><img src="res/bg/wood.jpg" class="bg" id="bg"/><div class="bg-overlay"/><img src="res/menu/home.png" onclick="home()"  class="home"/><div class="container"><div class="menu-bar">','</div></div><script src="res/js/index.js"></script></body></html>'];
 var box_preset =['<img src="res/menu/','" class="box" id="','" onclick="switches(',')" onload="refresh(',')"/>'];
 var item_src = [];
 var item_id = [];
 var items = [];
 var boxes = "";
 for (i=0;i<items.length;i++) {
 	var c_item_src = item_src[i];
 	var  c_item_id = item_id[i];
 	boxes = boxes + box_preset[0] + c_item_src + box_preset[1] + c_item_id +box_preset[2] + items[i] + "," + c_item_id + box_preset[3] + items[i] + "," + c_item_id + box_preset[4];
 	
 	}
  res.send(body[0]+boxes+body[1]);
  	});
  	app.get("/crossway", function (req,res) {
  	var body = ['<html><head><link rel="stylesheet" href="res/css/index.css"/></head><body><img src="res/bg/hill.jpg" class="bg" id="bg"/><div class="bg-overlay"/><img src="res/menu/home.png" onclick="home()"  class="home"/><div class="container"><div class="menu-bar">','</div></div><script src="res/js/index.js"></script></body></html>'];
 var box_preset =['<img src="res/menu/','" class="box" id="','" onclick="crossway(',')" onload="refresh(',')"/>'];
 var item_src = [];
 var item_id = [];
 var items = [];
 var boxes = "";
 for (i=0;i<items.length;i++) {
 	var c_item_src = item_src[i];
 	var  c_item_id = item_id[i];
 	boxes = boxes + box_preset[0] + c_item_src + box_preset[1] + c_item_id + box_preset[2] + items[i] + "," + c_item_id + box_preset[3] + items[i] + "," + c_item_id + box_preset[4];
 	
 	}
  res.send(body[0]+boxes+body[1]);
  	});
  	app.get("/signal", function (req,res) {
  	var body = ['<html><head><link rel="stylesheet" href="res/css/index.css"/></head><body><img src="res/bg/train.jpg" class="bg" id="bg"/><div class="bg-overlay"/><img src="res/menu/home.png" onclick="home()"  class="home"/><div class="container"><div class="menu-bar">','</div></div><script src="res/js/index.js"></script></body></html>'];
 var box_preset =['<img src="res/menu/','" class="box" id="','" onclick="signals(',')" onload="refresh(',')"/>'];
 var item_src = [];
 var item_id = [];
 var items = [];
 var boxes = "";
 for (i=0;i<items.length;i++) {
 	var c_item_src = item_src[i];
 	var  c_item_id = item_id[i];
 	boxes = boxes + box_preset[0] + c_item_src + box_preset[1] + c_item_id + box_preset[2] + items[i] + "," + c_item_id + box_preset[3] + items[i] + "," + c_item_id + box_preset[4];
 	
 	}
  res.send(body[0]+boxes+body[1]);
  	});
  	app.get("/request", function (req,res) {
          console.log("rec")
  	//handle request
  	var type = req.query.type;
  	var pin = req.query.pin;
console.log("Pin : " +pin)

if (!crossGPIO.has("gpio"+pin)) {

crossGPIO.set("gpio"+pin,new Gpio(pin,"out"));
} 
if (crossGPIO.has("gpio"+pin)) {

//handle pin
  	switch (type) {
  		case "light":
console.log("light");
console.log( "before: " + crossGPIO.get("gpio"+pin).readSync())
if (crossGPIO.get("gpio"+pin).readSync() == 1) {
crossGPIO.get("gpio"+pin).writeSync(0 );
} else {
crossGPIO.get("gpio"+pin).writeSync(1);
}
break;
  		case "switch":
  		break;
  		case "crossway":
  		break;
  		case "signal":
  		break;
  		}
          }
          res.send("handled");
});
app.get("/state", function (req,res) {
	console.log("rec")
//save pin
let pin = req.query.pin;
console.log("Pin : " +pin)

if (!crossGPIO.has("gpio"+pin)) {

crossGPIO.set("gpio"+pin,new Gpio(pin,"out"));
} 
if (crossGPIO.has("gpio"+pin)) {

//handle pin

console.log(crossGPIO.get("gpio"+pin).readSync());
if (crossGPIO.get("gpio"+pin).readSync() == 1) {
	res.send("1");
} else {
	res.send("0");
}

	}
	
});
app.listen(8080);
