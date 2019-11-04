# redde-nodejs
Nodejs Redde Merchant REST API that allows merchants to receive, send, check transaction status, and perform lots of payment transactions.

Before you can have access to APIs you need to register and create an [Account](https://app.reddeonline.com/register) on reddeonline. Header for all request should have {"apikey": "string"}: and this API key will be sent to merchant when their app configuration is setup for them by Wigal.

For more information on documentation go to developers.reddeonline.com

* [Installation](#installation)
* [Usage](#usage)
* [Examples](https://github.com/wigalsolutionsltd/redde-nodejs#examples)

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
### Place 1

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
