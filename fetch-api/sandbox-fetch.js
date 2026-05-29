// =============================================================
// SANDBOX FETCH + APIs REALES - Clase 12
// =============================================================
// Vamos a construir este archivo en clase, zona por zona.
// La guia (guia-clase-12-fetch-apis.md) indica que escribir.
//
// REGLA: cada cambio = guardar (Ctrl+S) + recargar (F5).
// =============================================================


// -------------------------------------------------------------
// HELPERS PROVISTOS (no son el tema de hoy)
// log(zonaId, mensaje, clase) -> imprime en el log de la zona.
//   clase puede ser "ok", "err" o nada (color por defecto).
// -------------------------------------------------------------
function log(zonaId, mensaje, clase) {
    const cont = document.getElementById(zonaId);
    if (!cont) return;
    const linea = document.createElement("div");
    if (clase) linea.className = clase;
    linea.textContent = mensaje;
    cont.append(linea);
}

// Conectar todos los botones "Limpiar"
document.querySelectorAll("[id^='limpiar-']").forEach(btn => {
    const zonaId = btn.id.replace("limpiar-", "");
    btn.addEventListener("click", () => {
        const logEl = document.getElementById("log-" + zonaId);
        if (logEl) logEl.innerHTML = "";
        const resEl = document.getElementById("resultado-" + zonaId);
        if (resEl) resEl.innerHTML = "";
    });
});

const d = document

// =============================================================
// ZONA 1: fetch basico con .then
// =============================================================
d.getElementById("btn-z1")
    .addEventListener("click",()=>{
        log("log-z1","Pidiendo post #1 a JSONPlaceholder...")

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            /* .then(res => res.json()) */
            .then(response =>{
                log("log-z1",`Response recibida (status: ${response.status})`)
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                log("log-z1","Titulo:" +data.title,"ok")
                log("log-z1","Body:"+data.body+"...","ok")
            })
            .catch(error => {
                log("log-z1","Error:"+error.message,"err")
            })
        log("log-z1","(el fetch se dispar. esta linea corre YA, no espera")
    })
/* 
    fetch(url)
        .then(res=>res.json())
        .then(data=>...)
 */

// =============================================================
// ZONA 2: async/await + manejo de errores HTTP
// =============================================================

async function traerpost(id){
    log("log-z2",`Pidiendo post ${id}...`)

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(response)
        if(!response.ok){
            //404,500 etc No son automaticamente error para fetch
            //lo convertimos en error nosotros:
            throw new Error(`HTTP ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        log("log-z2",`Titulo: ${data.title}`,"ok")
        log("log-z2",`userId: ${data.userId}`,"ok")

    } catch (error) {
        log("log-z2","Error: "+error.message,"err")
        console.log(error.message)
    }
}

d.getElementById("btn-z2-ok")
    .addEventListener("click",()=>{
        const id = d.getElementById("inp-id").value || 1
        traerpost(id)
    })

d.getElementById("btn-z2-err")
    .addEventListener("click",()=>{
        traerpost(9999)
    })
// =============================================================
// ZONA 3: JSONPlaceholder — listado de posts
// =============================================================
const resz3 = d.getElementById("resultado-z3")

async function cargarPosts(){
    console.log("arrancando")
    //opcional colocar un mensaje
    resz3.innerHTML = "<p style='color:var(--muted)'>Cargando...</p>"

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        //completar manejo de error como arriba
        //const data = await response.json() NO SEIMPRE TIENE QUE SER DATA
        //console.log(response)
        const posts = await response.json()
        const primeros10 = posts.slice(0,20)

        resz3.innerHTML = ""
        const grid = d.createElement("div")
        grid.className = "post-grid"

        for(const post of primeros10){
            const card = d.createElement("div")
            card.className = "post-card"
            card.innerHTML = `
            <span>#${post.id}</span>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            `
            grid.appendChild(card)
        }

        resz3.appendChild(grid)

    } catch (error) {
        console.log(error.message)
    }
}

d.getElementById("btn-z3-cargar")
    .addEventListener("click",cargarPosts )

// =============================================================
// ZONA 4: PokeAPI — buscador
// =============================================================



// =============================================================
// ZONA 5: OpenWeather — clima por ciudad
// =============================================================



// =============================================================
// ZONA 6: Axios — comparacion con fetch
// =============================================================
