import CartActionTypes from "./cart.types"
import { addItemToCart, decreaseItem } from "./cart.utils"

const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, DECREASE_ITEM } = CartActionTypes

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(({ id }) => id !== action.payload.id)
            }
        case DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer