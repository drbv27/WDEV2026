//expresion de funcion o function expression

//una funcion declarada es:
function saludarD(nombre){
    return `Hola ${nombre}`
}

//hagamos lo mismo con la funcion expresada

const saludarE = function(nombre){
    return `Hola ${nombre}` 
}

//Las 2 se invocan igual
console.log(saludarD("Diego"))
console.log(saludarE("Diego"))


//DIFERENCIAS ENTRE function declaration y function expression
//1. Hoisting

//la funcion declarada se hoistea
hablar()

function hablar(){
    console.log("Hablando...")
}

//la funcion expresada NO se hoistea
/* hablar2() */
const hablar2 = function(){
    console.log("Hablando 2...")
}

//ARROW FUNCTIONS
//SINTAXIS BASICA

const saluditoE = function(nombre){
    return `Hola ${nombre}`
}

const saludito = (nombre) => {
    return `Hola ${nombre}`
}
//reglas de simplificacion
//1. si el cuerpo de la funcion es una sola expresion
//podemos quitar el return y las llaves....
//eso lo llamamos return implicito
const saludito2 = (nombre) => `Hola ${nombre}`
//2 si la funcion solo tiene 1 parametro puedo eliminar los
//parenetesis
const saludito3 = nombre => `Hola ${nombre}`

//ejemplos

const esEmail = function(email){
    return email.includes("@") && email.includes('.')
}

const esEmailValido = email => email.includes("@") && email.includes('.')

// Funcion para capitalizar
const capitalizar = (palabra) => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();

// Funcion para clasificar edad
const clasificarEdad = (edad) => {
    if (edad < 13) return "nino";
    if (edad < 18) return "adolescente";
    if (edad < 60) return "adulto";
    return "adulto mayor";
};

//pruebas
console.log(esEmailValido("diego@email.com"))
console.log(capitalizar("DIEGO"))
console.log(clasificarEdad(25))
