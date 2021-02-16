"use strict";
// ARRAY
//CORCHETES []
//EXPLICITO
var users;
users = ['Ruiz', 'Gonzalez', 'Perez'];
// users = [1,2,3]; //Error Type 'number' is not assignable to type 'string'
//INFERIDO
var others = ['Uno', 'Dos', 'Tres'];
//others = [1,2,3]; //Error Type 'number' is not assignable to type 'string'
//ARRAY<TIPO>
var pictureTitles;
pictureTitles = ['Una', 'Otra', 'Monalisa'];
//ACCESO A VALORES EN ARRAY
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);
// PROPIEDADES EN ARRAY
console.log('users.length', users.length);
//USO DE FUNCIONES EN ARRAY
users.push('Jose');
users.sort();
console.table(users);
