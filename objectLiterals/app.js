//Objetos literales
//un objeto es un molde que me permite tener informacion complementaria
//de una misma entidad
//los objetos literale son conjuntos de parejas key:value (llave:valor)

const miCarro = {
    color:'gris',
    marca:"Suzuki",
    modelo: "Swift",
    Cilindrada:1400,
    anio: 2018,
    origen:"japon",
    seguridad:{
        abs:true,
        asistencia:true,
        airbags:["timon","copiloto","cortina"]
    }
}

//sintaxis de punto

console.log(miCarro.marca)

const laptop = {
    brand:"Asus",
    model: "Vivobook S",
    specs:{
        cpu:"Ryzen AI 9 370 HX",
        ram:"32GB"
    },
    year:2025
}

//acceso a valores de manera repetiva y tediosa
 
console.log(`Laptop: ${laptop.brand} model: ${laptop.model} con CPU: ${laptop.specs.cpu}`)

/* const brand = laptop.brand
const model = laptop.model
const cpu = laptop.specs.cpu


console.log(`Laptop: ${brand} model: ${model} con CPU: ${cpu}`) */

//destructuring

//extraccion simple

//voy a crear year como una variable solo para ejemplificar
//que hacer en el destructuring si la variable ya existe
const year = 2026

const { brand,model,year:anio } = laptop

console.log(brand)
console.log(model)
console.log(anio)

//valores por defecto y anidacion
const {specs:{ram},os="win11"} = laptop
console.log(ram)
console.log(os)

//el operador REST ...
const { brand:marca,...detalles } = laptop

console.log(marca)
console.log(detalles)

//ejercicio
const apiResponse = {
    id:"u942",
    name:"Diego Bonilla",
    address:{
        city:"Medellin",
        country:"Colombia"
    },
    lastLogin:"2026-05-12",
    premium:true
}

//usen una sola linea de codigo para obtener el nombre del usuario
// su ciudad y guarden el resto de la informacion en una variable llamada
//metadata

