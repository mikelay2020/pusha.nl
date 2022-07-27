import React from 'react'
import Link from 'react-router-dom/Link'

export const Rings = () => {
    return (
        <div>

            <nav>
                <div className="grey darken-2 nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/user"> Home</Link></li>
                        <li><Link to="/ring">Ring</Link></li>
                        <li><Link to="/skills">Skills</Link></li>

                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            </nav>
            <h1 className=""> Rinrs</h1>


        </div>
    )
}