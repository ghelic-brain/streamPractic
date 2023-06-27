import Canal from "./canal.js";


export default class Plataforma{
    public nombre:string;
    public logo:string;
    public descripcion:string;
    public empresa:string;
    public canales:Array<Canal>;
    constructor(nombre:string,logo:string,descripcion:string,empresa:string,canales:Array<Canal>){
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa =empresa;
        this.canales = canales;
    }

    public getCanales(){
        console.group("canales del canal: "+this.nombre);
            console.log(this.canales)
        console.groupEnd()
    }

    public getCanal(nom:string){
        console.group("canal")
            console.log(this.canales.find(c=>c.nombre===nom))
        console.groupEnd()
        return this.canales.find(c=>c.nombre===nom)
    }

    public setCanal(canal:Canal){
        this.canales.push(canal)
    }


}