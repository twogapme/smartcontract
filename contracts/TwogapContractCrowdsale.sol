pragma solidity ^0.4.24;

import "../contracts/TwogapContract.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

/*contract TwogapContractCrowdsale is CappedCrowdsale, RefundableCrowdsale, MintedCrowdsale {
    constructor(
        uint256 _openingTime,
        uint256 _closingTime,
        uint256 _rate,
        address _wallet,
        MintableToken _token,
        uint256 _cap,
        uint256 _goal
    )
        public
        Crowdsale(_rate, _wallet, _token)
        CappedCrowdsale(_cap)
        TimedCrowdsale(_openingTime, _closingTime)
        RefundableCrowdsale(_goal)
    {
        //As goal needs to be met for a successful crowdsale
        //the value needs to less or equal than a cap which is limit for accepted funds
        require(_goal <= _cap);
    }
}*/
contract TwogapContractCrowdsale is Crowdsale {
    constructor(
        uint256 _rate,
        MintableToken _token
    )
        public
        Crowdsale(_rate, msg.sender, _token)
    {
    }
}