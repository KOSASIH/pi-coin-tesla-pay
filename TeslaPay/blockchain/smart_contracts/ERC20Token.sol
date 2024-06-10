pragma solidity ^0.8.0;

contract ERC20Token {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    uint256 public decimals;

    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply, uint256 _decimals) public {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        decimals = _decimals;

        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 value) public {
        require(balances[msg.sender] >= value, "Insufficient balance");

        balances[msg.sender] -= value;
        balances[to] += value;

        emit Transfer(msg.sender, to, value);
    }

    function approve(address spender, uint256 value) public {
        allowed[msg.sender][spender] = value;

        emit Approval(msg.sender, spender, value);
    }

    function transferFrom(address from, address to, uint256 value) public {
        require(balances[from] >= value, "Insufficient balance");
        require(allowed[from][msg.sender] >= value, "Insufficient allowance");

        balances[from] -= value;
        balances[to] += value;

        allowed[from][msg.sender] -= value;

        emit Transfer(from, to, value);
    }
}
