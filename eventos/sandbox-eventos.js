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
d.getElementById("btn-down-up")
    .addEventListener("click",()=>{
        logZ2Msg("click")
    })


// =============================================================
// ZONA 3: hover (mouseenter/leave vs mouseover/out)
// =============================================================
const logZ3 = d.getElementById("log-z3")
function logZ3Msg(msg,color){
    const divh = d.createElement("div")
    divh.textContent = msg
    if(color) divh.style.color = color
    logZ3.prepend(divh)
}

//IZQUIERDA: mouseenter/mouseleave (No bubble una sola entrada salida)
const cajaEL=d.getElementById("caja-enter-leave")
cajaEL.addEventListener("mouseenter",()=>logZ3Msg("> ENTER(izq)","#a6e3a1"))
cajaEL.addEventListener("mouseleave",()=>logZ3Msg("> LEAVE(izq)","#f38ba8"))

//DERECHA: mouseover/mouseout (SI Bubble, disparan con cada hijo)
const cajaOO = d.getElementById("caja-over-out")
cajaOO.addEventListener("mouseover",()=>logZ3Msg("> Over(der)","#89b4fa"))
cajaOO.addEventListener("mouseout",()=>logZ3Msg("> Out(der)","#cba6f7"))


// =============================================================
// ZONA 4: coordenadas del mouse (mousemove)
// =============================================================
const zonaCoords = d.getElementById("zona-coords")
const coordsInfo = d.getElementById("zona-coords-info")
const coordsDot = d.getElementById("coords-dot")

zonaCoords.addEventListener("mousemove",(e)=>{
    const rect = zonaCoords.getBoundingClientRect()
    const offX = Math.round(e.clientX - rect.left)
    const offY = Math.round(e.clientY - rect.top)

    coordsInfo.textContent =
        `clientX=${e.clientX}  clientY=${e.clientY}  |  offsetX=${offX}  offsetY=${offY}`;

    coordsDot.style.left = offX + "px";
    coordsDot.style.top  = offY + "px";
    coordsDot.style.opacity = "1";
})

zonaCoords.addEventListener("mouseleave", () => {
    coordsInfo.textContent = "Pasa el mouse aqui adentro";
    coordsDot.style.opacity = "0";
});
// =============================================================
// ZONA 5: teclado (keydown, event.key, modificadores)
// =============================================================
const inputTeclado = d.getElementById("input-teclado")
const bigKey = d.getElementById("big-key")
const keyMeta = d.getElementById("key-meta")
const keyMods = d.querySelectorAll(".key-mod")

function renderKey(e){
    let display = e.key
    if(display ===" ") display="Space"
    if(display.length===1) display = display.toUpperCase()
    bigKey.textContent = display
    keyMeta.textContent=`key: "${e.key}" / code:"${e.code}"`

    keyMods.forEach(el => {
    const mod = el.dataset.mod;
    const activo =
        (mod === "ctrl"  && e.ctrlKey)  ||
        (mod === "shift" && e.shiftKey) ||
        (mod === "alt"   && e.altKey)   ||
        (mod === "meta"  && e.metaKey);
    el.classList.toggle("activo", activo);
});

}
inputTeclado.addEventListener("keydown",renderKey)
inputTeclado.addEventListener("keyup", () => {
    keyMods.forEach(el => el.classList.remove("activo"));
});
// =============================================================
// ZONA 6: focus / blur
// =============================================================
["focus-1", "focus-2"].forEach((id, idx) => {
    const input = document.getElementById(id);
    const estado = document.getElementById(`estado-${idx + 1}`);

    input.addEventListener("focus", () => {
        estado.textContent = "ENFOCADO";
        estado.classList.add("enfocado");
    });

    input.addEventListener("blur", () => {
        estado.textContent = "sin foco";
        estado.classList.remove("enfocado");
    });
});


// =============================================================
// ZONA 7: formulario (submit + preventDefault, input vs change)
// =============================================================
const form = d.getElementById("form-demo")
const logz7 = d.getElementById("log-z7")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const nombre = form.elements.nombre.value
    const email = form.elements.email.value

    const linea = d.createElement("div")
    linea.textContent = `Enviar: nombre=${nombre}, email=${email}`
    logz7.prepend(linea)

    form.reset()
})

//Bonus diferenciar entre input y change
form.elements.nombre.addEventListener("input",(e)=>{
    console.log("input:",e.target.value)
})

