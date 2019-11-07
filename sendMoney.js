const request = require('request');
const Redde = require('./redde');
var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.json({ extended: true }));


app_id = ""; //Enter Your App ID Here
api_key = ""; //Enter Your Api Key Here

//Instantiate ReddeApi class
const redde = new Redde(api_key, app_id);


//Generating Random Client Reference
var ref = redde.clientRef(6);

//Generating Random Client ID
var clientid = redde.clientID(6);

//Calling Receive Function 
var receive = redde.sendMoney(1, "MTN", 233240000004, ref, clientid);

//Sending a request to redde endpoint
request.post(receive, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(JSON.stringify(body)));
});

//Callback Url Endpoint
app.post("/payment", function (req, res) {
    var data = req.body;
    res.send(data);

});


app.listen(8080);