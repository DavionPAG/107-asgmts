import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import store from './context/store';

export default function Navbar() {
  const cart = useContext(store).cart

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>
          <div className="d-flex">
              <Link class="btn btn-primary btn-outline btn-outline-success bg-black form-control me-2" to="/cart">
                Cart
                <span className='badge bg-primary'>{
                cart.length} {console.log(cart)}</span>
              </Link>              
          </div>
        </div>
      </div>
    </nav>
  )
}
