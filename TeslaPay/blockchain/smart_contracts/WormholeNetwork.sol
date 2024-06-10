pragma solidity ^0.8.0;

contract WormholeNetwork {
    address public owner;
    mapping (address => uint256) public wormholeKeys;
    mapping (address => uint256) public wormholeDestinations;

    event NewWormholeKey(address indexed user, uint256 wormholeKey);
    event UpdateWormholeKey(address indexed user, uint256 wormholeKey);
    event TravelThroughWormhole(address indexed user, uint256 wormholeKey, uint256 destination);

    constructor() public {
        owner = msg.sender;
    }

    function createWormholeKey(uint256 wormholeKey) public {
        require(msg.sender == owner, "Only the owner can create wormhole keys");

        wormholeKeys[msg.sender] = wormholeKey;

        emit NewWormholeKey(msg.sender, wormholeKey);
    }

    function updateWormholeKey(uint256 wormholeKey) public {
        require(wormholeKeys[msg.sender] != 0, "No wormhole key to update");

        wormholeKeys[msg.sender] = wormholeKey;

        emit UpdateWormholeKey(msg.sender, wormholeKey);
    }

    function travelThroughWormhole(uint256 wormholeKey, uint256 destination) public {
        require(wormholeKeys[msg.sender] == wormholeKey, "Only the owner of the wormhole key can travel through it");

        wormholeDestinations[msg.sender] = destination;

        // Travel through the wormhole
        // ...

        emit TravelThroughWormhole(msg.sender, wormholeKey, destination);
    }
}
