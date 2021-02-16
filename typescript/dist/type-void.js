"use strict";
//VOID
//EXPLICITO
function showInfo(user) {
    console.log('UserIfo', user.id, user.name, user.lastname);
}
showInfo({ id: 1, name: 'Andres', lastname: 'Ruiz' });
//INFERIDO
function showFormattedInfo(user) {
    console.log('UserIfo', `
    id: ${user.id}
    name: ${user.name}
    lastname: ${user.lastname}
  `);
}
showFormattedInfo({ id: 1, name: 'Andres', lastname: 'Ruiz' });
// VOID COMO TIPO DE DATO DE UNA VARIABLE
let unusable;
// unusable = null; // Uso estricto de tsconfig.ts
unusable = undefined;
// TIPO NEVER
function handleError(code, message) {
    //Process your code
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not found');
}
catch (error) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
//ciclo infinito, el programa no termina
