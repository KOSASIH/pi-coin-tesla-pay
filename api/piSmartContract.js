import { PiNetwork } from 'pi-network-sdk';
import { Web3 } from 'web3';

const piSmartContract = {};

piSmartContract.deploy = async () => {
  const contractCode = `
    pragma solidity ^0.6.0;

    contract PiPaymentContract {
      address payable public owner;
      mapping (address => uint256) public balances;

      constructor() public {
        owner = msg.sender;
      }

      function pay(address payable recipient, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        recipient.transfer(amount);
      }

      function getBalance(address user) public view returns (uint256) {
        return balances[user];
      }
    }
  `;
  const contract = await PiNetwork.deployContract(contractCode);
  return contract;
};

piSmartContract.pay = async (contract, sender, recipient, amount) => {
  const tx = await contract.pay(recipient, amount);
  return tx;
};

export default piSmartContract;
