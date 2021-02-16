"use strict";
//TUPLE
//[1,'user']
var newUser;
newUser = [1, 'Andres Ruiz'];
console.log('user', newUser);
console.log('username', newUser[1]);
console.log('username.length', newUser[1].length);
console.log('id', newUser[0]);
// TUPLAS CON VARIOS VALORES
// id, username, isPro
var userInfo2;
userInfo2 = [2, 'Paparazzi', true];
console.log('userInfo', userInfo2);
//ARREGLO DE TUPLAS
var array = [];
array.push([1, 'aeruiz']);
array.push([2, 'aeruiz2']);
array.push([3, 'aeruiz3']);
array.push([4, 'aeruiz4']);
console.log('array', array);
// USO DE FUNCIONES DE ARRAY
array[2][1] = array[2][1].concat('001');
console.log('array', array);
