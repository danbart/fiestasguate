export class Comunidad{
  // public nombre:string;
  // public edad:number;
  //
  // constructor(nombre, edad){
  //   this.nombre = nombre;
  //   this.edad = edad;
  // }
//esto es la forma corta de lo de arriba
  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}
}
