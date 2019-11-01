const request = require('request');
const functions = require('./redde');
var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.json({ extended: true }));

//Generating Random Client Reference
var ref = functions.clientRef(6);

//Generating Random Client ID
var clientid = functions.clientID(6);

//Calling Cashout Function 
var payload = functions.sendMoney(1, "MTN", 233544744604, ref, clientid);

//Sending a request to redde endpoint
request.post(payload, (err, res, body) => {
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