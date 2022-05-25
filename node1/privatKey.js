var keythereum = require("keythereum");

var datadir = "/Users/kimjinkyung/Desktop/own_geth_network/node1/data";

var address= "0x08d4cEE4075b1BBEd80Ec815896C516f4A169447";

const password = "wlsrud20";
var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));