const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

const contractAddress = '0x1234567890abcdef';
const contractABI = [...];

const contract = new web3.eth.Contract(contractABI, contractAddress);

const transactionData = {
  from: '0x1234567890abcdef',
  to: '0x9876543210fedcba',
  value: 1,
};

contract.methods.transfer(transactionData).send((err, transactionHash) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Transaction sent => ${transactionHash}`);
  }
});
