//PARAMETROS POR DEFECTO

//EJEMPLO DEL PROBLEMA
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

saludar()

//existen 2 soluciones
//forma antigua "LEGACY" (con if)

function saludarL(nombre){
    if(nombre===undefined){
        nombre = "amigo"
    }
    console.log(`Hola ${nombre}`)
}

saludarL("Diego")
saludarL()

//SOLUCION MODERNA Valor por defecto (default values)
const saludarE = function(nombre="amigito"){
    console.log(`Hola ${nombre}`)
}

saludarE("Ricardo")
saludarE()

//multiples parametros con default
const calcularPrecio = function(precio, descuento = 0, impuesto = 0.19){
    const conDescuento = precio - (precio*descuento)
    const total = conDescuento + (conDescuento*impuesto)
    return total
}

console.log(calcularPrecio(100)) //sin descuento , 19% IVA
console.log(calcularPrecio(100,0.1)) //10% DESCUENTO , 19%IVA
console.log(calcularPrecio(100,0.1,0.05))//10% DESCUENTO, 5% IMPUESTO

//REST PARAMETERS Y SPREAD OPERATOR ...

//REST PARAMETERS: AGRUPAR ARGUMENTOS

const sumarTodo = (...numeros)=>{
    let total = 0
    for (const n of numeros){
        total += n
    }
    return total
}

console.log(sumarTodo(1,2))
console.log(sumarTodo(1,2,3,4,5))
console.log(sumarTodo(10,20,30))

//se puede combinar parametros normales con parametros rest

const presentar = (saludo,...nombres)=>{
    for(const nombre of nombres){
        console.log(`${saludo}, ${nombre}`)
    }
}

presentar("Hola","Diego","Ana","Carlos","Mateo","Laura")

//el spread operator es para arrays
//y hace lo contrario del rest operator

const numeros = [1,2,3,4,5,6,7]
console.log(numeros)
console.log(...numeros)

//cuando usar el spread
//por ejemplo combinar arrays
const a = [1,2,3]
const b = [4,5,6]

const unido = [...a,...b]
console.log(unido)


//practica MODULAR CON FUNCIONES
// === ANTES (codigo monolitico) ===
let email = prompt("Email:");
email = email.trim().toLowerCase();

if (email.length === 0) {
    alert("Vacio");
} else if (!email.includes("@")) {
    alert("Falta @");
} else {
    const arroba = email.indexOf("@");
    const usuario = email.slice(0, arroba);
    const dominio = email.slice(arroba + 1);
    alert(`Usuario: ${usuario}, Dominio: ${dominio}`);
}

//Funcion1 . Limpiar input
const limpiar = (texto) => texto.trim().toLowerCase()
//Funcion2 Validar el email basico
const esEmailValido = (email) => {
    return email.length > 0
    && email.includes("@")
    && email.includes(".")
    && email.indexOf("@") > 0
}
//funcion3 extraer partes del email
const extraerPartes = (email) => {
    const arroba = email.indexOf('@')
    return{
        usuario: email.slice(0,arroba),
        dominio: email.slice(arroba+1)
    }
}
//clasificar proveedor gmail -> google outlook hotmal yahoo

//funcion principal orqueste todo
const procesarEmail = (emailInput) => {
    const email = limpiar(emailInput)
    if(!esEmailValido(email)){
        return "Email Invalido"
    }
    const partes = extraerPartes(email)

    return `Usuario ${partes.usuario}, Dominio:${partes.dominio}`
}

const input = prompt("Email:")
const resultado = procesarEmail(input)