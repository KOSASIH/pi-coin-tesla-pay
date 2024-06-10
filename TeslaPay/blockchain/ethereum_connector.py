import os
import json
from web3 import Web3

class EthereumConnector:
    def __init__(self):
        self.web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'))

    def create_transaction(self, from_address, to_address, value):
        tx = self.web3.eth.account.sign_transaction(
            self.web3.eth.account.create_transaction(
                nonce=self.web3.eth.get_transaction_count(from_address),
                gasPrice=self.web3.eth.gas_price,
                gas=self.web3.eth.estimate_gas({'from': from_address, 'to': to_address, 'value': value}),
                to=to_address,
                value=value
            ),
            '0xYOUR_WALLET_PRIVATE_KEY'
        )
        return tx

    def send_transaction(self, tx):
        self.web3.eth.send_transaction(tx.rawTransaction)

    def get_transaction_receipt(self, tx_hash):
        return self.web3.eth.wait_for_transaction_receipt(tx_hash)
