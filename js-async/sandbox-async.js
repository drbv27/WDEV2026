// =============================================================
// SANDBOX DE ASINCRONISMO - Clase 11
// =============================================================
// Vamos a construir este archivo en clase, zona por zona.
// La guia (guia-clase-11-asincronismo.md) indica que escribir.
//
// REGLA: cada cambio = guardar (Ctrl+S) + recargar (F5).
// =============================================================


// -------------------------------------------------------------
// HELPER PROVISTO (no es el tema de hoy, te lo dejo listo).
// log(zonaId, mensaje) imprime el mensaje con la HORA exacta
// (con milisegundos) en el log de la zona indicada.
// Fijate SIEMPRE en el timestamp y el orden: ahi esta el async.
// -------------------------------------------------------------
function log(zonaId, mensaje) {
    const cont = document.getElementById(zonaId);
    if (!cont) return;
    const ahora = new Date();
    const t =
        ahora.toLocaleTimeString("es", { hour12: false }) +
        "." + String(ahora.getMilliseconds()).padStart(3, "0");
    const linea = document.createElement("div");
    linea.textContent = `[${t}]  ${mensaje}`;
    cont.append(linea);
}

// Conectar todos los botones "Limpiar log"
document.querySelectorAll("[id^='limpiar-']").forEach(btn => {
    const zonaId = "log-" + btn.id.split("-")[1];
    btn.addEventListener("click", () => {
        const cont = document.getElementById(zonaId);
        if (cont) cont.innerHTML = "";
    });
});

const d = document
// =============================================================
// ZONA 1: el orden de ejecucion
// =============================================================
d.getElementById("btn-z1")
    .addEventListener("click",()=>{
        log("log-z1","1. primera linea (sincrona)")

        setTimeout(() => {
            log("log-z1","2. Soy la seguna linea(asincrona)")
        }, 0);

        log("log-z1","3. Tercera Linea(sincrona)")
        log("log-z1","4. Tercera Linea(sincrona)")
        log("log-z1","5. Tercera Linea(sincrona)")
        log("log-z1","6. Tercera Linea(sincrona)")
        log("log-z1","7. Tercera Linea(sincrona)")
        log("log-z1","8. Tercera Linea(sincrona)")
        log("log-z1","9. Tercera Linea(sincrona)")
    })


// =============================================================
// ZONA 2: setTimeout no bloquea
// =============================================================
d.getElementById("btn-z2")
    .addEventListener("click",()=>{

        log("log-z2","1.Pediste esperar 5 segundos")
        
        setTimeout(()=>{
            log("log-z2", "2....List pasaron los 5 segundo")
        },5000)


        log("log-z2","3.Hola probando asincronismo")
    })


// =============================================================
// ZONA 3: callbacks
// =============================================================
function simularPedido(plato,callback){
    log("log-z3",`1.Cocinando ${plato}... (esto va a tardar)`)
    setTimeout(() => {
        callback(`${plato} listo`)
    },1500);
}

d.getElementById("btn-z3")
    .addEventListener("click",()=>{
        simularPedido("pizza",(resultado)=>{
            log("log-z3","2. Callback recibido->"+resultado)
        })
        log("log-z3","3. (mientrastanto, el mesero atiend eotras mesas)")
    })


// =============================================================
// ZONA 4: callback hell
// =============================================================
function paso4(nombre,ms,callback){
    setTimeout(() => {
        log("log-z4",`${nombre} ok`)
        callback()
    },ms);
}

d.getElementById("btn-z4")
    .addEventListener("click",()=>{
        log("log-z4","Iniciando flujo de datos anidados")

        paso4("1. Login",1000,()=>{
            paso4("2. Cargar perfil",1000,()=>{
                paso4("3. Cargar post",1000,()=>{
                    paso4("4. Cargar comentarios",1000,()=>{
                        log("log-z4","Todo listo (miiren la sangria esto no escla bien)")
                    })
                })
            })
        })
    })


// =============================================================
// ZONA 5: promises (crear y consumir)
// =============================================================
//un promise tiene 3 estados
//pending(pendiente): todavia esta esperando
//fullfilled(cumplido): todo salio bien y tiene un valor
// . se logra llamdo resolve(valor)
//rejected(rechazada):salio mal, tiene un error.se logra llamdo reject(error)

