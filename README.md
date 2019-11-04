![alt text](https://www.reddeonline.com/assets/images/redde-logo.png)

# redde-nodejs-sdk
Nodejs Redde Merchant REST API that allows merchants to receive, send, check transaction status, and perform lots of payment transactions.

Before you can have access to APIs you need to register and create an [Account](https://app.reddeonline.com/register) on reddeonline. Header for all request should have {"apikey": "string"}: and this API key will be sent to merchant when their app configuration is setup for them by Wigal.

For more information on documentation go to developers.reddeonline.com

* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)

## Installation
To use this library you'll need to have created a [Redde account](https://app.reddeonline.com/register).                     To install this package and use in your project, we recommend using Npm.

```
npm i redde                                                                                        
```

>You don't need to clone this repository to use this package in your own projects. Use Npm to install it from [npmjs](https://www.npmjs.com/package/redde).




## Usage

```js
const functions = require('redde');

```

Navigate to the **node_modules** folder and open the redde folder and locate a js file called **reddeConfig.js**.
Enter your API key and App ID which was provided to you by the Redde Team:

```js
module.exports = {
     receiveUrl : 'https://api.reddeonline.com/v1/receive/',
     cashoutUrl : 'https://api.reddeonline.com/v1/cashout',
     appID :0001 ,//Replace 0001 with your app ID
     apiKey: '' //Enter your Api Key here
}
``` 


### Examples

#### Receiving money from Customer or Client

To use the API to recieve money from a customer, the receiveMoney() method will be used which takes takes 5 required arguments where are: **amount, network type(MTN, AIRTELTIGO, VODAFONE), phone number, client reference, and client id** respectively.

```js
const request = require('request');
const functions = require('redde');
var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.json({ extended: true }));

//Generating Random Client Reference
var ref = functions.clientRef(6);

//Generating Random Client ID
var clientid = functions.clientID(6);

//Calling Receive Function 
var payload = functions.receiveMoney(1, "MTN", 233240000004, ref, clientid);

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
```


#### Receiving money from Customer or Client

To use the API to send money to a customer, the sendMoney() method will be used which takes takes 5 required arguments where are: **amount, network type(MTN, AIRTELTIGO, VODAFONE), phone number, client reference, and client id** respectively.

```js
const request = require('request');
const functions = require('redde');
var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.json({ extended: true }));

//Generating Random Client Reference
var ref = functions.clientRef(6);

//Generating Random Client ID
var clientid = functions.clientID(6);

//Calling Cashout Function 
var payload = functions.sendMoney(1, "MTN", 233240000004, ref, clientid);

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
```

## Callbacks
Most APIs implement callbacks for easy tracking of api transactions so we have shown you how to implement. Check it out in the code below.

```js

//Callback Url Endpoint
app.post("/payment", function (req, res) {
    var data = req.body;
    res.send(data);

});
```

# License
This library is released under the ISC License
