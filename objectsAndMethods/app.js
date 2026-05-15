//Revisemos el data set 
console.log(`Total de canciones disponibles: ${canciones.length}`)
/* console.log(canciones[0]) */

//cuantas canciones de Bon Jovi hay
/* const cancionesBonJovi = canciones.filter( cancion => cancion.banda==="Bon Jovi" )
console.log(cancionesBonJovi.length) */

//cuantas power ballads hay
/* const totalPowerBallads = canciones.filter( cancion => cancion.genero==="power ballad" ).length
console.log(totalPowerBallads) */
//duracion total en horas del set de canciones
/* const totalSeg = canciones.reduce( (acc,cancion) => acc+cancion.duracion  ,0)
console.log(totalSeg) */

const spunchify = {
    //=== ESTADOS ===
    biblioteca:canciones,           //referencia del array de 111 canciones
    cancionActual:null,             //objeto de cancion sonando o null en defecto
    tiempoTrascurrido:0,            //segundo dentro de la cancion actual
    estado:"detenido",              //"detenido" - "reproduciendo" - "pausado"
    volumen: 50,                    //0 a 100
    cola:[],                        //ids de canciones por sonar
    historial:[],                   //ids de canciones que ya sonaron
    modoRandom:false,               //true si esta activo el modo aleatorio
    playlist:{},                    //{ nombrePlylist:[id1,id2,...] }
    tickInterval:null,               //referencia a setInterval, lo veremos mas adelante

    //=== METODOS ===
    //1er Metodo el reproductor
    play(id){
        //1. Buscar la cancion en la biblioteca
        const cancion = this.biblioteca.find( cancionB => cancionB.id === id  )

        //2.si la cancion no existe avisarle al usuario
        if(!cancion){
            console.log(`No existe la cancion ${id} "no puedo reproducirla"`)
            return
        }

        //3. Cambiar el estado del reproductor
        this.cancionActual = cancion
        this.tiempoTrascurrido = 0
        this.estado = "reproduciendo"

        //4. Mostrar cancion que se esta reproduciendo
        console.log(`Reproduciendo:▶️ "${cancion.titulo}" - ${cancion.banda} (${cancion.album})`)
    },

    //2do Metodo pausar la cancion
    pause(){
        if(this.estado !== "reproduciendo"){
            console.log("No hay nada reproduciendo")
            return
        }
        this.estado = "pausado"
        console.log(`⏸️ pausado en ${this.tiempoTrascurrido}s: ${this.cancionActual.titulo}`)
    },

    //3er Metodo continuar despues de pausar
    resume(){
        if(this.estado !== "pausado"){
            console.log("El reproductor no esta pausado")
            return
        }
        this.estado = "reproduciendo"
        console.log(`▶️Reanudando: ${this.cancionActual.titulo}`)
    },

    //4to Detener la reproduccion
    stop(){
        if(!this.cancionActual){
            console.log("Ya esta detenido")
            return
        }
        console.log(`⏹️ Detenido: ${this.cancionActual.titulo}`)
        this.cancionActual = null
        this.tiempoTrascurrido = 0
        this.estado = "detenido"
    },



    mostrarEstado(){
        if(!this.cancionActual){
            console.log("[Reproductor detenido - sin cancion]")
            return
        }
        const cA = this.cancionActual
        const min = Math.floor(this.tiempoTrascurrido/60)
        const seg = this.tiempoTrascurrido %60
        const minTotal = Math.floor(cA.duracion/60)
        const segTotal = cA.duracion%60

        console.log(`[${this.estado.toUpperCase()}] ${cA.titulo} - ${cA.banda}`)
        console.log(`  ${min}:${String(seg).padStart(2, "0")} / ${minTotal}:${String(segTotal).padStart(2, "0")}  | Vol: ${this.volumen}`);
    }

}






//COMANDOS DE PRUEBA

spunchify.play(31)
spunchify.pause()
spunchify.pause()
spunchify.resume()
spunchify.stop()
spunchify.pause()



//spunchify.mostrarEstado()