//crear una promesa
/* 
const nombrePromesa = new Promise((resolve,reject)=>{
    //..hacer algo que se va a demorar
    //si sale bien : resolve(valor)
    //si sale mal: reject(error)
})
 */

//consumir la promise: .then .catch .finally
/* 
nombrePromesa
    .then(valor => {"exito llego el resolve"})
    .catch(error => {"fallo: llego el reject"})
    .finally(()=>{"siempre se ejecuta pase lo que pase"})
 */

function cocinar(plato){
    return new Promise((resolve,reject)=>{
        log("log-z5", `Cocinando ${plato}...`)
        setTimeout(() => {
            if(plato==="veneno"){
                reject(new Error("Me niego a cocinar eso"))
            }else{
                resolve(`${plato} listo`)
            }
        }, 1500);
    })
}

d.getElementById("btn-z5-ok")
    .addEventListener("click",()=>{
        cocinar("pasta")
            .then( resultado => log("log-z5","ok -> "+resultado))
            .catch( error => log("log-z5","Error -> "+ error.message))
            .finally(()=>log("log-z5","esto siempre se ejecuta"))
    })

d.getElementById("btn-z5-err")
    .addEventListener("click",()=>{
        cocinar("veneno")
            .then( resultado => log("log-z5","ok -> "+resultado))
            .catch( error => log("log-z5","Error -> "+ error.message))
            .finally(()=>log("log-z5","esto siempre se ejecuta tambien"))
    })

// =============================================================
// ZONA 6: encadenar promises
// =============================================================
function paso6(nombre,ms){
    return new Promise(resolve =>{
        setTimeout(() => {
            log("log-z6",`${nombre} ok`)
            resolve()
        },ms);
    })
}

d.getElementById("btn-z6")
 .addEventListener("click",()=>{
    log("log-z6","Iniciando flujo promises encadenadas")

    paso6("1. Login",1000)
        .then(()=> paso6("2. Cargar perfil",1000))
        .then(()=> paso6("3. Cargar post",1000))
        .then(()=> paso6("4. Cargar comentarios",1000))
        .then(()=> log("log-z6","TOD OK - Codigo plano sin arco"))
 })


// =============================================================
// ZONA 7: async / await + try/catch
// =============================================================
function paso7(nombre, ms, fallar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallar) {
                reject(new Error(`${nombre} fallo!`));
            } else {
                log("log-z7", `${nombre} OK`);
                resolve();
            }
        }, ms);
    });
}

async function flujoExitoso(){
    log("log-z7","Iniciando flujo async await")

    try {
        await paso7("1. login",1000)
        await paso7("2. perfil",1000)
        await paso7("1. post",1000)
        log("log-z7","todo listo - se lee como codigo sincronico")
    } catch (error) {
        log("log-z7","Error: -> " + error.message)
    }
}

d.getElementById("btn-z7-ok")
 .addEventListener("click",
    flujoExitoso
 )

// =============================================================
// ZONA 8: Promise.all (serie vs paralelo)
// =============================================================
function tarea(nombre,ms){
    return new Promise(resolve => {
        setTimeout(() => {
            log("log-z8",`${nombre} (${ms}ms) termino`)
            resolve(nombre);
        }, ms);
    })
}

d.getElementById("btn-z8-serie")
    .addEventListener("click",async ()=>{
        log("log-z8","---EN SERIE UNA TRAS OTRA---")
        const inicio = Date.now()

        await tarea("A",1000)
        await tarea("B",1000)
        await tarea("C",1000)

        log("log-z8",`Total en serie: ${Date.now()-inicio} ms (~3000ms) `)
    })

d.getElementById("btn-z8-paralelo")
    .addEventListener("click",async ()=>{
        log("log-z8","---EN PARALELO todas a la vez---")
        const inicio = Date.now()

        const resultados = await Promise.all([
            tarea("A",1000),
            tarea("B",1000),
            tarea("C",1000)
        ])

        log("log-z8","Resultados: "+ resultados.join(", "))
        log("log-z8", `Total en paralelo: ${Date.now()-inicio}ms (~1000 ms)`)
    })