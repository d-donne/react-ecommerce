import { createContext, ReactNode, useState } from "react";
import { all_product } from "../constants/all_product";
import { productProps } from "../components/Item";
import CartItems from "../components/CartItems";

interface products extends productProps {
  
}

interface context {
  all_product: products;
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  reduceCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}

export const ShopContext = createContext({} );

 const getDefaultCart = () => {
   const cart: { [key: number]: number } = {};

   for (let i = 1; i < all_product.length + 1; i++) {
     cart[i] = 0;
   }
   return cart;
 };

export const ShopContextProvider = ({children}: {children: ReactNode}) => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart())
   
  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ++ }))
  }
  const reduceCart = (itemId: number) => {
    if (cartItems[itemId] === 0) return
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] -- }))
  }

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
  }

  const cartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      
      
    }return totalAmount;
  }

  const getCartQuantity = () => {
    let totalQuantity = 0;
    for (const item in cartItems) {
      totalQuantity += cartItems[item];
    }
    return totalQuantity;
  }

  const contextValue = { all_product, cartItems, addToCart, reduceCart, removeFromCart, cartTotal, getCartQuantity };

  return (
    <ShopContext.Provider value={contextValue} >
      {children}
    </ShopContext.Provider>
  )
}