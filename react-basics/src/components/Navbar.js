import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import store from './context/store';
import './navbar.css'

export default function Navbar() {
  const cart = useContext(store).cart

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(147, 250, 178)"}}>
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
          <div className="d-flex form-inline my-2 my-lg-0">
            <Link className="btn btn-dark btn-outline btn-outline-primary form-control mr-sm-2" to="/cart">
              <p>Cart </p>
              <span className="badge badge-light">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
