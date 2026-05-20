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