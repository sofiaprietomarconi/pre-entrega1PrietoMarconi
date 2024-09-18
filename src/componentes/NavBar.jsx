import "./NavBar.css"
import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom"

const navBar = () => {
  return (
    <header className='headerClass'>
        <nav className='navBarClass'>
        <Link>
        <h1> <img width="48" height="48" src="https://img.icons8.com/color/48/year-of-dog.png" alt="year-of-dog"/> DOGGI SHOP</h1>
        </Link>
            <ul className='ulClass'>
            <li className='li'>
                  <NavLink to="/">Home</NavLink>
                  </li>
                <li className='li'>
                  <NavLink to="/categoria/ropa">Ropa</NavLink>
                  </li>
                <li className='li'>
                <NavLink to="/categoria/auto">Auto</NavLink>
                  </li>
                <li className='li'>
                <NavLink to="/categoria/paseo">Paseo</NavLink>
                  </li>
                <li className='li'>
                <NavLink to="/categoria/casa">Casa</NavLink>
                  </li>
                <li className='li'>
                <NavLink to="/categoria/juguetes">Juguetes</NavLink>
                  </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default navBar