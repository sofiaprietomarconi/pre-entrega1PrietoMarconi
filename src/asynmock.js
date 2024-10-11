const productosDoggi = [
    {id: "cadenapaseo", nombre: "Cadena de paseo", precio: "$14000", stock:10, categoria: "paseo", detalles:"Cadena de paseo con manopla soft de tela en diferentes colores", img: "../src/assets/imagenes/cadenaPaseo.webp"},
    {id: "camaAuto", nombre: "Cama para Auto", precio: "$25000", stock:25, categoria: "auto",  detalles:"Cama Para Perros Huella Living Car Doble Talle 5 Para Autos", img:"../src/assets/imagenes/camaAutp.webp"},
    {id: "comedero", nombre: "Comedero", precio: "$10000", stock: 50, categoria: "casa", img:"../src/assets/imagenes/comedero.webp"},
    {id: "comederoLento", nombre: "Comedero come lento", precio: "$25000", stock: 5, categoria: "casa", img:"../src/assets/imagenes/comederoComelentoo.webp"},
    {id: "comederoAuto", nombre: "Comedero automático", precio: "$15000", stock: 40, categoria: "casa", img:"../src/assets/imagenes/comederoAutomaticp.webp"},
    {id: "huesoTela", nombre: "Hueso de tela", precio: "$5000", stock:100,  categoria: "juguetes", img:"../src/assets/imagenes/huesoTela.jfif"}
]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productosDoggi)
    }, 2000);
    })
}

export const buscarProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = productosDoggi.find (item => item.id === id)
            resolve(producto)
        }, 2000)
    }
    )
}

export const buscarPorCategoria = (categoria) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = productosDoggi.filter(item => item.categoria === categoria)
            resolve(producto)
        })
    }, 1000)
}