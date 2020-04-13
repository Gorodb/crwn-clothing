import React, { Component } from "react"

import './SignIn.scss'
import FormInput from "../form-input"
import CustomButton from "../custom-button"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends Component {
    initialState = { email: '', password: '' }

    state = this.initialState

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState(this.initialState)
        } catch (err) {
            console.log(err)
        }

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        autoFocus={true}
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn