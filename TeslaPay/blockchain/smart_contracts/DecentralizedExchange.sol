pragma solidity ^0.8.0;

contract DecentralizedExchange {
    address public owner;
    mapping (address => mapping (address => uint256)) public orders;
    mapping (address => uint256) public balances;

    event NewOrder(address indexed user, address indexed token, uint256 amount, uint256 price);
    event CancelOrder(address indexed user, address indexed token, uint256 amount);
    event FillOrder(address indexed user, address indexed token, uint256 amount, uint256 price);

    constructor() public {
        owner = msg.sender;
    }

    function createOrder(address token, uint256 amount, uint256 price) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        orders[msg.sender][token] = amount;
        balances[msg.sender] -= amount;

        emit NewOrder(msg.sender, token, amount, price);
    }

    function cancelOrder(address token, uint256 amount) public {
        require(orders[msg.sender][token] >= amount, "Insufficient order amount");

        orders[msg.sender][token] -= amount;
        balances[msg.sender] += amount;

        emit CancelOrder(msg.sender, token, amount);
    }

    function fillOrder(address user, address token, uint256 amount, uint256 price) public {
        require(orders[user][token] >= amount, "Insufficient order amount");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        orders[user][token] -= amount;
        balances[user] += amount;
        balances[msg.sender] -= amount;

        emit FillOrder(user, token, amount, price);
    }

    function getOrders(address user, address token) public view returns (uint256) {
        return orders[user][token];
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
