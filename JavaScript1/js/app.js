//METODOS AVANZADOS EN LOS ARRAYS

//DEMOSTRACION
//crear un nuevo array con los numeros al doble
//forma vieja con for (muy ineficiente y complicada)
const numeros = [1,2,3,4,5]
const dobles = []
for(let i =0; i< numeros.length; i++){
    dobles.push(numeros[i]*2)
}

console.log(dobles)

//forma moderna con map
//sintaxis de .map()
//const nuevoArray = arrayOriginal.map(callback)
//.map(()=>{normalmente no va las llaves})
/* const dobles2 = numeros.map( (numero)=>{return numero*2} ) */
const dobles2 = numeros.map( numero => numero*2 )

console.log(dobles2)

//otro ejemplo convertir a mayusculas los nombres en un array
const nombres = ["ana","luis","marta"]
const mayusculas = nombres.map( nombre => nombre.toUpperCase() )
console.log(mayusculas)

//otro ejemplo calculando impuestos
const precios = [100,250,80,500]
const conIva = precios.map( precio => precio*1.13 )
console.log(precios)
console.log(conIva)

//intro objetos literals
//un objeto es un molde de parejas llave:valor
//que me sirven para asociar informacion de una misma cosa
const persona1 = {
    nombre:"Diego",
    edad:48,
    isMarried:true
}

//como accedo a los valores de un objeto
//la principal forma es con sitaxis de punto
//similar a un metodo

console.log(persona1.nombre)
console.log(persona1.edad)

//ejerccio
//van a tener un array con diferentes edades
//van a hacerle un map
//y a cada elemento le van a reducir la edad en 5
//luego van a mostrar el nuevo array