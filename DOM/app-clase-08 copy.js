//con document accedemos a toda la representacion del html
//es decir al DOM

console.log(document) //asi puedo ver todo el DOM
const d = document

//Selectores basicos
//1. getElementById

const titulo = document.getElementById("titulo-principal")
console.log(titulo)
console.log(titulo.textContent)
//solo devuleve un unico elemento ya que el ID DEBE de ser unico
//Es el selector mas viejo pero sigue siendo util

//2.getElementsByClassName
 const items = document.getElementsByClassName("item")
 console.log(items)

 //3.getElementsByTagName
 const todosLosLi = d.getElementsByTagName("li")
 const todosLosP = d.getElementsByTagName("p")

 console.log(todosLosLi)
 console.log(todosLosP)

 //4. lo que nos falta entender
 //los htmlCollection NO son Arrays

 //si por ejemplo
 //quisiera hacer 
/*  items.forEach(element => {
    console.log(element)
 }); */

 //hay varias soluciones
 //A. Solucion de spread operator
 /* [...items].forEach(item => console.log(item)) */

 //B.Array.from
 Array.from(items).forEach(item=>console.log(item))

 //C. el for clasico
 for(let i=0; i<items.length; i++){
    console.log(items[i])
 }

 //5.La forma de seleccionar moderna
 //querySelector
 const titulo2 = d.querySelector("#titulo-principal") //por id
 console.log(titulo2)
 const item2 = d.querySelector(".item") //por clase solo el 1ro
 console.log(item2)
 const parrafo = d.querySelector("p") //por etiqueta solo la primera
 console.log(parrafo)
 const compuesto = d.querySelector("ul li.activo") //css compuesto
 console.log(compuesto)
 const porAtributo = d.querySelector("input[type='text']")
 console.log(porAtributo)

 //6. Lo mismo que que query selector pero TODOS los que cumplan
 const items2 = d.querySelectorAll(".item")
 console.log(items2)

 //Tabla comparativa

//Quiero            Clasico                     querySelecto
//por id            getElementById("x")         querySelector("#x")
//por clase         getElementsByClassName("x") querySelector(".x")
//por etiqueta      getElementsByTagName("x")   querySelector("x")
//compuestos        imposible                   querySelector(" ul li.activo")

//Mini practica: SELECCIONAR
//1. el titulo principal
const titulo3 = d.querySelector("h1")
console.log(titulo3)
//2. Averiguar cuantos botones hay en la pagina
const botones = d.querySelectorAll("button")
console.log(botones.length)
//3. El primer item de la lista de canciones
const primerItem = d.querySelector(".lista-canciones li")
console.log(primerItem)
//4. Todos los INPUTS de tipo texto
const inputsTexto = d.querySelectorAll("input[type='text']")
console.log(inputsTexto)
//5. El segundo <li> de la primera lista
const segundo = d.querySelectorAll(".lista-canciones li")[1]
console.log(segundo)

//MEGA PRACTICA Manipulacion del DOM desde JS

//1.MODIFICAR CONTENIDO
//1.1 Las 3 formas
const titulo4 = d.querySelector("h1")
//1.1.1 textContent: cambia el texto e ignora el html
titulo4.textContent = "Manipulando el DOM con JS"
/* console.log(titulo4) */
//titulo4.textContent = "<b>Hola</b>" //SE VE LITERAL
/* console.log(titulo4) */

//2. innerHTML: interpreta el HTML
titulo4.innerHTML = "<b>Hola como estas?</b>"

//3. value: SOLO para inputs, textarea, select
/* const input = d.querySelector("#mi-input")
console.log(input.value)
input.value = "texto programatico" */

//2.Cuando usar cada uno
//cambiar texto (parrafo, titulo etc)       textContent
//insertar nuevo html(o etiquetas dentro)   innerHTML
//Leer/escribir el valor de un input        .value

//3. Cuidado con innerHTML y datos del usuario
//MAL: si "mensaje" viene del usuario, podria inyectar codigo malicioso
/* const mensaje = inputUsuario.value
contenedor.innerHTML = mensaje */
//BIEN: para texto del usuario siempre textcontent
/* contenedor.textContent = mensaje */

// ---ATRIBUTOS Y classList---
//1. Leer/cambiar atributos
//leer
/* img.getAttribute("src")    //logo.png
img.getAttribute("alt") */

//escribir
/* img.setAttribute("src","otraImagen.png")
img.setAttribute("alt","Nueva descripcion") */

//eliminar
/* img.removeAttribute("alt") */

//atajo muchos atributos se accede como propiedad
/* img.src = "unaimagenmas.png"
img.id = "logo" */


//classList el mejor amigo del frontend

/* const caja = d.querySelector(".caja")
caja.classList.add("activo")
caja.classList.remove("oculto")
caja.classList.toggle("seleccion") //si esta la quita sino la agrega
caja.classList.toggle("seleccion") //si esta la quita sino la agrega
caja.classList.contains("activo")
console.log(caja) */


//estilos en linea

/* const caja = d.querySelector(".caja")
caja.classList.remove("oculto")
caja.style.backgroundColor="tomato"
caja.style.color = "white"
caja.style.padding = "20px"
caja.style.borderRadius = "8px" */


//ejemplos
//background-color -> backgroundColor
//font-size -> fontSize

//Ejemplo combinado: barra de progreso

/* const barra = d.querySelector(".progreso")

function actualizarBarra(porcentaje){
    barra.style.width = `${porcentaje}%`
    barra.textContent = `${porcentaje}%`
    if(porcentaje >= 80){
        barra.classList.add("casi-completado")
    }
}

actualizarBarra(30)
actualizarBarra(50) */
/* actualizarBarra(85) */

//Crear elementos en el DOM
//3 pasos
//PASO 1: Crear (existe en memoria pero no se va a ver en el DOM)
const tarjeta = d.createElement("div")

//PASO 2 Configurar (clases, texto, atributos, estilos)
tarjeta.classList.add("tarjeta")
tarjeta.textContent="Soy una nueva tarjeta"
tarjeta.dataset.id=42

//PASO 3 Insertar lo creamos en el DOM
const contenedor = d.querySelector("#grid-canciones")
contenedor.appendChild(tarjeta)

//mini ejercicio
const cancionNueva = d.createElement("li")
cancionNueva.classList.add("item")
cancionNueva.textContent="Heaven in your eyes"

const listaCanciones = d.querySelector("#lista-demo")
listaCanciones.appendChild(cancionNueva)

//createElement = innerHTML el mejor combo
const tarjeta2 = d.createElement("div")
tarjeta2.classList.add("tarjeta")
tarjeta2.innerHTML =`
 <h3>Bohemian Rhapsody</h3>
 <p class="banda">Queen</p>
 <p class="anio">1975</p>
`
contenedor.appendChild(tarjeta2)

//nuevos metodos para insertar append prepend before after
//las 4 posiciones

const padre = d.querySelector("#lista-demo")
const referencia = document.querySelector("#lista-demo .activo")

const nuevo = d.createElement("li")
nuevo.textContent="Nuevo"
const nuevo2 = d.createElement("li")
nuevo2.textContent="Nuevo2"

padre.append(nuevo,nuevo2)  //al final del padre
/* padre.prepend(nuevo) //al principio

referencia.before(nuevo)
referencia.after(nuevo) */

//mini ejercicio
//1.Crear un  <li></li>  nuevo con el texto
// "Satirway to Heaven"
//2.Inseratrla al INICIO de #lista-demo
//3.Ahora crea otro li con "Hotel California"
//ponlo JUSTO DESPUES del item con calse activo