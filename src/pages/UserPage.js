import React from 'react'
import Link from 'react-router-dom/Link'


export const UserPage = () => {
    // const auth = useContext(AuthContext)
    // const logoutHandler = event =>{
    //     event.preventDefault()
    //     auth.logout()
    // }

    return (
        <div>
            <nav>
                <div className="grey darken-2 nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/user"> Home</Link></li>
                        <li><Link to="/ring">Create ring</Link></li>
                        <li><Link to="/skills">Skills</Link></li>

                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            </nav>
            <h1 className="formSignIn">Домашняя страница авторизованного пользователя</h1>

        </div>
    )
}

