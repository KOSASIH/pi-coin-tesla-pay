pragma solidity ^0.8.0;

contract InternetOfThings {
    address public owner;
    mapping (address => uint256) public devices;
    mapping (address => uint256) public deviceData;

    event NewDevice(address indexed user, uint256 deviceId);
    event UpdateDevice(address indexed user, uint256 deviceId);
    event SendDataToDevice(address indexed user, uint256 deviceId, uint256 data);
    event ReceiveDataFromDevice(address indexed user, uint256 deviceId, uint256 data);

    constructor() public {
        owner = msg.sender;
    }

    function createDevice(uint256 deviceId) public {
        require(msg.sender == owner, "Only the owner can create devices");

        devices[msg.sender] = deviceId;

        emit NewDevice(msg.sender, deviceId);
    }

    function updateDevice(uint256 deviceId, uint256 newData) public {
        require(devices[msg.sender] == deviceId, "Only the owner of the device can update it");

        deviceData[msg.sender] = newData;

        emit UpdateDevice(msg.sender, deviceId);
    }

    function sendDataToDevice(uint256 deviceId, uint256 data) public {
        require(devices[msg.sender] == deviceId, "Only the owner of the device can send data to it");

        // Send data to the device
        // ...

        emit SendDataToDevice(msg.sender, deviceId, data);
    }

    function receiveDataFromDevice(uint256 deviceId, uint256 data) public {
        require(devices[msg.sender] == deviceId, "Only the owner of the device can receive data from it");

        // Receive data from the device
        // ...

        emit ReceiveDataFromDevice(msg.sender, deviceId, data);
    }
}
