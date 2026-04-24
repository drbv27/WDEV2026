/* console.log("Hola desde el archivo de JS externo.!!!") */
/* console.log("Mi primer archivo de JS");
console.log("Mi nombre es Diego")
console.log("Este curso de JS empieza hoy 23 de abril 2026");

alert("Hola bienvenido a JavaScript") */


/*
la sintaxis es:
        palabraReservada nombreVariable = informacion
*/

//var no lo deben usar porque se convierte siempre en variable global
var pais = "Costa Rica";
console.log(pais);

let edad = 45;
console.log(edad)

//pueden crear variable vacias
let nombre;
console.log(nombre)
//posteriormente pueden asignarle algo
nombre="Diego"
console.log(nombre)

//reasignar valores a la variable
nombre=37
console.log(nombre)

const pi = 3.141595
console.log(pi)

//no puedo crear variables con const sin inicializar
/* const kilo; */
//tampoco puedo reasignarle valores a una creada con const
/* pi = 25.06; */


//Reglas para nombrar variables
/*
En general en programacion existen 4 estilos de nombrar variables
    camelCase....empieza en minuscula y si es compuesta las demas en mayuscula
    PascalCase
    kebbah-case este no se usa en JS
    snake_case   (underscore_case) 
*/

//1. pueden tener letras numeros $, pero no empezar con numero
//2.en js las variables son CASE SENSITIVE : Edad es diferente de edad y es diferente de EDAD
//3.NO PUEDEN UTILIZAR PALABRAS RESERVADAS DE JS (let const function...etc)
//4. convencion la mas aceptada es camelCase para variables let y funciones, PascalCase o todo mayus para constantes
//5.se acpta kebbah-case pero no es tan comun
//6.usen nombres descriptivos y entendibles, no escatimen en caracteres

let nombreUsuarioAfiliado = "Diego"//camelCase

let EdadMinima = 45//PascalCase es mas normal el constantes

let contador_clicks = 56 //snake case no es muy usado

//ejemplo de malos nombres
const x = "Ana"
let n = 18

//tipos de datos en js primitivos

//1. Strings (TEXTO)

const saludo = "Hola como estas?"
const nombre2 = "Juan"
const mensaje = '"bienvenidos al Himalaya"'
//la tercera forma es usando backticks ` `
console.log(mensaje)

//2.numbers
const entero = 47
const entero2 = "47"
const decimal = 2.17
const negativo = -56
const notacionCientifica = 1e6 //1 millon

console.log(10/0)
console.log(-10/0)
console.log("first"*3)


//3.Boolean (falso/verdadero)

const esCasado = true
const isAdmin = false

//4.undefined(sin asignar)
let algunaCosa
console.log(algunaCosa)

//5.null (vacio intencional o sin asignar pero intencional)
const usuarioSeleccionado = null
console.log(usuarioSeleccionado)


//6.typeof es el operador para saber que tipo de dato tiene algo

console.log(typeof "bienvenidos")
console.log(typeof 879)
console.log(typeof true)
console.log(typeof algunaCosa)
console.log(typeof null)

//ejercicio para uds
//crear una variable con su nombre completo (nombrenla bien)
//crear otra con su edad
//crear otra con si es estudiante o no
//otra que sea su pelicula favorita (no las han decidido)
//creen otra para algo que no saben qie van a guardar

//ahora muestrenlas cada una en consola
//y luego mestren en consola el tipo de dato de cada una

