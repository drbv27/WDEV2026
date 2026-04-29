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

//OPERADORES ARITMETICOS

//suma +
const suma = 5+3
//multiplicacion *
const multiplicacion = 7*3
//resta -
const resta = 15-6
//division /
const division = 49/7
//modulo %
const modulo = 10%3
//potencia **
const potencia = 3**3


console.log(potencia)


//Cooncatenacion de Strings
//hay 2 maneras de concatenar strings

const nombreCompleto = "Diego Bonilla"
const profesion = "Fullstack Developer"

const saludo2 = nombreCompleto + " " + "es" + " " + profesion

console.log(saludo2)

//template strings
const saludo3 = `${nombreCompleto} es ${profesion}`
console.log(saludo3)

//Operadores de asignacion
let y = 10;
console.log(y)

y += 5; // y=y+5 ->15
y -= 3; // y = y-3
y *= 2;
y /= 4;
y **=2;

console.log(y)

//Incrementos y decrementos
let contador =0;
contador++; //suma 1, es igual que si hiciera contador = contador +1
contador--; //resta 1, es igual que si hicera contador = contador -1


//Operaciones de comparacion
//su resultado siempre es un booleano

console.log(5 > 2);
console.log(10 < 7);
console.log(5 >= 5);
console.log(5 <= 3);


//IGUALDADES , ESTO ES MUY IMPORTANTE
console.log(5 == "5"); //que igualdad laxa porque convierte tipos
console.log(5 === "5"); //igualdad estricta compara tipos


console.log(0 === false);        // true
console.log("" === false);       // true
console.log(null === undefined); // true
console.log([] == false);       // true
console.log("1" === 1);          // true


//operadores logicos
//AND && , Aqui todos los unidos por  && deben ser true
//para que el resultado sea true todos deben ser verdaderos
//el resultado es falso si al menos hay uno falso

const edadm = 21;
const tienePermiso = true

console.log(edad >= 18 && tienePermiso)

// a && b  -> resultado
// f && f  f 
// f && v  f
// v && f  f
// v && v  v

//OR || el resultado es falso si y solo si todos son falsos
//o el resultado es verdadero si al menos uno es verdadero
// a || b  -> resultado
// f || f   f
// f || v   v
// v || f   v
// v || v   v


//NOT !
//EL NOT CAMBIA DE TRUE A FALSE Y VICEBERSA

console.log(!true)
console.log(! (5>3) )


//ejemplo realista

const edad3 = 15
const tieneCedula = true
const estaAcompanado = true

const puedeEntrar = (edad3 >18) && tieneCedula
console.log(`Puede entrar al bar? ${puedeEntrar}`)

const entradaEspecial= (edad3 <18) && tieneCedula && estaAcompanado
console.log(`Entrada especial con acompanate? ${entradaEspecial}`)


//Conversion de tipos
//conversion implicita JS lo hace por nosotros

console.log("7" + 1) //numero se convierte en string
console.log("7" - 1) //string se vuelve numero
console.log("7"*"2") //vuelve los 2 string
console.log(true + 1) //true se vuelve 1

//conversion explicita
//A numero
const texto = "56.76"
const numero = Number(texto)
const numero2 = parseInt("53.8")
const numero3 = parseFloat("53.8")
const numero4 = +"78.5"

console.log(texto)
console.log(numero)
console.log(numero2)
console.log(numero3)
console.log(numero4)

//a string
const nu = 91
const texto2 = String(nu)
const texto3 = nu.toString()
const texto4 = `${nu}`

console.log(texto2)
console.log(texto3)
console.log(texto4)


