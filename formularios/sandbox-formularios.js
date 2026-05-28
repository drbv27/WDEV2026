const d = document

//zona1
const leerTodo = d.getElementById("btn-leer-todo")

leerTodo.addEventListener("click",()=>{
    const datos = {
        nombre: d.getElementById("inp-nombre").value,
        email:d.getElementById("inp-email").value,
        edad: d.getElementById("inp-edad").value,//esta es la forma mas larga
        fechaNac:d.getElementById("inp-fecha").value,
        pais:d.getElementById("inp-pais").value,
        genero:d.querySelector("input[name='genero']:checked")?.value,
        hobbies:[...document.querySelectorAll("input[name='hobby']:checked")]
                    .map(c => c.value),
        terminos:d.getElementById("inp-terminos").checked
    }
    console.log(datos)
    d.getElementById("salida-z1").textContent = JSON.stringify(datos,null,2)
})


//zona 2
const formVal = d.getElementById('form-validacion')

formVal.addEventListener("submit",(evt)=>{
    evt.preventDefault()

    if(!formVal.checkValidity()){
        formVal.reportVlidity()
        return
    }

    const datos = Object.fromEntries(new FormData(formVal))
    console.log(datos)
})

//zona 3

const formD = d.getElementById("form-formdata")

formD.addEventListener("submit",(e)=>{
    e.preventDefault()

    const fd = new FormData(formD)
    
    const objL = Object.fromEntries(fd)
    objL.intereses = fd.getAll("intereses")
    console.log(objL)

    d.getElementById("salida-z3").textContent = JSON.stringify(objL,null,2)
})

//zona 4

const formErr = document.getElementById("form-errores");

// Mostrar/limpiar el error de un input segun su validity
function validarCampoErr(input) {
    const campo = input.closest(".campo");
    const error = campo?.querySelector(".error");
    if (!error) return;

    if (input.validity.valueMissing) {
        error.textContent = "Este campo es obligatorio";
    } else if (input.validity.typeMismatch) {
        error.textContent = "Formato invalido";
    } else if (input.validity.tooShort) {
        error.textContent = `Minimo ${input.minLength} caracteres`;
    } else if (input.validity.patternMismatch) {
        error.textContent = input.title || "Formato no permitido";
    } else {
        error.textContent = "";    // limpiar
    }
}

// Validar al perder foco (blur NO bubblea por defecto -> usar capture: true)
formErr.addEventListener("blur", (e) => {
    if (e.target.matches("input, select, textarea")) {
        validarCampoErr(e.target);
    }
}, true);

// Submit: validar todo, mostrar todos los errores, enfocar el primero
formErr.addEventListener("submit", (e) => {
    e.preventDefault();

    let primerError = null;
    formErr.querySelectorAll("input, select, textarea").forEach(inp => {
        validarCampoErr(inp);
        if (!inp.checkValidity() && !primerError) {
            primerError = inp;
        }
    });

    if (primerError) {
        primerError.focus();
        return;
    }

    const datos = Object.fromEntries(new FormData(formErr));
    document.getElementById("salida-z4").textContent =
        "Form valido!\n\n" + JSON.stringify(datos, null, 2);
});