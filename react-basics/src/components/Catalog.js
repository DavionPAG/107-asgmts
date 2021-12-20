import './catalog.css'
import Product from './Product'
import DB from '../services/db'
import React, {useEffect, useState} from 'react'

export default function Catalog() {

  let [products, setProducts] = useState([])

  function loadCatalog() {
    let db = new DB()
    setProducts(db.getCatalog())
  }

  useEffect(() => {
    loadCatalog()
  })

  return (
    <div className='catalog'>
      <h3>We have {products.length} products!</h3>
      {products.map((product, idx) => (
        <Product product={product} key={idx} />
  ))}
    </div>
  )
}
