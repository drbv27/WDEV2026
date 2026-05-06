//Devolver valores   - return

//Una funcion que IMPRIME en consola pero no devuelve nada
function sumarYImprimir(a,b){
    console.log(a+b)
}

sumarYImprimir(4,5)

const resultado1 = sumarYImprimir(3,7)
console.log(resultado1+1)

//Funcion que DEVUELVE el resultado, NO IMPRIME

function sumar(a,b){
    return (a+b)
}

const resultado = sumar(9,1)
console.log(resultado+1)

//el return termina la funcion

function clasificarNumero(numero){
    if(numero > 0){
        return "positivo"
    }
    if(numero < 0){
        return "negativo"
    }
    return "cero"
}

const numero1 = clasificarNumero(27)
/* const numero2 = clasificarNumero(-50)
const numero3 = clasificarNumero(0) */

console.log(numero1)
/* console.log(numero2)
console.log(numero3) */

//combinar funciones

function celciusAFahrenheit(c){
    return (c*9/5)+32
}

function descripcionTemperatura(c){
    const f = celciusAFahrenheit(c)
    
    if(f < 32) return "Frio"
    if(f < 80) return "Templado"

    return "Caluroso"
}

console.log(descripcionTemperatura(20))
console.log(descripcionTemperatura(-5))
console.log(descripcionTemperatura(35))

//SCOPE global y local

//variables globales

const nombreApp = "My App" //global

function mostrar(){
    console.log(nombreApp)
}

mostrar()

//variables locales
 function calcular(){
    const resultadito = 42
    console.log(resultadito)
 }

 calcular()
 //console.log(resultadito)

 //porque es bueno
 function funcionA(){
    const dato = "Secreto A"
 }
 function funcionB(){
    const dato = "Secreto B"
 }

 //LOS PARAMETROS TAMBIEN SON DE SCOPE LOCAL
 function multiplicar (x,y){
    return x*y
 }

 console.log(multiplicar(3,7))
 /* console.log(x) */

 //acceso jerarquico

 const global = "soy global"

 function externa(){
    const local = "soy externa"

    function interna(){
        console.log(global)
        console.log(local)
    }

    interna()
 }

 externa()
 