require('module-alias/register')

const utils = require('@utils');
const ethers = require('ethers')

const contract = utils.getDeployedContract('Example')
let deployAccount = utils.ethersAccount(0)

const main = async () => {
    console.log("Running Main Task...")

    let es = await contract.exampleString()
    console.log("Contract's example string was: " + es)

    console.log("Done")
}

const deployExample = async () => {
   
}


main();