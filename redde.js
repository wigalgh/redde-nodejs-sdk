
class ReddeApi {

    constructor(apikey, appid) {
        this.apikey = apikey;
        this.appid = appid;
    }

    clientRef(len) {
        var arr = '123456789';
        var ans = '';
        for (var i = len; i > 0; i--) {
            ans +=
                arr[Math.floor(Math.random() * arr.length)];
        }
        return ans;
    }


    clientID(len) {
        var arr = '123456789abcdefghijklmnpqrstxyzABCDDEFGHIJKLMNOPQRSTUVWXYZ';
        var ans = '';
        for (var i = len; i > 0; i--) {
            ans +=
                arr[Math.floor(Math.random() * arr.length)];
        }
        return ans;
    }


    receiveMoney(amount, payment_option, wallet_number, client_reference, client_id, description = "") {

        const options = {
            url: 'https://api.reddeonline.com/v1/receive/',
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': this.apikey
            },
            json: {
                "amount": amount,
                "appid": this.appid,
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

    sendMoney(amount, payment_option, wallet_number, client_reference, client_id, description = "") {

        const options = {
            url: "https://api.reddeonline.com/v1/cashout",
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': this.apikey
            },
            json: {
                "amount": amount,
                "appid": this.appid,
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

}

module.exports = ReddeApi