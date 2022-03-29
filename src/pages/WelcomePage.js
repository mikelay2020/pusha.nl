import React from 'react'
import Link from 'react-router-dom/Link'

import './navbarOne.css'

export const WelcomePage = () => {
    return (
        <div>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>

            </ul>

            <h1 className="formSignIn">Welcome to our site</h1>

        </div>
    )
}