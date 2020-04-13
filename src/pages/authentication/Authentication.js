import React from "react"

import './Authentication.scss'
import SignIn from "../../components/sign-in"
import SignUp from "../../components/sign-up"

const Authentication = () => {
    return (
        <div className="authentication">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication