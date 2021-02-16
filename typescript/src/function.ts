export {};
// Crear una fotografia
// function createPicture(title, date, size){
//   // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';
// Usamos TS, definimos tipos para parametros
function createPictureTS(title: string, date: string, size: SquareSize){
  // Se crea figura
  console.log('Create picture using', title, date, size);
}

createPictureTS('My birthday', '2020-01-01', '1000x1000');
// createPictureTS('Colombia Trip', '2020-01-31'); // An argument for 'size' was not provided.


//Parametros opcionales en funciones
function createPictureTSOptionales(title?: string, date?: string, size?: SquareSize){
  // Se crea figura
  console.log('Create picture using', title, date, size);
}
createPictureTSOptionales('My birthday', '2020-01-01', '1000x1000');
createPictureTSOptionales('My birthday', '2020-01-01');

// Flat Array Function
let createPic = (title: string, date:string, size:SquareSize): object => {
  return {
    title: title,
    date: date,
    size: size
  }
  return { title, date, size }
};

const picture = createPic('El grito', '2021-01-02','100x100');
console.log('picture', picture);