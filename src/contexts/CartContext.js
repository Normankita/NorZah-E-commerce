import { useContext, createContext, useReducer} from "react";
import {cartReducer } from "../reducers/cartReducer"

const initialState={
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState)

 export const CartProvider = ({children})=>{
    const [state, dispatch]= useReducer(cartReducer, initialState)

    const addToCart =(product)=>{
        const newCart= state.cartList.concat(product)
        calculateTotal(newCart)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                newproduct: newCart,
            }
        })
    }
    const removeFromCart=(product)=>{
        const newCart = state.cartList.filter(current => current.id!==product.id)
        calculateTotal(newCart)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                newproduct: newCart,
            }
        }
        )
    }
    const clearCart =()=>{
        dispatch({
            type: "CLEAR_CART",
            payload:{
                cartList: [],
                total: 0
            }
        })
    }
    const calculateTotal=(products)=>{
        let total=0
        products.forEach(product => total= total+product.price)
        dispatch(
            {type:"UPDATE_TOTAL",
            payload:{
                total
            }}
        )
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        clearCart
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = ()=> {return useContext(CartContext);}