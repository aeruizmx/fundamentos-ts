"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ASERCIONES
// < > Angle Bracket Syntax
let username;
username = 'ruizgonzalex';
// Tenemos una cadena, TS confia en mi
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('message', message);
let usernameWithId = 'aeruizaaaaa 1';
// ¿Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username', username);
// AS
message: username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
