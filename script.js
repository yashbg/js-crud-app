'use strict';

let addressMap = new Map();

function addUser(name, address){
    if(addressMap.has(name)){
        alert(`User ${name} already exists.`);
        return;
    }
    addressMap.set(name, address);
    alert(`User ${name} added.`)
}

function getAddress(name){
    if(!addressMap.has(name)){
        alert(`User ${name} doesn't exist.`);
        return;
    }
    address =  addressMap.get(name);
    alert(`Address of ${name} is ${address}`);
}

function updateAddress(name, newAddress){
    if(!addressMap.has(name)){
        alert(`User ${name} doesn't exist.`);
        return;
    }
    addressMap.set(name, newAddress);
    alert(`Address of ${name} updated.`);
}

function deleteUser(name){
    if(!addressMap.has(name)){
        alert(`User ${name} doesn't exist.`);
        return;
    }
    addressMap.delete(name);
    alert(`User ${name} deleted`);
}
