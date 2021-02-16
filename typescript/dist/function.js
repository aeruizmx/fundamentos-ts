"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usamos TS, definimos tipos para parametros
function createPictureTS(title, date, size) {
    // Se crea figura
    console.log('Create picture using', title, date, size);
}
createPictureTS('My birthday', '2020-01-01', '1000x1000');
// createPictureTS('Colombia Trip', '2020-01-31'); // An argument for 'size' was not provided.
//Parametros opcionales en funciones
function createPictureTSOptionales(title, date, size) {
    // Se crea figura
    console.log('Create picture using', title, date, size);
}
createPictureTSOptionales('My birthday', '2020-01-01', '1000x1000');
createPictureTSOptionales('My birthday', '2020-01-01');
// Flat Array Function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
    return { title: title, date: date, size: size };
};
var picture = createPic('El grito', '2021-01-02', '100x100');
console.log('picture', picture);
