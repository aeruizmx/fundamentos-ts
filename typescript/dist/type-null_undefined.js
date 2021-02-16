"use strict";
// NULL
//EXPLICITO
let nullVariable;
nullVariable = null;
//nullVariable = 0; //Error
let other = null;
other = 'test';
console.log('nullVariable', nullVariable);
console.log('other', other);
//UNDEFINED
let undefinedVariable;
undefinedVariable = undefined;
//undefinedVariable = 10; // Error
let otherUndefi = undefined;
otherUndefi = 100;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefi', otherUndefi);
//NULL Y UNDEFINED COMO SUBTIPOS
// --strictNullChecks
let albumName;
//albumName = null; // Error
//albumName = undefined; // Error
