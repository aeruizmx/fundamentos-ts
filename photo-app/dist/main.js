"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'aeruiz', 'Andres', true);
var album = new photo_app_1.Album(10, 'Platzi Album');
var picture = new photo_app_1.Picture(1, 'TypeScript Course', '2021-02-01', photo_app_1.PhotoOrientation.Panorama);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
