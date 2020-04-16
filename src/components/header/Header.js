import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectCartHidden } from "../../redux/cart/cart.selector"
import { selectCurrentUser } from "../../redux/user/user.selector"

import './Header.scss'
import { ReactComponent as Logo } from '../../assets/svg-images/crown.svg'
import CartIcon from "../cart-icon"
import CartDropdown from "../cart-dropdown"

import { auth } from "../../firebase/firebase.utils"

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="./shop">SHOP</Link>
                <Link className="option" to="./contact">CONTACT</Link>
                {
                    currentUser
                        ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link className="option" to="./signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }

        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
