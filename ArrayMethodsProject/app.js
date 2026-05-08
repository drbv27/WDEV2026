console.log("dataset cargado. Total de ventas:", ventas.length)
console.log("Primer registro",ventas[0])

//FASE1 Queries Individuales
//Q1 -Listar todos lo productos vendidos
//.map()

const productos = ventas.map( venta => venta.producto )
console.log(productos)

//Q2 - Crear un array con strings tipo "#1001 - Ana Martinez compro Laptop"
//.map()
const lista = ventas.map( venta => `#${venta.id} - ${venta.cliente} compro ${venta.producto}` )
console.log(lista)

//Q3 - Devolver solo las ventas de Medellin
//.filter()

const enMedellin = ventas.filter( venta => venta.ciudad === "Medellin" )
console.log(enMedellin)

//Q4 Devolver las ventas que estan en completadas y cuyo total sea mayor a $200
const grandesCompletadas = ventas.filter( venta => 
    venta.estado ==="completada" && (venta.precio * venta.cantidad) > 200
 )

 console.log(grandesCompletadas)