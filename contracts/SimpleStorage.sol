// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 public favoriteNumber;
    event storedNumber(
        uint256 indexed oldNumber,
        uint256 indexed newNumber,
        uint256 addedNumber,
        address sender
    );

    function store(uint256 newFavoriteNumber) public {
        emit storedNumber(
            favoriteNumber,
            newFavoriteNumber,
            favoriteNumber + newFavoriteNumber,
            msg.sender
        );
        favoriteNumber = newFavoriteNumber;
    }
}
