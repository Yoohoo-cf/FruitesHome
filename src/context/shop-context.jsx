import { createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}

}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart)

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart}


  return (
      <ShopContext.Provider value={contextValue}>
        {props.chilren}
      </ShopContext.Provider>
  );
}
