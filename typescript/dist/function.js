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
let createPic = (title, date, size) => {
    return {
        title: title,
        date: date,
        size: size
    };
    return { title, date, size };
};
const picture = createPic('El grito', '2021-01-02', '100x100');
console.log('picture', picture);
// Tipo de retorno con TypeScript
function handleError(code, message) {
    //Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has occured';
    }
}
try {
    let result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
}
catch (error) {
}
