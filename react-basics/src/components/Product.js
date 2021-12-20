import './product.css';
import QuantityPicker from './quantityPicker';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function products(props) {
  return (

    <div className='product' > 
        <img src={'/media/'+props.product.img} alt={props.product.title} />
        <div className="card-details">
          <h2 className="title">{props.product.title}</h2>
          <label htmlFor="Price">Price: $ {props.product.price}</label>
          <label htmlFor='Total'>Total: TBD </label>
        </div>
        <div className='card-add'>
          <QuantityPicker></QuantityPicker>
          <button>
            <FontAwesomeIcon icon="cart-plus" />
          </button>
      </div>
    </div>
  )
}
