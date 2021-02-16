//CLASES
export {};
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //Propiedades
  private id: number;
  private title: string;
  private orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation:PhotoOrientation){
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  //Comportamiento
  public toString(){
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  private id: number;
  private title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string){
    this.id = id;
    this.title = title;
    this.pictures = []
  }

  public addPicture(picture: Picture){
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1,'Familia');
const picture: Picture = new Picture(1, 'Sun',PhotoOrientation.Square);
album.addPicture(picture);
console.log('album',album);

// Accediendo a los miebros Privados
//picture.id = 100; // Property 'id' is private and only accessible within class 'Picture'
//picture.title = 'Probando'; // Property 'title' is private and only accessible within class 'Picture'.
//album.title = 'Personal activities'; // Property 'title' is private and only accessible within class 'Album'
console.log('album',album);