// NUMBER
// EXPLICITO
let phone: number;
phone = 1;
phone = 4432388240;
// phone = 'Hola'; // Type 'string' is not assignable to type 'number'.
//INFERIDO
let phone2 = 4432388240;
phone2 = 12;
// phone = true; //Type 'boolean' is not assignable to type 'number'.

//HEXADECIMAL
let hex: number = 0xf00d;

//BINARIOS
let binario: number = 0b010101;

//OCTAL
let octal: number = 0o777;

//BOOLEAN
// EXPLICITO
let isPro: boolean;
isPro = false;
// isPro = 1; // Type 'number' is not assignable to type 'boolean'.
//INFERIDO
let isPro2 = false;
isPro2 = true;
//isPro2 = 1; Type 'number' is not assignable to type 'boolean'.

//STRING
//EXPLICITO
let username: string = 'Andres';
username = 'OTRO NOMBRE';
// username = 1234 Type 'number' is not assignable to type 'string'.

//TEMPLATE STRING
// backtick `
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  firstname: ${username + 'Ruiz'}
  phone: ${phone}
  isPro: ${isPro2}
`;
console.log('userInfo',userInfo);