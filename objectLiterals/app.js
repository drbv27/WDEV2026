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

//MUTABILIDAD

const hardware = { cpu:"Ryzen 9" }
console.log(hardware)
//adicionar con sintaxis de punto
hardware.ram = "32GB"
console.log(hardware)
//tambien existe la sintaxis de corchete
//para nombres con espacios o variables
const propiedadDinamica = "Almacenamiento"
hardware[propiedadDinamica] = "1TB SSD"
console.log(hardware)

//puedo modificar con la misma sintaxis
hardware.ram = "64GB"
console.log(hardware)

//BORRADO
const config = { tema:"Oscuro",fuente:"Fira Code", debug:true}

console.log(config)
delete config.debug
console.log(config)

//INPECCIONAR OBJETOS
//Object.keys(objeto)  y Object.values(objeto)

const stack = { frontend:"React", backend:"Node", db:"MongoDB" }

const llaves = Object.keys(stack)
console.log(llaves)
console.log(llaves.length)

const valores = Object.values(stack)
console.log(valores)

const precios = {monitor:300, teclado:50, mouse:25 }

const valores2 = Object.values(precios)
console.log(valores2)

const total = valores2.reduce((acc,valor)=> acc+valor,0)
console.log(total)

//Bonus track
//Object.entries()

const settings = { port:3000, host:"localhost" }

console.log(Object.entries(settings))


//Mision 1
//crear un objeto que se llame vehiculo
//Mision2: agregen las propiedades marca y modelo
//Mision 3: usen object.keys para verificar que el objeto tenga exactamente 2 props
//4. Agreguen una propiedad "temporal" y luego borrenla con delete
//5.Impriman en consola solo los valores del objeto usando Object.values()
