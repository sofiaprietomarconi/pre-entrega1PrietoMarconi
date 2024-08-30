import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget'

const navBar = () => {
  return (
    <header className='headerClass'>
        <nav className='navBarClass'>
        <h1> <img width="48" height="48" src="https://img.icons8.com/color/48/year-of-dog.png" alt="year-of-dog"/> DOGGI SHOP</h1>
            <ul className='ulClass'>
                <li className='li'>Ver todos los productos</li>
                <li className='li'>Ropa</li>
                <li className='li'>Auto</li>
                <li className='li'>Paseo</li>
                <li className='li'>Casa</li>
                <li className='li'>Huesos</li>
                <li className='li'>Jueguetes</li>
            </ul>
        </nav>

        <CartWidget className="cartClass"/>

    </header>
  )
}

export default navBar