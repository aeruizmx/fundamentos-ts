//HERENCIA EN CLASES
export {};
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

//Superclase

abstract class Item {
  protected readonly _id:number;
  protected _title:string;
  
  constructor(id:number, title:string){
    this._id = id;
    this._title = title;
  }

  get id(){
    return this._id;
  }

  //set id(id:number){
    // this._id = id; Cannot assign to '_id' because it is a read-only property.
  //}

  get title(){
    return this._title
  }

  set title(title:string){
    this._title = title;
  }

}

class Picture extends Item {
  //Propiedades
  public static photoOrientation = PhotoOrientation;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation:PhotoOrientation){
    super(id, title);
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation:PhotoOrientation){
    this._orientation = orientation;
  }

  //Comportamiento
  public toString(){
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album extends Item{
  private _pictures: Picture[];

  public constructor(id: number, title: string){
    super(id, title);
    this._pictures = []
  }

  public addPicture(picture: Picture){
    this._pictures.push(picture);
  }
}

const album: Album = new Album(1,'Familia');
const picture: Picture = new Picture(1, 'Sun',PhotoOrientation.Square);
album.addPicture(picture);
console.log('album',album);

// Accediendo a los miebros Publicos
console.log('picture.id', picture.id); // get id()

// picture.id = 100; // private set id (100) Cannot assign to '_id' because it is a read-only property.
picture.title = 'Probando';
album.title = 'Personal activities';
console.log('album',album);

// const item = new Item(1, 'Test title'); // Cannot create an instance of an abstract class.
// console.log('item',item);

//Probar el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Portrait);