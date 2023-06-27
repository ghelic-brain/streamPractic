import Categoria from "./categoria.js";
import Plataforma from "./plataforma.js";
import Stream from "./stream.js";
import Streamer from "./streamer.js";

export default class Canal{
    public nombre:string;
    public banner:string;
    public description:string;
    public streamerNickname:string;
    public streams:Array<Stream>;
    
    constructor(nombre:string,banner:string,descripcion:string,streamer:string){
        this.nombre = nombre;
        this.banner = banner;
        this.description = descripcion;
        this.streamerNickname = streamer;
        this.streams = [];
    }


    public createStream(titulo:string,categorias:Array<Categoria>){
        const stream = new Stream(titulo,this,categorias)
        this.streams.push(stream)
        return stream
    }

    public getStreams(){
        console.log(this.streams)
    }

    public getStream(titulo:string){
        console.log(this.streams.find(s=>s.titulo === titulo))
    }
    

}