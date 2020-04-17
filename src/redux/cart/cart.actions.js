import CartActionTypes from "./cart.types"
const {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    CLEAR_ITEM_FROM_CART,
    DECREASE_ITEM
} = CartActionTypes

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})

export const decreaseItem = item => ({
    type: DECREASE_ITEM,
    payload: item
})
