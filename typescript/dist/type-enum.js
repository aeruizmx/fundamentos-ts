"use strict";
//ENUM
//Orientacion para fotografias
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
//const landscape2: PhotoOrientation = PictureOrientation.Portrait;
//console.log('landscape2', landscape2);
console.log('landscape2', PictureOrientation.Square);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Mexico"] = "mex";
    Country["Colombia"] = "col";
    Country["Argentina"] = "arg";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
var country = Country.Argentina;
console.log('country', country);
