# View smart contract code
### Compile & show bytecode
``` 
cd solc-example
solc --bin MyContract.sol 
``` 
### View in assembly
```
cd solc-example
solc --opcodes MyContract.sol
```
# Build and deploy code using Thirdweb
The contract is about a custom ether wallet that allows user to transfer and withdraw if user is the owner of the contract and allows everyone can get balance of the contract 
### Build code
``` 
cd thirdweb-contracts
yarn build
``` 
### View in assembly
```
cd thirdweb-contracts
yarn deploy
```
After deloy successfully, you will see a link to thirdweb page, open it and sign transaction to finish the creation of thirdweb contract. It will be verified by thirdweb and added to thirdweb dashboard.

# Run app
### Start the developing environment
``` 
cd thirdweb-app
yarn dev
``` 
In the root of the application, 2 components of thirdweb were implemented to do the transfer ether token and withdraw from the balance of the contract with only owner of the contract can withdraw.