// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// import "@account-abstraction/contracts/core/EntryPoint.sol";
// import "@account-abstraction/contracts/interfaces/IAccount.sol";
// import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Create2.sol";

contract NPublication  {   

    address public owner;
    string public config;
    string public html_root;
    address[] public whitelisted_authors;      
    
    event NOffer(address indexed author, address indexed publication, string indexed content);
    event NRootUpdate(string html_root);
    event NConfigUpdate(string config);

    constructor(address _initiator, string memory _config, string memory _html_root) {
        config = _config;
        html_root = _html_root;
        owner = _initiator;
    }

    function _inArray(address[] memory _array, address _address) private pure returns (bool) {
        
        for (uint i = 0; i < _array.length; i++) {
            if (_array[i] == _address) {
                return true;
            } 
        }
        
        return false;
    }

    function acceptOffer(address author, address publication, string calldata content_cid) external returns (bool) {

        emit NOffer(msg.sender, publication, content_cid);

        if (_inArray(whitelisted_authors, author)) {
            return true;
        } else {
            return false;
        }
    }  

    function changeOwner(address new_owner) external {

        if(msg.sender == owner) {
            owner = new_owner;
        }
    }

    function whitelist(address author) external {

        if(msg.sender == owner) {
            whitelisted_authors.push(author);
        }
    }

    function updateConfig(string calldata _config) external {

        if(msg.sender == owner) {
            config = _config;
            emit NConfigUpdate(config);
        }
    }

    function reset() external{

        html_root = "harry";

    }

    function updateHtmlRoot(string calldata _html_root) external {
        
        // how do we protect this ??? 
        // nPrinter == safe address of worker  
        html_root = _html_root;
        // emit NRootUpdate(html_root);
    }

} 

contract NPublicationFactory {

    // is being used as dummy call in contract creation!
    function test() pure external returns (string memory) {
        return "hello";
    }

    function concatBytes16(address owner, string memory cid) public pure returns (bytes32 result) {
            bytes memory _cid = bytes(cid);
            bytes16 o = bytes16(bytes20(owner)); 
            bytes16 c = bytes16(_cid); 
        
        assembly {
            // Shift the first 16 bytes (a) to the left by 128 bits (16 bytes)
            // and then OR it with the second 16 bytes (b)
            result := or(shl(128, o), c)
        }
    }

    function createPublication(address owner, string memory config, string memory html_root) external returns (address) {

        bytes32 salt = concatBytes16(owner, config); // replace cid with name ? 
        bytes memory bytecode = abi.encodePacked(type(NPublication).creationCode, abi.encode(owner, config, html_root));

        address addr = Create2.computeAddress(salt, keccak256(bytecode));
        uint256 codeSize = addr.code.length;
        if (codeSize > 0) {
            return addr;
        }
        return deploy(salt, bytecode);
    }

    function deploy(bytes32 salt, bytes memory bytecode) internal returns (address addr) {
        require(bytecode.length != 0, "Create2: bytecode length is zero");
        /// @solidity memory-safe-assembly
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }
        require(addr != address(0), "Create2: Failed on deploy");
    }
}
