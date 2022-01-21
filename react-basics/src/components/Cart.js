import React, { useContext } from 'react'
import store from './context/store';
import CartProd from './CartProd';
import './cart.css'

export default function Cart() {

  const cart = useContext(store).cart

  const calcTotal = (items) => {
    let finalPrice = 0
    let total = items.map(item => {
      console.log(typeof(item.price))
      finalPrice = finalPrice + parseInt(item.price)
      return finalPrice
    })
    return total
  }

  return (
    <div className='cart-items'>
      <div className="items">
        {cart.map((prod, idx) => (
          <CartProd key={idx} prodInfo={prod}></CartProd>
        ))}
      </div>
      <div className="side-menu">
        <h5>Ready to Pay?</h5>
        <h6>$ {calcTotal(cart)}</h6>
        <hr />
        <button >CHECKOUT</button>
      </div>
    </div >
  )
}

