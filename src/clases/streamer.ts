import Canal from "./canal.js";
import Stream from "./stream.js";


export default class Streamer{
    public nickname:string;
    public descripcion:string;
    public redesSociales:Array<string>;
    public canal:Canal;
    public streams:Array<Stream>;
    constructor(nick:string,descripcion:string,redes:Array<string>,canal:Canal){
        this.nickname = nick;
        this.descripcion=descripcion;
        this.redesSociales = redes;
        this.canal = canal;
        this.streams=[]
    }

    setStream(stream:Stream){
        this.streams.push(stream);
    }

    setCanal(canal:Canal){
        this.canal = canal;
    }


}