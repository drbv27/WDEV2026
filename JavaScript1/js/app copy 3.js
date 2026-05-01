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

//Metodos de Extraccion
//no olvidar que la sintaxis de los metodos es
// .metodo(parametros)
const texto3 = "Javascript"
//slice   extrae una porcion de textp
console.log(texto3.slice(0,4))
console.log(texto3.slice(4))
console.log(texto3.slice(-6))
console.log(texto3.slice(-6,-3))

//split   divide en string en un array
const frutas ='manzana pera uva banana sandia'
const frutasArray = frutas.split(" ")
console.log(frutasArray)
const marcas = "Suzuki,Toyota,Honda,Subaru"
console.log(marcas.split(","))
const palabra3 = "Hola"
console.log(palabra3.split(""))

//replace y replaceAll
const slogan = "Me gusta Java. Java es genial"
console.log(slogan)
console.log(slogan.replace("Java","JS"))
console.log(slogan.replaceAll("Java","JavaScript"))

//mini ejercicio
const miEmail = "drbv27@gmail.com"
//1. Sacar la parte antes del @ (usuario)
//2. Sacar la parte despues de la arroba (dominio)
//3. Saber cuantos puntos tiene el dominio
//pista indexOf y slice split y length

const arroba = miEmail.indexOf('@')
console.log(arroba)
const elUsuario = miEmail.slice(0,arroba)
console.log(elUsuario)
const elDominio = miEmail.slice(arroba+1)
console.log(elDominio)
const puntos = elDominio.split('.').length-1
console.log(puntos)

//TEMPLATE LITERALS
//Interpolacion basica template strings
const elNombre = "Karina"
console.log(`Hola: ${elNombre}`) 

//multilinea
const carta = `Estimad@ ${elNombre},

Le escribimos para informarle que su pedido
ha sido enviado y llegara en 3 dias habiles

saludos,
El equipo de ventas
`
console.log(carta)

//evaluar expresiones dentro de ellas

const a = 5
const b = 3

console.log(`La suma de ${a}+${b} es igual a:${a+b}`)
console.log(`El doble de ${a} es ${a*2}`)

//caso de uso real generando html

const producto = 'Laptop'
const marca = "Asus"
const precio = 1950
const enStock = false


const html = `
<div class="card">
    <h3>${producto} - ${marca}</h3>
    <p>Precio: ${precio}</p>
    <p>${enStock ? "Disponible" : "Agotado"}</p>
</div>
`

console.log(html)

//Practica
//construir paso a paso un programa que limpia y formatea
//texto del usuario
//0.pedir nombre
let nombreInput = prompt("Ingresa tu nombre completo:")

//1.Eliminar espacios vacios inicio y final
nombreInput = nombreInput.trim()
//2.Convertir todo a minusculas para normalizar
const nombreNormalizado = nombreInput.toLowerCase()
//3.Separar las palabras en un array
const palabras = nombreNormalizado.split(" ")
//4.Mostrar la informacion
//nombre completo original
//nombre completo en minusculas
//cantidad de palabras que componene el nombre
//longitud total - cantidad de caracters
//mostrar solo las iniciales en mayusculas

const informacion =`
Nombre Original: ${nombreInput}
Nomalizado minusculas: ${nombreNormalizado}
Cantidad de palabras: ${palabras.length}
Total Caracteres: ${nombreNormalizado.length}
Iniciales: ${palabras[0][0].toUpperCase()}
`
console.log(informacion)

/* Construir paso a paso:
Pedir input.
Aplicar trim.
Validar largo > 0.
Aplicar toLowerCase.
Hacer split(" ").
Generar reporte con template literal.
Calcular iniciales 
(mostrar como acceder a [0] de cada palabra). 
*/