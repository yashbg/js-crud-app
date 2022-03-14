'use strict';

let addressMap = new Map();

function addUser() {
    let name = prompt('Name:', '');
    if (!name) {
        alert(`You didn't provide the name.`);
        return;
    }
    if (addressMap.has(name)) {
        alert(`User ${name} already exists.`);
        return;
    }

    let address = prompt('Address:', '');
    if (!address) {
        alert(`You didn't provide the address.`);
        return;
    }

    addressMap.set(name, address);
    alert(`User ${name} added.`)
}

function getAddress() {
    let name = prompt('Name:', '');
    if (!name) {
        alert(`You didn't provide the name.`);
        return;
    }
    if (!addressMap.has(name)) {
        alert(`User ${name} doesn't exist.`);
        return;
    }

    let address = addressMap.get(name);
    alert(`Address of ${name} is ${address}.`);
}

function updateAddress() {
    let name = prompt('Name:', '');
    if (!name) {
        alert(`You didn't provide the name.`);
        return;
    }
    if (!addressMap.has(name)) {
        alert(`User ${name} doesn't exist.`);
        return;
    }

    let newAddress = prompt('New Address:', '');
    if (!newAddress) {
        alert(`You didn't provide the new address.`);
        return;
    }

    addressMap.set(name, newAddress);
    alert(`Address of ${name} updated.`);
}

function deleteUser() {
    let name = prompt('Name:', '');
    if (!name) {
        alert(`You didn't provide the name.`);
        return;
    }
    if (!addressMap.has(name)) {
        alert(`User ${name} doesn't exist.`);
        return;
    }
    
    addressMap.delete(name);
    alert(`User ${name} deleted.`);
}
