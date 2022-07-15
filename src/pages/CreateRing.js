import React from 'react'
import Link from 'react-router-dom/Link'


import './navbarOne.css'


export const CreateRing = () => {
    return (
        <div>

            <nav>
                <div className="grey darken-2 nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/ring">Create ring</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            </nav>
            <h1 className="formSignIn"> Создаем колечки</h1>


        </div>
    )
}