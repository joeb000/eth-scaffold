# ETH Scaffold

This repository is meant to be a template for quickly setting up a smart contract development and testing environment.

Requires [solc binary](https://solidity.readthedocs.io/en/v0.5.3/installing-solidity.html#binary-packages) to be installed. Probably won't work on windows.

I recommend updating the `secrets.json` and `secret.txt` files with a new mnemonic.

### Setup and start test network

    npm install

### Start local ganache-cli network

    # do this in a separate window
    npm run ganache

### Compile and Deploy Contracts

    npm run compile
    npm run deploy

### Run custom scripts to interact with deployed contracts

    npm run task


Figure the rest out yourself.