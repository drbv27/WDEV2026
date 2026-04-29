//MINI CALCULADORA INTERACTIVA

//Pedir los datos al usuario
const numero1 = prompt("Ingresa el primer numero:")
const numero2 = prompt("Ingresa el segundo numero:")

//Ojo: prompt me devuelve todo en strings, hay que convertir a numero
const n1 = Number(numero1)
const n2 = Number(numero2)

//hagamois la 4 operaciones basicas

const suma = n1+n2
const resta = n1-n2
const multiplicacion = n1*n2
const division = n1/n2

//mostrar el resultado de 2 maneras (no es necesario hacerlo de las 2 maneras)
alert(`Resultados: ${n1} + ${n2} = ${suma} 
    ${n1} - ${n2} = ${resta}
    ${n1} * ${n2} = ${multiplicacion}
    ${n1} / ${n2} = ${division}
    `)


console.log("Primer numero:", n1, "typeof:", typeof n1);
console.log("Segundo numero:", n2, "typeof:", typeof n2);
console.table({ suma, resta, multiplicacion, division });