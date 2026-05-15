//Funcion suelta vs un metodo

//antes funcion
/* const persona = { 
                nombre:"Martin",
                edad:25
                }

function saludarPersona(p){
    console.log(`Hola soy ${p.nombre} y tengo ${p.edad} anios`)
}

saludarPersona(persona) */

//ahora metodo

/* const persona = {
    nombre:"Martin",
    edad:25,
    saludar:function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} anios`)
    }
}

persona.saludar() */

//sintaxis corta 
const persona = {
    nombre:"Martin",
    edad:25,
    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} anios`)
    },
    cumplirAnios(){
        this.edad = this.edad+1;
        console.log(`Feliz cumpleanios ahora tengo ${this.edad}`)
    }
}

persona.saludar()
persona.cumplirAnios()

//que es this
//this se usa mucho para modificar el propio objeto

/* const contador = {
    valor:0,
    incrementar(){
        this.valor = this.valor+1;
    },
    mostrar(){
        console.log(`Contador: ${this.valor}`)
    }
}

contador.mostrar()
contador.incrementar()
contador.mostrar()
contador.incrementar()
contador.mostrar()
contador.incrementar()
contador.mostrar() */

//un metodo puede lla a otro metodo del mismo objeto

const contador = {
    valor:0,
    incrementar(){
        this.valor++;
        this.mostrar()
    },
    mostrar:function(){
        console.log(`Contador: ${this.valor}`)
    }
}

contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()

/* const people = {
    nombre:"Ana",
    saludar: ()=>{
        console.log(`Hola soy ${this.nombre}`)
    }
} */

//esto no funciona,