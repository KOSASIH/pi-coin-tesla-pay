import os
import json
from web3 import Web3

class EthereumNode:
    def __init__(self):
        self.web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'))

    def deploy_contract(self, contract_code):
        tx = self.web3.eth.account.sign_transaction(
            self.web3.eth.account.create_transaction(
                nonce=self.web3.eth.get_transaction_count(self.web3.eth.accounts[0]),
                gasPrice=self.web3.eth.gas_price,
                gas=self.web3.eth.estimate_gas({'from': self.web3.eth.accounts[0], 'data': contract_code}),
                to='',
                value=0
            ),
            '0xYOUR_WALLET_PRIVATE_KEY'
        )
        self.web3.eth.send_transaction(tx.rawTransaction)
        return self.web3.eth.wait_for_transaction_receipt(tx.hash)

    def interact_with_contract(self, contract_address, function_name, *args):
        contract = self.web3.eth.contract(address=contract_address, abi=[])
        tx = contract.functions[function_name](*args).buildTransaction({
            'from': self.web3.eth.accounts[0],
            'gas': self.web3.eth.estimate_gas({'from': self.web3.eth.accounts[0], 'to': contract_address, 'data': contract.functions[function_name](*args).encodeABI()}),
            'gasPrice': self.web3.eth.gas_price
        })
        self.web3.eth.send_transaction(tx)
        return self.web3.eth.wait_for_transaction_receipt(tx.hash)
