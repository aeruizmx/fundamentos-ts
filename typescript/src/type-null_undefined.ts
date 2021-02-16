// NULL
//EXPLICITO
let nullVariable: null;
nullVariable = null;
//nullVariable = 0; //Error
let other = null;
other = 'test';
console.log('nullVariable', nullVariable);
console.log('other', other);

//UNDEFINED
let undefinedVariable: undefined;
undefinedVariable = undefined;
//undefinedVariable = 10; // Error
let otherUndefi = undefined;
otherUndefi = 100; 
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefi', otherUndefi);

//NULL Y UNDEFINED COMO SUBTIPOS
// --strictNullChecks
let albumName: string;
//albumName = null; // Error
//albumName = undefined; // Error