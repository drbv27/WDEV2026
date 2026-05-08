// .filter()  - el colador o el filtro
// sintaxis  const arrayFiltrado = arrayOriginal.filter( ()=>{} )

const numeros = [1,2,3,4,5,6,7,8,9];

const pares = numeros.filter( numero => numero % 2 ===0 )

console.log(pares)
console.log(numeros)

//otro eejmplo
const palabras = ["hola","javascript","es","genial","facil"]

//filtrar palabras largas
const largas = palabras.filter( (palabra)=>{ return palabra.length > 4 } )
console.log(largas)

//filtrar palabras que tengan la letra j
const palabrasJ = palabras.filter( palabra => palabra.includes("s"))
console.log(palabrasJ)

//puedo hacer combinaciones logicas 
//ejemplo palabras de mas de 4 caracteres y que empiecen por g
const palabrasG4 = palabras.filter( palabra => palabra.length>4 && palabra.startsWith("g") )
console.log(palabrasG4)

const productos = [
    {nombre:"Pan", precio:5, stock:0},
    {nombre:"Leche", precio:8, stock:12},
    {nombre:"Cafe", precio:15, stock:3},
    {nombre:"Te", precio:6, stock:0},
    {nombre:"Arroz", precio:6, stock:7}
]

//quiero tener un array solo con los productos que tienen inventario
const stockProducts = productos.filter( producto => producto.stock > 0 )
console.log(stockProducts)
//quiero un nuevo array con los productos baratos que es barato que valgan menos de 10

//quiero un array que me devuelva productos disponibles y baratos

/* [1,2,3].filter( (n)=> n*2  )] */

const edades = [12, 17, 18, 25, 30, 65, 70, 8];
// Devolver solo los mayores de edad (>= 18)

const nombres = ["Ana", "Cristobal", "Luis", "Maximiliano", "Pedro"];
// Devolver solo los nombres con MAS de 4 letras

const productos1 = [
    { nombre: "Pan", precio: 5 },
    { nombre: "Laptop", precio: 1500 },
    { nombre: "Cafe", precio: 15 },
    { nombre: "TV", precio: 800 }
];
// Devolver solo los productos con precio entre 10 y 1000

const usuarios = [
    { nombre: "Ana", email: "ana@gmail.com", activo: true },
    { nombre: "Luis", email: "luis@hotmail.com", activo: false },
    { nombre: "Marta", email: "marta@gmail.com", activo: true },
    { nombre: "Pedro", email: "pedro@yahoo.com", activo: true }
];
// Devolver los usuarios activos CON correo de gmail


// .reduce( (acumulador,actual)=> { hacer algo return nuevoAcumulador}, valorInicial )


const numeritos = [1,2,3,4,5]
const suma = numeritos.reduce( (acc,n) => acc+n ,0 )

//otro ejemplo encontar un max

const otros = [3,7,1,9,2]

const maximo = otros.reduce( (max,n) => n>max ? n : max, 0 )
console.log(maximo)

//concatenar textos

const palabritas = ["hola","como","estas"]
const unidas = palabritas.reduce( (acc,palabra) => acc+" "+palabra , "").trim()
console.log(unidas)

//un objeto contar y agrupar

const votos =["si","no","si","si","no"]
const conteo = votos.reduce( (acc,voto) => {
    acc[voto] = (acc[voto] || 0) +1
    return acc
} ,{})

console.log(conteo)

const ciudades = ["Bogota", "Medellin", "Bogota", "Cali", "Bogota", "Medellin"];

const conteoc = ciudades.reduce((acc, ciudad) => {
    acc[ciudad] = (acc[ciudad] || 0) + 1;
    return acc;
}, {});

console.log(conteoc);
// { Bogota: 3, Medellin: 2, Cali: 1 }



const numeros1 = [10, 20, 30, 40, 50];
// Devolver la SUMA total

const palabras1 = ["Hola", "como", "estas","?"];
// Devolver una sola string concatenada con espacios: "Hola como estas"

const calificaciones = ["A", "B", "A", "C", "B", "A", "B"];
// Devolver un objeto contando cada letra: { A: 3, B: 3, C: 1 }