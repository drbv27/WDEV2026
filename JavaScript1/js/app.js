//Condicionales
//0. If -> si
//sintaxis
/*

if(condicion){
    //codigo si condicion se cumple
}

*/
//ejemplo
const dinero = 700000
if(dinero>=1500000){
    console.log("me compro el ferrari")
}

//1. if - else basico

/*

sintaxis:

if(condicion){
    //codigo si condicion se cumple
}else{
    //codigo si no se cumple
}
*/
const edad = 15
if (edad >= 18) {
    console.log("Eres mayor de edad, puedes votar.")
} else {
    console.log("Eres menor de edad,No puedes votar.")
}

//2.valores Truthy/Falsy
/* const nombre = prompt("como te llamas?") */


/* if(nombre){
    console.log(`Hola ${nombre}`)
}else{
    console.log(`No escribiste nada`)
} */

//3. if else if - multiples condiciones
const nota = 75

if (nota>=90) {
    console.log("Es una nota Excelente!!!")
} else if(nota>=70) {
    console.log("Tu nota es buena")
}else if(nota>=60){
    console.log("Tu nota es aceptable")
}else{
    console.log("Reprobaste")
}

//combinando condicionales con strings

const usuario = "vendedor"

if (usuario === "admin") {
    console.log("Acceso total.");
} else if (usuario === "editor") {
    console.log("Acceso a edicion.");
} else if (usuario === "lector") {
    console.log("Acceso de solo lectura.");
} else {
    console.log("Tipo de usuario desconocido.");
}

//4.Operador Ternario
//sintaxis: condicion ? que hace si es true : que hace si es false

const edad2 = 11
const tipo = edad2 >=18 ? "Adulto" : "menor"
/*equivalente co if else
let tipo
if(edad >= 18){
    tipo = "Adulto"
}else{
    tipo="menor"
    }
    */
console.log(tipo)

//casos donde brilla el operador ternario
//saludo dinamico
const hora = 9
const saludo = hora<12 ? "Buenos dias" : "Buenas tardes"

console.log(saludo)

//pluralizar
const n = 9
const mensaje = `Tienes ${n} ${n===1 ? "Mensaje":"Mensajes"}`
console.log(mensaje)

//valores por defecto
const nombreUsuario = ""
const mostrar = nombreUsuario ? nombreUsuario : "Anonimo"
console.log(mostrar)

//Dentro de un template literal
const edad3 = 7
console.log(`Eres ${edad3 >= 18 ? "mayor" : "menor"} de edad`)

//cuando no usar un ternario
//en anidaciones, se puede en teoria pero es una pesima 
//practica

//mal:
const cat = edad < 13 ? "nino" : edad < 18 ?"adolescente":"adulto"

//5.switch para muchos casos de decision
//cuando usarlo cuando haya una variable con muchos
//casos especificos

const dia = 7

switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
    case 7:
        console.log("Fin de semana")
        break;

    default:
        console.log("Dia no valido")
        break;
}