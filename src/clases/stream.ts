

import Canal from "./canal.js";
import Categoria from "./categoria.js";

export default class Stream{
    public titulo:string;
    public canal:Canal;
    public categorias:Array<Categoria>
    constructor(
        titulo:string,
        canal:Canal,
        categorias:Array<Categoria>,
    ){    
        this.titulo = titulo;
        this.canal = canal;
        this.categorias=categorias;
    }    
    public getCategorias(){
        console.group("categorias")
            console.log(this.categorias)
        console.groupEnd()
    }
}