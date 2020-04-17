import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { withRouter } from 'react-router-dom'

import { selectCartItems } from "../../redux/cart/cart.selector"

import './CartDropdown.scss'
import CustomButton from "../custom-button"
import CartItem from "../cart-item"
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
    const emptyCart = (
        <div className="empty-cart">
            <span className="empty-message">Your cart is empty</span>
        </div>
    )
    
    const cartWithItems = (
        <>
            <div className="cart-with-items">
                <div className="cart-items">
                    { cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) }
                </div>
            </div>
            <CustomButton onClick={() => {history.push('/checkout')}}>GO TO CHECKOUT</CustomButton>
        </>
    )
    
    return (
        <div className="overlay" onClick={() => { toggleCartHidden() }}>
            <div className="cart-dropdown">
                {
                    cartItems.length ? cartWithItems : emptyCart
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))