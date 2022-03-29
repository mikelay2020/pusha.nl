import React, { useState } from 'react'
import Link from 'react-router-dom/Link'
//import axios from "axios"
import './navbarOne.css'
import './authPage.css'


export const CreateUser = () => {

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHundler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <div>

            <ul>
            <li><Link to="/"> Home</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>

            <div className="form-auth">
                <div className="box">
                    {/* <h2>Зарегистрироваться</h2> */}

                    <form>
                        <label for="login">Login:</label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            placeholder="Enter your login"
                        />

                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                        <label for="typeId">ID:</label>
                        <input
                            type="text"
                            id="typeId"
                            name="typeId"
                            placeholder="Ener your ID"

                        />
                        <label for="Email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Ener your email"
                        />

                        <label for="name">Your name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                        />
                        <label for="surname">Surname:</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Enter your surname"
                        />

                        <button>Sign up</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
