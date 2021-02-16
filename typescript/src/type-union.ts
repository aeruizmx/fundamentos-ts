// UNION TYPE
// 10, '10'
let idUser2: number | string;
idUser2 = 10;
idUser2 = '10';

// Buscar username dado un ID
function getUsernameById(id: number | string){
  //Logica de negocio, find usuario
  return 'aeruiz';
}

getUsernameById(20);
getUsernameById('20');

// ALIAS DE TIPOS PARA TYPESCRIPT
type IdUser = number | string;
type Username = string;
let idUser3: IdUser;
idUser3 = 10;
idUser3 = '10';

// Buscar username dado un ID
function getUsernameById3(id: IdUser): Username{
  //Logica de negocio, find usuario
  return 'aeruiz';
}

getUsernameById3(20);
getUsernameById3('20');

// TIPOS LITERALES EN TYPESCRIPT
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200'; //Type '"200x200"' is not assignable to type 'SquareSize'
let smallPicture: SquareSize = '100x100'; //Type '"200x200"' is not assignable to type 'SquareSize'
let mediumPicture: SquareSize = '500x500';