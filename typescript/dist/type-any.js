"use strict";
// ANY
//EXPLICITO
var idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
//INFERIDO
var otherId;
otherId = 10;
otherId = '10';
console.log('otherId', otherId);
var surprise = 'hola TypeScript';
// surprise.sayHello(); // Error surprise.sayHello is not a function
var res = surprise.substring(6);
console.log('res', res);
