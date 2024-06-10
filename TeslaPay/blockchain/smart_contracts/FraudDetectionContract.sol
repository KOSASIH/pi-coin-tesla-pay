pragma solidity ^0.8.0;

contract FraudDetectionContract {
    address private owner;
    mapping (address => bool) public fraudStatus;

    constructor() public {
        owner = msg.sender;
    }

    function reportFraud(address account) public {
        fraudStatus[account] = true;
    }

    function isFraudulent(address account) public view returns (bool) {
        return fraudStatus[account];
    }
}
