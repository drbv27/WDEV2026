//FUNCIONES
//El problema sin funciones
//Calcular area del 1er rectangulo
const base1 = 5
const altura1 = 3
const area1 = base1 * altura1
console.log(`Area 1: ${area1}`)
//Calcular area del 2do rectangulo
const base2 = 7
const altura2 = 4
const area2 = base2 * altura2
console.log(`Area 2: ${area2}`)
//Calcular area del 3er rectangulo
const base3 = 10
const altura3 = 6
const area3 = base3 * altura3
console.log(`Area 3: ${area3}`)
//Calcular area del 4er rectangulo
const base4 = 8
const altura4 = 2
const area4 = base4 * altura4
console.log(`Area 4: ${area4}`)
//Calcular area del 5to rectangulo
const base5 = 12
const altura5 = 3
const area5 = base5 * altura5
console.log(`Area 5: ${area5}`)

//DRY Dont Repeat Yourself

//la solucion a no repetir codigo es usar funciones
function calcularArea(base,altura){
    return base*altura
}
console.log(`Area1: ${calcularArea(5,3)}`)
console.log(`Area1: ${calcularArea(7,4)}`)
console.log(`Area1: ${calcularArea(10,6)}`)
console.log(`Area1: ${calcularArea(8,2)}`)
console.log(`Area1: ${calcularArea(12,3)}`)


//Funcion declarada
//la sintaxis

/*

function nombreDeLaFuncion(parametros){
 codigo a ejecutar
 return valor    (opcional)
}

*/
//primer ejemplo -- funcion sin parametros
//declaramos la funcion
function saludar(){
    console.log("Hola mundo")
}

//para usarla la invocamos 
saludar() //imprime Hola mundo
saludar()//otra vez imprime Hola mundo
saludar()//otra vez imprime Hola mundo
saludar()//otra vez imprime Hola mundo
saludar()//y otra vez


//funciones con parametros
function saludarA(nombre){
    console.log(`Hola: ${nombre}`)
}

saludarA("Diego")
saludarA("Sofia")
saludarA("Mario")
saludarA("Paola")

//las funciones pueden tener multiples parametros
presentarse("Abril",0.2,"Medellin")


function presentarse(nombre,edad,ciudad){
    console.log(`Hola soy ${nombre}, tengo ${edad} anios y vivo en ${ciudad}`)
}

presentarse("Diego",47,"Medellin")
presentarse("Ana",36,"Chicago")

//que pasa si faltan argumentos

saludarA()
presentarse("Juan","San Juan")

//si sobran argumentos

function suma(numero1,numero2){
    console.log(numero1+numero2)
}

suma(4,5,7,8,3)