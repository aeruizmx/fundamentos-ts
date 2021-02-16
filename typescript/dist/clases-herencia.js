"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Superclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    //set id(id:number){
    // this._id = id; Cannot assign to '_id' because it is a read-only property.
    //}
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
//Propiedades
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new Album(1, 'Familia');
const picture = new Picture(1, 'Sun', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los miebros Publicos
console.log('picture.id', picture.id); // get id()
// picture.id = 100; // private set id (100) Cannot assign to '_id' because it is a read-only property.
picture.title = 'Probando';
album.title = 'Personal activities';
console.log('album', album);
// const item = new Item(1, 'Test title'); // Cannot create an instance of an abstract class.
// console.log('item',item);
//Probar el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Portrait);
