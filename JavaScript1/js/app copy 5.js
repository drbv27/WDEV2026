//Ciclos
//la forma vieja sin ciclos
/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5) */
//y asi sucesivamente
/* for (let i = 1; i<= 10; i++){
    console.log(i)
} */

//while este es el ciclo mas basico
/*
sintaxis:

while(condicion){
 codigo que se repite
 mientras la condicion se cumpla (sea true)
}

*/

/* let contador = 5

while(contador <= 20){
    console.log(`Iteracion: ${contador}`)
    // contador=contador+1  forma tradicional
    contador++ //si olvidamos colocar esto el ciclo sera infinito
} */

/* console.log("el ciclo acabo") */

//mapa mental
//  Evaluar Condicio
//    |-- si es true ejecute las instrucciones
//    |-- si es false -> salte del ciclo

//ejemplo de uso real
/* let respuesta = ""
while(respuesta !== "salir"){
    respuesta = prompt('Escribe "salir" para terminar')
} */

/* console.log("Bye bye") */

//do while, siempre se ejecuta al menos 1 vez

/*
sintaxis:

do{
 codigo a ejecutar
} while(condicion)

*/

let n = 100
while(n < 10){
    console.log("nunca se imprime")
}

//si hago lo mismo con un do while

let m = 100
do{
    console.log("se imprime al menos 1 vez")
}while(m < 10)

//ejemplo clasico de uso

/* let numero

do{
    numero = Number(prompt("Ingresa un numero de 1 a 10:"))
}while(numero<1 || numero>10) */

//el mas usado en JS es for
//usa las 3 partes que necesita un ciclo para ejecutarse
//todo en una misma linea

/*
sintaxis:

for(inicializacion, condicion, actualizacion de la var control)
   codigo a ejecutar
*/

//con while
let i = 0
while(i<5){
    console.log(`While ${i}`)
    i++
}

//con for
for(let i = 0; i<5; i++){
    console.log(`For ${i}`)
}


//mapa mental
/*
for (let i = 0;    i < 5;     i++) {
//      |          |          |
//      |          |          actualizacion (despues de cada iteracion)
//      |          condicion (se evalua antes de cada iteracion)
//      inicializacion (solo una vez al comenzar)
    console.log(i);
}

*/

//variantes
//contar de 10 a 1 descendiente

for(let i=10; i>=1; i--){
    console.log(i)
}

//hacer ciclos sobre los caracteres de un string
//i porque evoca index o iterator
/* const palabra = "javascript"
for(let i=0; i < palabra.length; i++){
    console.log(`Indice: ${i}: ${palabra[i]}`)
} */

//ejemplo tabla del 7

/* for(let i =1; i <= 10; i++){
    console.log(`7 x ${i} = ${7*i}`)
} */

//for...of
//normalmente para iterar strings


const palabra = "javascript"

for(let i=0; i < palabra.length; i++){
    console.log(`${palabra[i]}`)
}

for(const caracter of palabra){
    console.log(caracter)
}