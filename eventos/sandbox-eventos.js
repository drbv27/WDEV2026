// =============================================================
// SANDBOX DE EVENTOS - Clase 9
// =============================================================
// Vamos a construir este archivo en clase, una zona a la vez.
// La guia (guia-clase-09-eventos.md) indica que escribir en cada paso.
//
// REGLA: cada vez que cambies algo, GUARDA y recarga el navegador
// con F5 para ver el resultado.
// =============================================================

console.log("sandbox-eventos.js cargado - listo para escribir codigo!");
const d = document

// =============================================================
// ZONA 1: target vs currentTarget
// =============================================================
const caja = d.getElementById("caja-anidada")
const logZ1 = d.getElementById("log-z1")

caja.addEventListener( "click",(e)=>{
    console.log("evento: ",e)
    console.log("Type: ",e.type)
    console.log("Target: ",e.target)
    console.log("currentTarget: ",e.currentTarget)

    const linea = d.createElement("div")
    linea.textContent=
    `target = <${e.target.tagName}> / currentTarget = <${e.currentTarget.tagName}>`
    logZ1.prepend(linea)
} )


// =============================================================
// ZONA 2: mouse basico (click, dblclick, contextmenu, mousedown/up)
// =============================================================
const logZ2 = d.getElementById("log-z2")
function logZ2Msg(msg){
    const divm = d.createElement("div")
    divm.textContent = msg
    logZ2.prepend(divm)
}

//Capturamos el "single click"
d.getElementById("btn-click")
    .addEventListener("click",()=>{
        console.log("Diste Click")
        logZ2Msg("Diste Click sencillo")
    })

//Capturamos el double click
d.getElementById("btn-dblclick")
    .addEventListener("dblclick",()=>{
        //uds colocan el clg
        logZ2Msg("Diste doble Click")
    })

//Dtectar menu contextual - click derecho
d.getElementById("btn-derecho")
    .addEventListener("contextmenu",(e)=>{
        e.preventDefault()
        logZ2Msg("CONTEXTMENU (click derecho interceptado)")
    })

//Detectar Mouse Down y Mouse
d.getElementById("btn-down-up")
    .addEventListener("mousedown",()=>{
        logZ2Msg("mousedown")
    })
d.getElementById("btn-down-up")
    .addEventListener("mouseup",()=>{
        logZ2Msg("mouseup")
    })


// =============================================================
// ZONA 3: hover (mouseenter/leave vs mouseover/out)
// =============================================================



// =============================================================
// ZONA 4: coordenadas del mouse (mousemove)
// =============================================================



// =============================================================
// ZONA 5: teclado (keydown, event.key, modificadores)
// =============================================================



// =============================================================
// ZONA 6: focus / blur
// =============================================================



// =============================================================
// ZONA 7: formulario (submit + preventDefault, input vs change)
// =============================================================



// =============================================================
// ZONA 8: scroll
// =============================================================



// =============================================================
// ZONA 9: resize y eventos globales
// =============================================================



// =============================================================
// ZONA 10: event bubbling
// =============================================================



// =============================================================
// ZONA 11: event delegation
// =============================================================
