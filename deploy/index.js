require('module-alias/register')

const utils = require("@utils/index.js");
let deployAccount = utils.ethersAccount(0)

const main = async () => {
    console.log("Deployment not configured yet!")
    await deployExample()
}

const deployExample = async () => {
    let exampleParams = ['Params']
    const exampleContract = await utils.deployContractAndWriteToFile('Example', deployAccount, exampleParams)
    console.log("Contract deployed at address: " + exampleContract.address)
}


main();