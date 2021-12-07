// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

/**
 * @title SafeMath
 * @dev Unsigned math operations with safety checks that revert on error
 */
library SafeMath {

  /**
   * @dev Multiplies two unsigned integers, reverts on overflow.
   */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (a == 0) {
      return 0;
    }

    uint256 c = a * b;
    require(c / a == b, "SafeMath#mul: OVERFLOW");

    return c;
  }

  /**
   * @dev Integer division of two unsigned integers truncating the quotient, reverts on division by zero.
   */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // Solidity only automatically asserts when dividing by 0
    require(b > 0, "SafeMath#div: DIVISION_BY_ZERO");
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold

    return c;
  }

  /**
   * @dev Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).
   */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a, "SafeMath#sub: UNDERFLOW");
    uint256 c = a - b;

    return c;
  }

  /**
   * @dev Adds two unsigned integers, reverts on overflow.
   */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a, "SafeMath#add: OVERFLOW");

    return c; 
  }

  /**
   * @dev Divides two unsigned integers and returns the remainder (unsigned integer modulo),
   * reverts when dividing by zero.
   */
  function mod(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b != 0, "SafeMath#mod: DIVISION_BY_ZERO");
    return a % b;
  }

}

contract SalePoolUtils {

  using SafeMath for uint256;
  
  uint public constant multiplier = 2;
  uint public constant earnMultiplier = 1.75e18;

  function getMinStake() public pure returns(uint) {
    return 300e18 * multiplier;
  }

  function getMaxStake() public pure returns(uint) {
    return 1000000e18 * multiplier;
  }

  function getProduction(uint _stacked) public pure returns(uint) {

    if(_stacked < getMinStake()) {
      return 0;
    }

    if(_stacked > 6039.405088e18 * multiplier) {
      return getProduction1(_stacked).mul(earnMultiplier).div(1e18);
    }

    return getProduction2(_stacked).mul(earnMultiplier).div(1e18);
  }

  function getProduction1(uint _stacked) internal pure returns(uint) {
    if(_stacked > 999415.6789e18 * multiplier) {

      return uint(10e18).div(1 days);
    }

    if(_stacked > 941560.2866e18 * multiplier) {
      return uint(9.9e18).div(1 days);
    }

    if(_stacked > 883120.4963e18 * multiplier) {
      return uint(9.8e18).div(1 days);
    }

    if(_stacked > 824096.3082e18 * multiplier) {
      return uint(9.7e18).div(1 days);
    }

    if(_stacked > 766240.9158e18 * multiplier) {
      return uint(9.6e18).div(1 days);
    }

    if(_stacked > 707801.1256e18 * multiplier) {
      return uint(9.5e18).div(1 days);
    }

    if(_stacked > 649361.3353e18 * multiplier) {
      return uint(9.4e18).div(1 days);
    }

    if(_stacked > 590921.5451e18 * multiplier) {
      return uint(9.3e18).div(1 days);
    }

    if(_stacked > 532481.7548e18 * multiplier) {
      return uint(9.2e18).div(1 days);
    }

    if(_stacked > 474041.9646e18 * multiplier) {
      return uint(9.1e18).div(1 days);
    }

    if(_stacked > 441738.8863e18 * multiplier) {
      return uint(9e18).div(1 days);
    }

    if(_stacked > 409435.8081e18 * multiplier) {
      return uint(8.9e18).div(1 days);
    }

    if(_stacked > 377132.7299e18 * multiplier) {
      return uint(8.8e18).div(1 days);
    }

    if(_stacked > 344829.6516e18 * multiplier) {
      return uint(8.7e18).div(1 days);
    }

    if(_stacked > 312526.5734e18 * multiplier) {
      return uint(8.6e18).div(1 days);
    }

    if(_stacked > 280223.4952e18 * multiplier) {
      return uint(8.5e18).div(1 days);
    }

    if(_stacked > 247920.417e18 * multiplier) {
      return uint(8.4e18).div(1 days);
    }

    if(_stacked > 215617.3387e18 * multiplier) {
      return uint(8.3e18).div(1 days);
    }

    if(_stacked > 183314.2605e18 * multiplier) {
      return uint(8.2e18).div(1 days);
    }

    if(_stacked > 171039.9776e18 * multiplier) {
      return uint(8.1e18).div(1 days);
    }

    if(_stacked > 156038.0762e18 * multiplier) {
      return uint(8e18).div(1 days);
    }

    if(_stacked > 142399.9841e18 * multiplier) {
      return uint(7.9e18).div(1 days);
    }

    if(_stacked > 128761.8919e18 * multiplier) {
      return uint(7.8e18).div(1 days);
    }

    if(_stacked > 115123.7998e18 * multiplier) {
      return uint(7.7e18).div(1 days);
    }

    if(_stacked > 101485.7076e18 * multiplier) {
      return uint(7.6e18).div(1 days);
    }

    if(_stacked > 87847.61548e18 * multiplier) {
      return uint(7.5e18).div(1 days);
    }

    if(_stacked > 74209.52334e18 * multiplier) {
      return uint(7.4e18).div(1 days);
    }

    if(_stacked > 60571.4312e18 * multiplier) {
      return uint(7.3e18).div(1 days);
    }

    if(_stacked > 56038.55532e18 * multiplier) {
      return uint(7.2e18).div(1 days);
    }

    if(_stacked > 51505.67943e18 * multiplier) {
      return uint(7.1e18).div(1 days);
    }

    if(_stacked > 46972.80355e18 * multiplier) {
      return uint(7e18).div(1 days);
    }

    if(_stacked > 42439.92767e18 * multiplier) {
      return uint(6.9e18).div(1 days);
    }

    if(_stacked > 37907.05179e18 * multiplier) {
      return uint(6.8e18).div(1 days);
    }

    if(_stacked > 33374.17591e18 * multiplier) {
      return uint(6.7e18).div(1 days);
    }

    if(_stacked > 28841.30002e18 * multiplier) {
      return uint(6.6e18).div(1 days);
    }

    if(_stacked > 24308.42414e18 * multiplier) {
      return uint(6.5e18).div(1 days);
    }

    if(_stacked > 19775.54826e18 * multiplier) {
      return uint(6.4e18).div(1 days);
    }

    if(_stacked > 18469.20814e18 * multiplier) {
      return uint(6.3e18).div(1 days);
    }

    if(_stacked > 17162.86802e18 * multiplier) {
      return uint(6.2e18).div(1 days);
    }

    if(_stacked > 15856.52791e18 * multiplier) {
      return uint(6.1e18).div(1 days);
    }

    if(_stacked > 14550.18779e18 * multiplier) {
      return uint(6e18).div(1 days);
    }

    if(_stacked > 13243.84767e18 * multiplier) {
      return uint(5.9e18).div(1 days);
    }

    if(_stacked > 11937.50756e18 * multiplier) {
      return uint(5.8e18).div(1 days);
    }

    if(_stacked > 10631.1674e18 * multiplier) {
      return uint(5.7e18).div(1 days);
    }

    if(_stacked > 9324.827321e18 * multiplier) {
      return uint(5.6e18).div(1 days);
    }

    if(_stacked > 8018.487204e18 * multiplier) {
      return uint(5.5e18).div(1 days);
    }

    if(_stacked > 7622.670781e18 * multiplier) {
      return uint(5.4e18).div(1 days);
    }

    if(_stacked > 7226.854357e18 * multiplier) {
      return uint(5.3e18).div(1 days);
    }

    if(_stacked > 6831.037934e18 * multiplier) {
      return uint(5.2e18).div(1 days);
    }

    if(_stacked > 6435.221511e18 * multiplier) {
      return uint(5.1e18).div(1 days);
    }

    if(_stacked > 6039.405088e18 * multiplier) {
      return uint(5e18).div(1 days);
    }
  }

  function getProduction2(uint _stacked) internal pure returns(uint) {
    if(_stacked > 5643.588664e18 * multiplier) {
      return uint(4.9e18).div(1 days);
    }

    if(_stacked > 5247.772241e18 * multiplier) {
      return uint(4.8e18).div(1 days);
    }

    if(_stacked > 4851.955818e18 * multiplier) {
      return uint(4.7e18).div(1 days);
    }

    if(_stacked > 4456.139395e18 * multiplier) {
      return uint(4.6e18).div(1 days);
    }

    if(_stacked > 4331.100404e18 * multiplier) {
      return uint(4.5e18).div(1 days);
    }

    if(_stacked > 4206.061413e18 * multiplier) {
      return uint(4.4e18).div(1 days);
    }

    if(_stacked > 4081.022423e18 * multiplier) {
      return uint(4.3e18).div(1 days);
    }

    if(_stacked > 3955.983432e18 * multiplier) {
      return uint(4.2e18).div(1 days);
    }

    if(_stacked > 3830.944442e18 * multiplier) {
      return uint(4.1e18).div(1 days);
    }

    if(_stacked > 3705.905451e18 * multiplier) {
      return uint(4e18).div(1 days);
    }

    if(_stacked > 3580.866461e18 * multiplier) {
      return uint(3.9e18).div(1 days);
    }

    if(_stacked > 3455.82747e18 * multiplier) {
      return uint(3.8e18).div(1 days);
    }

    if(_stacked > 3330.78848e18 * multiplier) {
      return uint(3.7e18).div(1 days);
    }

    if(_stacked > 3211.156118e18 * multiplier) {
      return uint(3.6e18).div(1 days);
    }

    if(_stacked > 3091.523756e18 * multiplier) {
      return uint(3.5e18).div(1 days);
    }

    if(_stacked > 2971.891394e18 * multiplier) {
      return uint(3.4e18).div(1 days);
    }

    if(_stacked > 2852.259032e18 * multiplier) {
      return uint(3.3e18).div(1 days);
    }

    if(_stacked > 2732.62667e18 * multiplier) {
      return uint(3.2e18).div(1 days);
    }

    if(_stacked > 2612.994308e18 * multiplier) {
      return uint(3.1e18).div(1 days);
    }

    if(_stacked > 2493.361947e18 * multiplier) {
      return uint(3e18).div(1 days);
    }

    if(_stacked > 2373.729585e18 * multiplier) {
      return uint(2.9e18).div(1 days);
    }

    if(_stacked > 2254.097223e18 * multiplier) {
      return uint(2.8e18).div(1 days);
    }

    if(_stacked > 2116.913601e18 * multiplier) {
      return uint(2.7e18).div(1 days);
    }

    if(_stacked > 1979.729979e18 * multiplier) {
      return uint(2.6e18).div(1 days);
    }

    if(_stacked > 1842.546357e18 * multiplier) {
      return uint(2.5e18).div(1 days);
    }

    if(_stacked > 1705.362735e18 * multiplier) {
      return uint(2.4e18).div(1 days);
    }

    if(_stacked > 1568.179113e18 * multiplier) {
      return uint(2.3e18).div(1 days);
    }

    if(_stacked > 1430.995491e18 * multiplier) {
      return uint(2.2e18).div(1 days);
    }

    if(_stacked > 1307.530231e18 * multiplier) {
      return uint(2.1e18).div(1 days);
    }

    if(_stacked > 1156.628247e18 * multiplier) {
      return uint(2e18).div(1 days);
    }

    if(_stacked > 1019.444625e18 * multiplier) {
      return uint(1.9e18).div(1 days);
    }

    if(_stacked > 940.4671506e18 * multiplier) {
      return uint(1.8e18).div(1 days);
    }

    if(_stacked > 861.4896763e18 * multiplier) {
      return uint(1.7e18).div(1 days);
    }

    if(_stacked > 782.5122019e18 * multiplier) {
      return uint(1.6e18).div(1 days);
    }

    if(_stacked > 703.5347275e18 * multiplier) {
      return uint(1.5e18).div(1 days);
    }

    if(_stacked > 624.5572531e18 * multiplier) {
      return uint(1.4e18).div(1 days);
    }

    if(_stacked > 545.5797787e18 * multiplier) {
      return uint(1.3e18).div(1 days);
    }

    if(_stacked > 466.6023043e18 * multiplier) {
      return uint(1.2e18).div(1 days);
    }

    if(_stacked > 387.6248299e18 * multiplier) {
      return uint(1.1e18).div(1 days);
    }

    return uint(1e18).div(1 days);
  }
}