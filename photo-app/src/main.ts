// import { User, Album, Picture, PhotoOrientation } from './photo-app';

import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'aeruiz', 'Andres', true);
const album = new Album(10, 'Platzi Album');
const picture = new Picture(1, 'TypeScript Course', '2021-02-01', PhotoOrientation.Panorama);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);
user.removeAlbum(album);
console.log('user', user);