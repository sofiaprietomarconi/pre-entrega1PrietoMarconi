import { useState, useEffect } from "react"
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore"
import { base } from "./services/config"

const Productos = () => {


    const [productos, setProductos] = useState([])
  return (
    <>
    <div>
        {
            productos.map(producto =>(
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <button>Comprar</button>
                </div>
            ))
        }
        
    </div>
    </>
  )
}

export default Productos