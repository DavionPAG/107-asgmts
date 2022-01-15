import React from "react";

const store = React.createContext({
  cart: [],

  addProd: () => {},
  removeProd: () => {}
})

export default store;