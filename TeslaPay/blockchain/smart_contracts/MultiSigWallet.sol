pragma solidity ^0.8.0;

contract MultiSigWallet {
    address[] public owners;
    uint256 public required;

    mapping (address => bool) public isOwner;
    mapping (uint256 => Transaction) public transactions;
    uint256 public transactionCount;

    struct Transaction {
        address destination;
        uint256 value;
        bytes data;
        uint256 approvals;
    }

    event Deposit(address indexed sender, uint256 value);
    event SubmitTransaction(address indexed owner, uint256 transactionId, address destination, uint256 value, bytes data);
    event ApproveTransaction(address indexed owner, uint256 transactionId);
    event RevokeApproval(address indexed owner, uint256 transactionId);
    event ExecuteTransaction(uint256 transactionId);

    constructor(address[] memory _owners, uint256 _required) public {
        require(_owners.length > 0, "At least one owner is required");
        require(_required > 0 && _required <= _owners.length, "Invalid required number of approvals");

        for (uint256 i = 0; i < _owners.length; i++) {
            isOwner[_owners[i]] = true;
        }

        owners = _owners;
        required = _required;
    }

    function deposit() public payable {
        emit Deposit(msg.sender, msg.value);
    }

    function submitTransaction(address destination, uint256 value, bytes memory data) public {
        require(isOwner[msg.sender], "Only owners can submit transactions");

        uint256 transactionId = transactionCount++;
        transactions[transactionId] = Transaction(destination, value, data, 0);

        emit SubmitTransaction(msg.sender, transactionId, destination, value, data);
    }

    function approveTransaction(uint256 transactionId) public {
        require(isOwner[msg.sender], "Only owners can approve transactions");
        require(transactions[transactionId].approvals < required, "Transaction is already approved");

        transactions[transactionId].approvals++;

        emit ApproveTransaction(msg.sender, transactionId);
    }

    function revokeApproval(uint256 transactionId) public {
        require(isOwner[msg.sender], "Only owners can revoke approvals");
        require(transactions[transactionId].approvals > 0, "Transaction is not approved");

        transactions[transactionId].approvals--;

        emit RevokeApproval(msg.sender, transactionId);
    }

    function executeTransaction(uint256 transactionId) public {
        require(transactions[transactionId].approvals >= required, "Transaction is not approved");

        Transaction storage transaction = transactions[transactionId];
        transaction.destination.call.value(transaction.value)(transaction.data);

        emit ExecuteTransaction(transactionId);
    }
}
