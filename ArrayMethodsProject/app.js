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

//Q5 Calcular el total facturado (sumatoria de: precio x cantidad) de todas las ventas
const total = ventas.reduce( (acc, venta)=> acc + venta.precio*venta.cantidad,0 )

console.log(`El total facturado es:U$D ${total}`)

//FASE 2 Queries Combinadas

//Q6 Devolver solo los nombres de los productos de categoria tech

const productosTech = ventas
                        .filter( venta => venta.categoria === "tech" )
                        .map( ventaf => ventaf.producto  )

console.log(productosTech)

//Q7 Averiguar cuanto se facturo solo por ropa
const totalRopa = ventas
                    .filter(  venta => venta.categoria ==="ropa")
                    .reduce( (acc,ventaf)=> acc + ventaf.precio*ventaf.cantidad ,0)

console.log(`Total venta ropa: U$D ${totalRopa}`)

//Q8 Cuanto suma el total por cada estado de venta
const totalPorEstado = ventas.reduce( (acc,venta)=>{
    const total = venta.precio * venta.cantidad
    acc[venta.estado] = (acc[venta.estado] || 0) + total
    return acc
},{} )

console.log(totalPorEstado)

//Q9 Cual es el rating promedio de las ventas de tecnologia
const ratingTech = ventas
                    .filter( venta => venta.categoria ==="tech" )
                    .map( ventaf => ventaf.rating )
                    
 const promedioTech = ratingTech
                        .reduce( (acc,ventam)=> acc+ventam ,0 )/ratingTech.length

console.log(promedioTech.toFixed(2))


//FASE 3 Queries complejas de dashboard
//Q10 Devolver los IDs de las 3 ventas con mayor total

const top3 = ventas
                .map( venta => ({ 
                            id:venta.id, 
                            total:venta.cantidad*venta.precio
                        }))
                .sort( (a,b)=> b.total - a.total ) //sort modifica el array
                .slice(0,3)
                .map(v => v.id )


console.log(`Top 3 ventas: ${top3}`)

//ejercicio devolver las 5 ventas mas bajas
//ejercicio devolver las 5 ventas con mas articulos comprados