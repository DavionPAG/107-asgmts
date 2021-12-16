import './catalog.css'
import Product from './Product'

import React from 'react'

export default function Catalog() {
  return (
    <div className='catalog'>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}
