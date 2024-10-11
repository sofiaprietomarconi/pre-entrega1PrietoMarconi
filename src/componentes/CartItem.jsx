import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div>
        <p>{item.nombre}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={()=> eliminarProducto(item.id)}>Eliminar producto del carrito</button>
    </div>
  )
}

export default CartItem