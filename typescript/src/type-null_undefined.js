// NULL
//EXPLICITO
var nullVariable;
nullVariable = null;
//nullVariable = 0; //Error
var other = null;
other = 'test';
console.log('nullVariable', nullVariable);
console.log('other', other);
//UNDEFINED
var undefinedVariable;
undefinedVariable = undefined;
//undefinedVariable = 10; // Error
var otherUndefi = undefined;
otherUndefi = 100;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefi', otherUndefi);
//NULL Y UNDEFINED COMO SUBTIPOS
// --strictNullChecks
var albumName;
albumName = null; // Error
albumName = undefined; // Error
