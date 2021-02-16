export {};
//ASERCIONES
// < > Angle Bracket Syntax
let username: any;
username = 'ruizgonzalex';

// Tenemos una cadena, TS confia en mi
let message: string = (<string>username).length > 5 ?
                      `Welcome ${username}`:
                      `Username is too short`;
console.log('message',message);

let usernameWithId: any = 'aeruizaaaaa 1';
// ¿Como obtener el username?
username = (<string>usernameWithId).substring(0,10);
console.log('Username', username);

// AS
message:(username as string).length > 5 ?
        `Welcome ${username}`:
        `Username is too short`;
let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);