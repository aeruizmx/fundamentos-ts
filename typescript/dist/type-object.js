"use strict";
//OBJECT
//EXPLICITO
var user;
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
var myObject = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Andres',
    isPro: true
};
var isInstance = myObject instanceof Object; // Clase Object de JavaScript
console.log('isInstance', isInstance);
console.log(myObject.username);
