//=========================================
//Referencias deL DOM
//Las guardamos al ppio una vez para no buscarlas siempre
//========================================

const d = document

const contenedor = d.querySelector("#grid-canciones")
const contador = d.querySelector("#contador")
const botones = d.querySelectorAll(".filtros button")
const buscador = d.querySelector("#buscador")

//Feature agregar cancion
const btnAgregar = d.querySelector("#btn-agregar")
const inputTitulo = d.querySelector("#input-titulo")
const inputBanda = d.querySelector("#input-banda")
const inputAnio = d.querySelector("#input-anio")
const inputGenero = d.querySelector("#input-genero")





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
    c//onsole.log(generoActivo)
    if(generoActivo !== "todos"){
        lista = lista.filter( c => c.genero ===generoActivo )
    }

    //console.log(lista)
    //Filtro por busqueda (lee el input)
    const texto = buscador.value.toLowerCase().trim()
    if(texto){
        lista = lista.filter( c =>
            c.titulo.toLowerCase().includes(texto) ||
            c.banda.toLowerCase().includes(texto) //aqui uds van a adicionar otros fltros ejem por anio
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

//Feature agregar canciones desde el formulario

//Patron -> leer inputs -> validar -> crear objeto
//-> push al array, -> limpiar el formulario ->
//aplicarFiltros() ... se repinta todo

btnAgregar.addEventListener("click",()=>{
    //1.Leer los valores de cada input
    const titulo = inputTitulo.value.trim()
    const banda = inputBanda.value.trim()
    const anio = Number(inputAnio.value)
    const genero = inputGenero.value

    //2.validemos minimamente
    if(!titulo || !banda){
        alert("El titulo y la banda son obligatorios")
        return
    }
    if(!anio || anio<1960 || anio >2026){
        alert("anio debe estar entre 1960 y 2026")
        return
    }

    //3.generar un id unico 
    const nuevoId = Math.max(...canciones.map(c => c.id))+1

    //4. crear el objeto nueva cancion
    const nueva = {
        id:nuevoId,
        titulo,
        banda,
        anio,
        genero,
        album:"Desconocido",
        duracion:0
    }

    //5.Agregar al array fuente

    //6.Limpiar el formulario y devolver el foco al 1er input

    //7. repintar con la nueva cancion incluida
})







aplicarFiltros()

