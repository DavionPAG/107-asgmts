import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import store from './context/store';
import './navbar.css'

export default function Navbar() {
  const cart = useContext(store).cart

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>
          <div className='navbar-nav'>
            <Link className="d-flex collapse nav-link" to="/cart">
              <p className='nav-link'>Cart </p>
              <span className='nav-link'>
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
