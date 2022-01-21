import React, { useContext} from 'react'
import store from './context/store'
import './cartProd.css'

export default function CartProd(props) {

  const removeProd = useContext(store).removeProd 

  const handleRemove = () => {
    removeProd(props.prodInfo._id)
  }

  return (
    <div className='cart-prod'>
      <img src={'/media/'+props.prodInfo.img} alt={props.prodInfo.title} />
      <h4>{props.prodInfo.title}</h4>
      <label htmlFor="price">$ {props.prodInfo.price.toFixed(2)}</label>
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}
