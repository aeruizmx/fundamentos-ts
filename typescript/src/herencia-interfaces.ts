// Herencia de interfaces
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity{
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: 'Meetups',
  description:'Reuniones album'
}

const picture: Picture = {
  id: 1,
  title: 'Playa',
  orientation: PhotoOrientation.Square
}

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.table(album);
console.table(picture);
console.table(newPicture);

