const config = require('./reddeConfig');

var receive_url = config.receiveUrl;
var cashout_url = config.cashoutUrl;
var appid = config.appID;
var apiKey = config.apiKey;

module.exports = {
    
clientRef: function (len) {
    arr = '123456789';
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans +=
            arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
},

clientID: function(len) {
    arr = '123456789abcdefghijklmnpqrstxyzABCDDEFGHIJKLMNOPQRSTUVWXYZ';
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans +=
            arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
},

    
    receiveMoney: function (amount, payment_option, wallet_number, client_reference, client_id, description = "Merchant"){
    const options = {
        url: receive_url,
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': apiKey
        },
        json: {
            "amount": amount,
            "appid": appid,
            "clientreference": client_reference,
            "clienttransid": client_id,
            "description": description,
            "nickname": "wigal",
            "paymentoption": payment_option,
            "vouchercode": "",
            "walletnumber": wallet_number
        }
    };
    return options;
},

    sendMoney: function (amount, payment_option, wallet_number, client_reference, client_id, description = "Merchant"){
    const options = {
        url: cashout_url,
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': apiKey
        },
        json: {
            "amount": amount,
            "appid": appid,
            "clientreference": client_reference,
            "clienttransid": client_id,
            "description": description,
            "nickname": "wigal",
            "paymentoption": payment_option,
            "vouchercode": "",
            "walletnumber": wallet_number
        }
    };
    return options;
}

};
