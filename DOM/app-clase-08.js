//=========================================
//Referencias deL DOM
//Las guardamos al ppio una vez para no buscarlas siempre
//========================================

const d = document

const contenedor = d.querySelector("#grid-canciones")
const contador = d.querySelector("#contador")
const botones = d.querySelectorAll(".filtros button")
const buscador = d.querySelector("#buscador")





//=====================================
// Fase 0 - comprobar que el dataset esta cargado
//=====================================
console.log(`Total de canciones disponibles: ${canciones.length}`)
console.log("Primera cancion:",canciones[0])

//=====================================
//Funcion Central: Renderizar lista
//Recibe una lista de canciones y la pinta en el DOM
//eSTA ES LA unica FUNCION QUE CREA TARJETAS. Todo
//lo demas (filtros, agregar, eliminar) solo modifica
// datos y llama aqui de vuelta

function renderizar(lista){
    contenedor.innerHTML = ""
    contador.textContent = `${lista.length} canciones`

    if(lista.length===0){
        contenedor.innerHTML="<p class='vacio'>No hay canciones</p>"
    }

    for(const cancion of  lista){
        const tarjeta = d.createElement("div")
        tarjeta.classList.add("tarjeta")
        tarjeta.innerHTML = `
        <button class="btn-eliminar">X</button>
        <h3>${cancion.titulo}</h3>
        <p>${cancion.banda}</p>
        <p>${cancion.anio}</p>
        <span>${cancion.genero}</span>
        `
        contenedor.appendChild(tarjeta)
    }
}


//===================================
//Funcion central : aplicarFiltros()
//----------------------------------
//Lee el estado actual del buscador y del genero activo,
//y llama a renderizar(...) con el resultador.
//Es la "fuente" unica de verdad que se pinta
//en la pantalla

function aplicarFiltros(){
    let lista = canciones
    //console.log(lista)
    //filtro por genero(lee el boton con clase 'activo')
    const btnActivo = d.querySelector(".filtros button.activo")
    //console.log(btnActivo)
    const generoActivo = btnActivo ? btnActivo.dataset.genero : "todos";
    console.log(generoActivo)
    if(generoActivo !== "todos"){
        lista = lista.filter( c => c.genero ===generoActivo )
    }

    console.log(lista)
    //Filtro por busqueda (lee el input)
    const texto = buscador.value.toLowerCase().trim()
    if(texto){
        lista = lista.filter( c =>
            c.titulo.toLowerCase().includes(texto) ||
            c.banda.toLowerCase().includes(texto)
         )
    }

    renderizar(lista)
}

//Feature: Buscador en vivo
buscador.addEventListener("input", ()=>{
    aplicarFiltros()
} )

//feature: filtros por genero
botones.forEach( btn =>{
    btn.addEventListener("click", ()=>{
        botones.forEach(b =>b.classList.remove("activo"))
        btn.classList.add("activo")
        aplicarFiltros()
    } )
} )

aplicarFiltros()