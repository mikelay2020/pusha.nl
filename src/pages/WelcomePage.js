import React from 'react'
import Link from 'react-router-dom/Link'
import 'materialize-css'

export const WelcomePage = () => {

    return (
        <div>
            <nav>
                <div className="grey darken-2 nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/signin">Sign in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
            <h1>Добро пожаловать на наш сайт</h1>
        </div>
    )
}


