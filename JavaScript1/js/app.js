//como crear un string en una variable
const simple ='Hola'
const doble = "Mundo"
const backtick = `Template String`

const palabra = "Javascript"
const palabra2 = " Diego Bonilla "
const userName = "Peter"
const lastName = "Gabriel"
 //metodos de string
 //length

 console.log(palabra.length)
 console.log(palabra2.length)

 //acceder al primer caracter
 const lastChar = palabra[palabra.length - 1]
 console.log(lastChar)

 console.log(palabra.charAt(0))

 console.log(`Bienvenido: ${userName.charAt(0)}${lastName.charAt(0)}`)

 //mini ejercicio

 const miNombre = "coloquen su nombre"
 // Imprimir:
// 1. La longitud del miNombre
// 2. El primer caracter
// 3. El ultimo caracter
// 4. La letra en la posicion 6


//METODOS DE BUSQUEDA Y TRANSFORMACION

//transformar el texto
//transformar a mayusculas
console.log(palabra2)
console.log(palabra2.toUpperCase())//convierte todo a mayusq
console.log(palabra2.toLowerCase())//convierte todo a minusq
console.log(palabra2.trimStart())
console.log(palabra2.trimEnd())
console.log(palabra2.trim())

//los metodos se pueden encadenar
const input = "   DIEGO bonilla    "
const limpio = input.trim().toLowerCase()

console.log(input)
console.log(limpio)

//busqueda
const frase = "Aprendiendo JavaScript en 2026";

//includes: devuelve true/false si encuentra el subtexto
console.log(frase.includes("Python"))
console.log(frase.includes("2026"))

//indexOf devuelve la posicion o -1 sino existe
console.log(frase.indexOf("Python"))
console.log(frase.indexOf("2026"))

//starsWith y EndsWith

console.log(frase.startsWith("Aprendiendo J"))
console.log(frase.endsWith("en 2026"))


//ejemplo util

const email = "drbv27@gmail.com"

if(email.includes("@") && email.includes(".")){
    console.log("Parece un email valido")
}