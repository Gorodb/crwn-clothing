import React, { Component } from "react"

import './SignUp.scss'
import FormInput from "../form-input"
import CustomButton from "../custom-button"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

class SignUp extends Component {
    initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    state = this.initialState

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            this.setState(this.initialState)
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label={'Display name'}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label={'Email'}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label={'Password'}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label={'Confirm password'}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp