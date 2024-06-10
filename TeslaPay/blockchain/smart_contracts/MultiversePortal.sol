pragma solidity ^0.8.0;

contract MultiversePortal {
    address public owner;
    mapping (address => uint256) public portalKeys;
    mapping (address => uint256) public portalUniverses;

    event NewPortalKey(address indexed user, uint256 portalKey);
    event UpdatePortalKey(address indexed user, uint256 portalKey);
    event TravelThroughPortal(address indexed user, uint256 portalKey, uint256 universe);

    constructor() public {
        owner = msg.sender;
    }

    function createPortalKey(uint256 portalKey) public {
        require(msg.sender == owner, "Only the owner can create portal keys");

        portalKeys[msg.sender] = portalKey;

        emit NewPortalKey(msg.sender, portalKey);
    }

    function updatePortalKey(uint256 portalKey) public {
        require(portalKeys[msg.sender] != 0, "No portal key to update");

        portalKeys[msg.sender] = portalKey;

        emit UpdatePortalKey(msg.sender, portalKey);
    }

    function travelThroughPortal(uint256 portalKey, uint256 universe) public {
        require(portalKeys[msg.sender] == portalKey, "Only the owner of the portal key can travel through it");

        portalUniverses[msg.sender] = universe;

        // Travel through the portal
        // ...

        emit TravelThroughPortal(msg.sender, portalKey, universe);
    }
}
