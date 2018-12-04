pragma solidity 0.5.1;

contract Web3Test {
    address owner;

    event CustomEvent(address sender);
    event CustomEvent2(address sender, uint);

    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function getBalance() view public returns (uint) {
        return address(this).balance;
    }

    function() external {

    }

    function triggerEvent() external {
        emit CustomEvent(msg.sender);
    }

    function triggerEvent2() external {
        emit CustomEvent2(msg.sender, 123);
    }

    function getMoney(uint value) public payable onlyOwner {
        msg.sender.transfer(value);
    }
}