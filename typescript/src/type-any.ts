// ANY
//EXPLICITO
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
//INFERIDO
let otherId;
otherId = 10;
otherId = '10';
console.log('otherId', otherId);

let surprise: any = 'hola TypeScript';
// surprise.sayHello(); // Error surprise.sayHello is not a function
const res = surprise.substring(6);
console.log('res',res);