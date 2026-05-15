const banda = {
    nombre:"Guns and Roses",
    paisOrigen:"USA",
    anioFormacion:1985,
    activa:true,
    miembros:["Axl Rose","Slash","Duff McKagan"],
    albumes:[
        {titulo:"Appetite for destruction",anio:1987,ventaMillones:30},
        {titulo:"Use your illusion I",anio:1991,ventaMillones:18},
        {titulo:"Use your illusion II",anio:1991,ventaMillones:18},
    ],
    presentarse(){
        console.log(`Somos ${this.nombre} de ${this.paisOrigen} formados en ${this.anioFormacion}`)
    },
    aniosActivos(){
        const ahora = 2026;
        return ahora-this.anioFormacion
    },
    listarMiembros(){
        console.log(`Miembros de: ${this.nombre}`)
        for (const miembro of this.miembros){
            console.log(` - ${miembro}`)
        }
    }
    //un metodo para mostrar total de ventas
    //mostrar album mas vendido
    
}

banda.presentarse()
console.log(banda.aniosActivos())
banda.listarMiembros()

/* console.log(banda) */

//metodo presentarse
/* banda.presentarse = function(){
    console.log(`Somos ${this.nombre} de ${this.paisOrigen} formados en ${this.anioFormacion}`)
}
banda.nombre="Aerosmith"
banda.nombre="Guns and roses"
banda.presentarse() */