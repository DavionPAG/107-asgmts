import React, {useState} from "react";
import store from './store'

const GlobalContext = (props) => {

  const [cart, setCart] = useState([])
  // const [user, setUser] = useState({})

  const addProd = (prod) => {

    let newCart = [...cart]
    newCart.push(prod)
    setCart(newCart)
  }
  const removeProd = (id) => {
    let newCart = cart.filter(p => p._id !== id) 
    setCart(newCart)
  }

  return (
   <store.Provider value={{
     cart: cart,
    //  user: user,
    addProd: addProd,
    removeProd: removeProd
   }}>
     {props.children}
   </store.Provider>
  )

}

export default GlobalContext;