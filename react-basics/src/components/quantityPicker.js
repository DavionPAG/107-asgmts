import './quantityPicker.css'

import React, {useState} from 'react'

export default function QuantityPicker() {

  const [quantity, setQuantity] = useState(1)

  function clickUp() {
    if (quantity <= 19) setQuantity(quantity + 1)
  }

  function clickDown() {
    if (quantity > 1) setQuantity(quantity - 1)
  }
  return (
    <div>
      <button onClick={clickDown}>-</button>
      <label htmlFor="">{quantity}</label>
      <button onClick={clickUp}>+</button>
    </div>
  )
}
