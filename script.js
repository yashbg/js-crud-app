'use strict';

let addressMap = new Map();

function addUser(name, address){
    addressMap.set(name, address);
}

function getAddress(name){
    return addressMap.get(name);
}

function updateAddress(name, newAddress){
    addressMap.set(name, newAddress);
}

function deleteUser(name){
    addressMap.delete(name);
}
