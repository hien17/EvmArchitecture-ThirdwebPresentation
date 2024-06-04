//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract MyContract {
    int a;
    function set(int _a) external {
        a = _a;
    }
}
