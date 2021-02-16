"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Familia');
const picture = new Picture(1, 'Sun', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los miebros Privados
//picture.id = 100; // Property 'id' is private and only accessible within class 'Picture'
//picture.title = 'Probando'; // Property 'title' is private and only accessible within class 'Picture'.
//album.title = 'Personal activities'; // Property 'title' is private and only accessible within class 'Album'
console.log('album', album);
