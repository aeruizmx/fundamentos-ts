"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Meetups',
    description: 'Reuniones album'
};
var picture = {
    id: 1,
    title: 'Playa',
    orientation: PhotoOrientation.Square
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.table(album);
console.table(picture);
console.table(newPicture);
