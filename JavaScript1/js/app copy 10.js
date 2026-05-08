//ARRAYS
//ES UNA VARIABLE QUE GUARDA UNA LISTA DE VALORES

//CREAR UN ARRAY

//se pueden crear vacios, solo es necesario tener los []
const vacio = []

//creemos unos con valores
const frutas = ["manzana","uva","pera","sandia"]
const numeros = [1,2,3,4,5]
const mezclado = [1,"hola",true,null,3.14]//puedo mezclar tipos

console.log(frutas)
console.log(numeros)
console.log(mezclado)

//para acceder a los valores del array, lo hacemos 
//por el indice

console.log(frutas[1])
console.log(frutas[3])

//mutables a diferencia de los strings
frutas[0] = "pitaya"
console.log(frutas)

//esto da error
/* frutas = ["mango","melon"] */

//veamos los metodos mas basicos (mutan el array)
//1. length
const edades = [20,35,11,48,61]
console.log(edades.length)

//2.acceder a el ultimo valor de un array
const ultimoValor = edades[edades.length-1]

console.log(ultimoValor)

//3.agregar elementos al final del array
//.push()

frutas.push("banano")
console.log(frutas)
frutas.push("mango")
console.log(frutas)
console.log(frutas.length)

//4.quitar elementos al final
//.pop()

frutas.pop()
frutas.pop()
frutas.pop()
console.log(frutas)

//ejemplo simulado
const cola = []
console.log(cola)
cola.push("Diego")
console.log(cola)
cola.push("Alberto")
console.log(cola)
cola.push("Karina")
console.log(cola)
cola.push("Luis")
console.log(cola)

/* console.log(`Atendido: ${cola.pop()}`)
console.log(cola) */

//5. anadir y borrar al principio
//5a. quitar del inicio 
//.shift()

cola.shift()
console.log(cola)
cola.shift()
console.log(cola)

//5b adicionar al principio
//unshift()
frutas.unshift("sandia")
console.log(frutas)

//crear un array vacio de cantones
//van a adcionar 5 cantones con push
//luego van a eliminar el ultimo
//luego van a eliminar el primero 
//luego van a adicionar uno diferente al principio

//Otros metodos de array
//6.  .includes()   me da verdadero o falso
//si el valor esta o no en el array
const existeUva = frutas.includes("uva")
console.log(existeUva)

console.log(frutas.includes("mango"))
console.log(frutas.includes(57))

//7.indexOf()
//es similar a includes pero mas util porque 
//no devuelve la posicion del elemento si lo encuentra
//sino lo encuentra nos devuelve -1

console.log(frutas.indexOf("uva"))
console.log(frutas.indexOf("mango"))

const lenguajes = ["html","css"]
const nuevoLenguaje = "javascript"

if (!lenguajes.includes(nuevoLenguaje)){
    lenguajes.push(nuevoLenguaje)
}

console.log(lenguajes)

//8. slice y splice
//8a .slice()  extrae valores sin modificar

const numeritos = [10,20,30,40,50]

const corte = numeritos.slice(1,4)
console.log(corte)

//splice() hace lo mismo pero si modifica

//como iterar un array
const nombres = ["Diego","Mateo","Sofia","Juan"]

//forma antigua
for(let i=0 ; i<nombres.length ; i++){
    console.log(`${i}: ${nombres[i]}`)
}

//una forma mas moderna es con for of

for(const nombre of nombres){
    console.log(nombre)
}

//ejemplo filtrar mayores de edad

const edades2 = [15,22,17,30,12,45]
console.log(edades2)
const adultos = []

for(const edad of edades2){
    if(edad>=18){
        adultos.push(edad)
    }
}
console.log(adultos)