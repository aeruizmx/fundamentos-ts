"use strict";
//OBJECT
//EXPLICITO
let user;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Andres',
    isPro: true
};
console.table(user);
// Object vs object (Clase JS vs tipo TS)
// console.log(user.username); // Property 'username' does not exist on type 'object'
const myObject = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Andres',
    isPro: true
};
const isInstance = myObject instanceof Object; // Clase Object de JavaScript
console.log('isInstance', isInstance);
console.log(myObject.username);
