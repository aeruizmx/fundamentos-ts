//ENUM
//Orientacion para fotografias
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama
}
//const landscape2: PhotoOrientation = PictureOrientation.Portrait;
//console.log('landscape2', landscape2);
console.log('landscape2', PictureOrientation.Square);

enum Country{
  Bolivia = 'bol',
  Mexico = 'mex',
  Colombia = 'col',
  Argentina = 'arg',
  España = 'esp'
}
const country: Country = Country.Argentina
console.log('country', country);