import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const Cart = () => {
const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

if (cantidadTotal === 0){
    return (
        <>
        <h2>No tienes productos agregados en el carrito aún :(</h2>
        <Link to="/">Ver productos</Link>
        </>
    )
}

  return (
    <div>
        {
            carrito.map (producto => <CartItem key={producto.id} {...producto}/>)
        }

        <h3>Total: ${total}</h3>
        <h3>Productos seleccionados: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>

    </div>
  )
}

export default Cart