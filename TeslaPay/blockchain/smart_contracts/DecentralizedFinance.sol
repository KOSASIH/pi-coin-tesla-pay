pragma solidity ^0.8.0;

contract DecentralizedFinance {
    address public owner;
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowances;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor() public {
        owner = msg.sender;
    }

    function transfer(address to, uint256 value) public {
        require(balances[msg.sender] >= value, "Insufficient balance");

        balances[msg.sender] -= value;
        balances[to] += value;

        emit Transfer(msg.sender, to, value);
    }

    function approve(address spender, uint256 value) public {
        allowances[msg.sender][spender] = value;

        emit Approval(msg.sender, spender, value);
    }

    function transferFrom(address from, address to, uint256 value) public {
        require(balances[from] >= value, "Insufficient balance");
        require(allowances[from][msg.sender] >= value, "Insufficient allowance");

        balances[from] -= value;
        balances[to] += value;

        allowances[from][msg.sender] -= value;

        emit Transfer(from, to, value);
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    function getAllowance(address owner, address spender) public view returns (uint256) {
        return allowances[owner][spender];
    }
}
