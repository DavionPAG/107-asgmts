import './product.css';
import QuantityPicker from './quantityPicker';
import React from 'react'

export default function products() {
  return (
    <div className='product'>
      <img src="https://picsum.photos/200/300" alt="" />
      <h2 className="title">Title</h2>
      <label htmlFor="Price">Price</label>
      <label htmlFor='Total'>Total</label>
      <QuantityPicker></QuantityPicker>
      <button>Add</button>
    </div>
  )
}