form.elements.nombre.addEventListener("change",(e)=>{
    console.log("change",e.target.value)
})

// =============================================================
// ZONA 8: scroll
// =============================================================
const zonaScroll = d.getElementById("zona-scroll")
const scrollProgress = d.getElementById("scroll-progress")
const scrollBarFill = d.getElementById("scroll-bar-fill")
const btnVolverArriba = d.getElementById("btn-volver-arriba")

zonaScroll.addEventListener("scroll",()=>{
    const max = zonaScroll.scrollHeight - zonaCoords.clientHeight
    const pct = Math.round((zonaScroll.scrollTop/max)*100)

    scrollProgress.textContent = 
    `scroll: ${Math.round(zonaScroll.scrollTop)}px / ${max}px (${pct}%)
    `
    scrollBarFill.style.width = pct + "%"
})
btnVolverArriba.addEventListener("click",()=>{
    zonaScroll.scrollTo({top:0,behavior:"smooth"})
})


// =============================================================
// ZONA 9: resize y eventos globales
// =============================================================
const resizeInfo = d.getElementById("zona-resize-info")

function actualizarResize(){
    resizeInfo.textContent = 
    `Ventana: ${window.innerWidth}px X ${window.innerHeight}`
}

window.addEventListener("resize",actualizarResize)

actualizarResize()



// =============================================================
// ZONA 10: event bubbling
// =============================================================
const logz10 = d.getElementById("log-z10")
const abuelo = d.getElementById("burb-abuelo")
const padre = d.getElementById("burb-padre")
const hijo = d.getElementById("burb-hijo")

function logZ10Msg(msg){
    const divbu = d.createElement("div")
    divbu.textContent = msg
    logz10.prepend(divbu)
}

function pulsar(el){
    el.classList.remove("activo")
    void el.offsetWidth
    el.classList.add("activo")
}


abuelo.addEventListener("click",(e)=>{
    logZ10Msg("3. listener de Abuelo")
    pulsar(e.currentTarget)
})
padre.addEventListener("click",(e)=>{
    logZ10Msg("2. listener de Padre")
    pulsar(e.currentTarget)
})
hijo.addEventListener("click",(e)=>{
    logZ10Msg("1. listener de Hijo")
    pulsar(e.currentTarget)
})

// =============================================================
// ZONA 11: event delegation
// =============================================================
const listaDeleg  = document.getElementById("lista-delegation");
const btnDelegAdd = document.getElementById("btn-delegation-add");
const logZ11      = document.getElementById("log-z11");

function logZ11Msg(msg) {
    const d = document.createElement("div");
    d.textContent = msg;
    logZ11.prepend(d);
}

let degItems = [
    { id: 1, texto: "Aprender delegation", hecho: false },
    { id: 2, texto: "Mirar bubbling", hecho: false }
];
let degNextId = 3;

function renderizarDeleg() {
    listaDeleg.innerHTML = "";
    for (const item of degItems) {
        const li = document.createElement("li");
        if (item.hecho) li.classList.add("hecho");
        li.dataset.id = item.id;
        li.innerHTML = `
            <span class="texto">${item.texto}</span>
            <button class="eliminar" title="Eliminar">X</button>
        `;
        listaDeleg.appendChild(li);
    }
}

// UN SOLO listener en el padre
listaDeleg.addEventListener("click", (e) => {
    const btnX = e.target.closest(".eliminar");
    if (btnX) {
        const id = Number(btnX.closest("li").dataset.id);
        degItems = degItems.filter(t => t.id !== id);
        renderizarDeleg();
        logZ11Msg(`eliminado id=${id}`);
        return;
    }

    const txt = e.target.closest(".texto");
    if (txt) {
        const id = Number(txt.closest("li").dataset.id);
        const i = degItems.findIndex(t => t.id === id);
        if (i !== -1) {
            degItems[i].hecho = !degItems[i].hecho;
            renderizarDeleg();
            logZ11Msg(`toggle id=${id}`);
        }
    }
});

btnDelegAdd.addEventListener("click", () => {
    const ejemplos = ["Comprar pan", "Estudiar JS", "Hacer ejercicio", "Llamar al banco"];
    const texto = ejemplos[Math.floor(Math.random() * ejemplos.length)];
    degItems.push({ id: degNextId++, texto, hecho: false });
    renderizarDeleg();
    logZ11Msg(`agregado: "${texto}"`);
});

renderizarDeleg();