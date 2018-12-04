import * as Web3 from 'web3';

class Entrypoint {
    protected web3: Web3;
    protected loadedAccounts;

    protected ADDRESS = '0x7e5675acaffa96d9602e55fd67da4662c927f27a';

    constructor() {
        this.web3 = new Web3(new Web3.providers.WebsocketProvider('http://localhost:8545'));
    }

    start() {
        console.log('Application start which web3: ' + this.web3.version);
        this.initEventHandlers();
    }

    initEventHandlers() {
        this.web3.eth.subscribe('logs', {
            address: this.ADDRESS,
            topics: ["0xebabb8070f229c27fa01b2aa03d2d4924a5527adcc8ad312d3341e1cf67ba0bc"]
        }, function (error, result) {
            console.log("LOGS", "CustomEvent");
        });

        this.web3.eth.subscribe('logs', {
            address: this.ADDRESS,
            topics: ["0x8eae0b32162bf13ea839713ed0206a1071dd885cdf1affd36683ef54f0964a7e"]
        }, function (error, result) {
            console.log("LOGS", "CustomEvent2");
        });

        // this.web3.eth.getBalance('0x7e7410061c98C3749F6EEa6c8447d4E4ed28b759').then(this.log);
        // this.web3.eth.getBalance('0x8E0961Fa9E553AdEf37A25F740be7859F8b3E9f3').then(this.log);

        // this.web3.eth.net.getNetworkType([this.log]).catch(this.log);
    }

    log(data) {
        console.log(data);
    }

    fillAccounts(data) {
        console.log("fillAccounts", data);
        this.loadedAccounts = data;
    }
}

const entrypoint = new Entrypoint();
entrypoint.start();