"use strict";
// NUMBER
// EXPLICITO
var phone;
phone = 1;
phone = 4432388240;
// phone = 'Hola'; // Type 'string' is not assignable to type 'number'.
//INFERIDO
var phone2 = 4432388240;
phone2 = 12;
// phone = true; //Type 'boolean' is not assignable to type 'number'.
//HEXADECIMAL
var hex = 0xf00d;
//BINARIOS
var binario = 21;
//OCTAL
var octal = 511;
//BOOLEAN
// EXPLICITO
var isPro;
isPro = false;
// isPro = 1; // Type 'number' is not assignable to type 'boolean'.
//INFERIDO
var isPro2 = false;
isPro2 = true;
//isPro2 = 1; Type 'number' is not assignable to type 'boolean'.
//STRING
//EXPLICITO
var username = 'Andres';
username = 'OTRO NOMBRE';
// username = 1234 Type 'number' is not assignable to type 'string'.
//TEMPLATE STRING
// backtick `
var userInfo;
userInfo = "\n  User Info:\n  username: " + username + "\n  firstname: " + (username + 'Ruiz') + "\n  phone: " + phone + "\n  isPro: " + isPro2 + "\n";
console.log('userInfo', userInfo);
