//mini app lista de tareas

//1.Crear el array de tareas
const tareas = []

//crear las funciones
//1.Funcion para agregar tarea
/* const agregarTarea = (texto) => {
    tareas.push(texto)
} */
const agregarTarea = (texto) => {
    if(texto.trim().length ===0) return false
    tareas.push(texto.trim())
    return true
}

//funcion para eliminar tarea
const eliminarTarea = (indice) => {
    if(indice < 0 || indice >= tareas.length) return null
    return tareas.splice(indice,1)[0]
}

//funcion para mostrar tareas
const mostrarTareas = ()=>{
    if(tareas.length === 0){
        console.log("No hay tareas")
        return
    }
    console.log("------------")
    console.log(`Tienes ${tareas.length} tarea(s)`)
    for(const tarea of tareas){
        console.log(tarea)
    }
    console.log("************")
}

//funcion para buscar tareas
const buscarTarea = (palabra) =>{
    const encontradas = []
    for(const tarea of tareas){
        if(tarea.includes(palabra)){
            encontradas.push(tarea)
        }
    }
    return encontradas
}


//usarlas
agregarTarea(" Estudiar JS")
agregarTarea("Hacer el ejercicio")
agregarTarea("leer un libro")
agregarTarea(" ")


//console.log(tareas)

mostrarTareas()

const eliminada = eliminarTarea(1)
console.log(`Eliminada: ${eliminada}`)

mostrarTareas()
console.log(buscarTarea("JS"))
