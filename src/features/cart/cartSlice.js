import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const notifyAddedToCart = () => toast.success(
    <span>
        1 item added to cart.
    </span>
  )

  const notifyRemovedFromCart = () => toast.error(
    <span>
        Item removed from cart.
    </span>
  )

  const notifyCartCleared = () =>toast.error(
    <span>
        Cart cleared.
    </span>
  )

const initialState = {
    cartItems : [],
    cartTotalProducts : 0,
    cartTotalAmount : 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } 
            else{
                state.cartItems.push({ ...action.payload, quantity: 1});
            }
            state.cartTotalAmount += action.payload.discountedPrice;
            state.cartTotalProducts = state.cartItems.length;
            notifyAddedToCart();
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            item.quantity += 1;
            state.cartTotalAmount += action.payload.discountedPrice;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity --;
                state.cartTotalAmount -= action.payload.discountedPrice;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            state.cartTotalAmount -= (action.payload.discountedPrice * action.payload.quantity);
            state.cartTotalProducts = state.cartItems.length;
            notifyRemovedFromCart();
        },
        clearCart: (state) =>{
            state.cartItems = [];
            state.cartTotalProducts = 0;
            state.cartTotalAmount = 0;
            notifyCartCleared();
        }
    },
})



export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;

export const cartReducer =  cartSlice.reducer;