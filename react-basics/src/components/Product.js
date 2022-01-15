import './product.css';
import QuantityPicker from './quantityPicker';
import React, {useState, useContext}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import store from './context/store';

export default function Products(props) {

const addProd = useContext(store).addProd

const [total, setTotal] = useState(1)
  
  function quantity(props) {
    setTotal(props)
  }

  function handleCart() {
    let prod = {
      ...props.info,
      quantity: quantity
    }

    addProd(prod)
  }
  
  return (
    <div className='product' > 
        <img src={'/media/'+props.product.img} alt={props.product.title} />
        <div className="card-details">
          <h2 className="title">{props.product.title}</h2>
          <label htmlFor="Price">Price: $ {props.product.price.toFixed(2)}</label>
          <label htmlFor='Total'>Total: {(total*props.product.price).toFixed(2)} </label>
        </div>
        <div className='card-add'>
          <QuantityPicker quantity={quantity} ></QuantityPicker>
          <button onClick={handleCart} className='cart-button'>  
            <FontAwesomeIcon icon="cart-plus" />
          </button>
      </div>
    </div>
  )
}
