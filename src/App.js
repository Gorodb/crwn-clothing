import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { setCurrentUser } from "./redux/user/user.actions"

import './App.css'
import Header from "./components/header"
import HomePage from "./pages/homepage"
import ShopPage from "./pages/shop-page"
import Authentication from "./pages/authentication"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

class App extends Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        const { currentUser } = this.props

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/signin" render={() => currentUser ? <Redirect to='/' /> : <Authentication /> } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({ user: { currentUser } }) => ({ currentUser })

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
