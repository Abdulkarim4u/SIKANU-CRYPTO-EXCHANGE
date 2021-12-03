require('babel-register');
require('babel-polyfill');
require('dotenv').config();



/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {

    development:{

      host: "127.0.0.1",
      port: 7545,
      network_id: "*"  //match any network id.
    },
    
  },

  contracts_directory: './src/contracts/', //whenever we create a new smart contract we put it inside of here
  contracts_build_directory: './src/abis/', // contracts are build and put into the source

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // This is for the solidity compiler settings. Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },


};
