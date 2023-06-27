import Canal from "./clases/canal.js"
import Categoria from "./clases/categoria.js";
import Plataforma from "./clases/plataforma.js"
import Stream from "./clases/stream.js";
import Streamer from "./clases/streamer.js"

class AplicationChanellsPlataforms{
    private streamers:Array<Streamer>;
    private plataformas:Array<Plataforma>;

    constructor(plataforma:Array<Plataforma>){
        this.streamers = []
        this.plataformas = plataforma;
    }

    public setCanalInPlataforma(namePlat:string,canal:Canal){
        this.getPlataforma(namePlat)?.setCanal(canal);

    }
    
    public setStream(canal:string,nameStream:string,categorias:Array<Categoria>){
        this.getCanal(canal)?.createStream(nameStream,categorias)
    }

    public setStreamer(streamer:Streamer){
        this.streamers.push(streamer);
    }

    public getStreamers(){
        console.group("streamers")
            console.log(this.streamers);
        console.groupEnd()
    }

    public getStreamer(nickname:string){
        console.group("streamer")
            console.log(this.streamers.find(c=>c.nickname === nickname))
        console.groupEnd()
        return this.streamers.find(c=>c.nickname === nickname)
    }

    
    public getPlataformas(){
        console.group("plataformas")
            console.log(this.plataformas)
        console.groupEnd()
    }
    
    public getPlataforma(nom:string){
        const plataforma = this.plataformas.find(p=>p.nombre === nom)
        console.group("plataforma")
            console.log(plataforma)
        console.groupEnd();
        return plataforma
    }

    public setPlataforma(plat:Plataforma){
        this.plataformas.push(plat)
    }

    public getCanales(){
        this.plataformas.forEach(p=>p.getCanales())
    }

    public getCanal(nom:string){
        
        console.group("canal")
            for(let plataforma of this.plataformas){
                const canal = plataforma?.canales.find(c=>c.nombre===nom)
                if(canal){
                    console.log(canal)
                    
                    console.groupEnd()
                    return canal
                }
            }
            console.log("no encontrado")
            console.groupEnd()
    }

    public getStreams(){
        console.group("streams:")
        this.plataformas.forEach(p=>{
            console.group("plataforma: "+p.nombre)
                p.canales.forEach(c=>c.getStreams())
            console.groupEnd()
        })
        console.groupEnd()
    }

    public getStream(titulo:string){

        console.group("stream")
        for(let plataforma of this.plataformas){
            
            for(let canal of plataforma.canales){
                
                let stream = canal.streams.find(s=>s.titulo === titulo)

                if(stream){
                    console.log(stream)
                    
                    console.groupEnd();
                    return stream
                }
            }
        }
        console.log(null)
        console.groupEnd();
        return null        
            
    }
    
    public setStreamInStreamer(streamer:string,stream?:Stream,streamName?:string){
        const streamAlg = streamName ? this.getStream(streamName) : stream ;
        if(streamAlg){
            this.getStreamer(streamer)?.setStream(streamAlg)
        }
    }


}

(()=>{
    const app = new AplicationChanellsPlataforms([]);
    app.setPlataforma(new Plataforma("twitch","link","descripcion twitch","Amazon",[]));
    app.setPlataforma(new Plataforma("youtube","link","descripcion youtube","Google",[]));
    app.setPlataforma(new Plataforma("facebook","link","descripcion Facebook","Meta",[]));

    app.getPlataformas()
    
    
    
    const canal = new Canal("julio profe","matematicas","algebra,calculo,etc","Julio Profe")
    
    app.setStreamer(new Streamer("Julio Profe","Matematicas",[],canal));
    app.setCanalInPlataforma("youtube",canal);

    app.getCanales()

    app.setStream("julio profe","algebra 1",[new Categoria("matematicas","matematicas basicas","link"),new Categoria("ciencias","ciencias varias","link")])
    
    
    app.getStreamers()

    app.getStreams()

    app.setStreamInStreamer("Julio Profe",undefined,"algebra 1")
    

})()

