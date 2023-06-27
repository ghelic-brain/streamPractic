
export default class Categoria{
    public nombre:string;
    public descripcion:string;
    public imagen:string;
    constructor(nombre:string,desc:string,img:string){
        this.nombre = nombre;
        this.descripcion = desc;
        this.imagen=img;
    }
}