import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../context/carritoContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const {cantidadTotal}= useContext(CarritoContext)

  return (
    <div>
      <Link to="/Cart">
        <img className="imagenCarrito" width="32" height="32" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart"/>
        </Link>
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
    </div>
  )
}

export default CartWidget