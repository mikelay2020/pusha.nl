import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import Link from 'react-router-dom/Link'
import './authPage.css'


export const CreateUser = () => {

    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        LoginName: '',
        Email: '',
        Password: '',
        Name:  '',
        Surname: '',
        TypeId: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler1 = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/v1/user', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    return (
        <div>
            <nav>
                <div className="grey darken-2 nav-wrapper">
                    <a href="#" className="brand-logo">Pusha.nl</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/signin">Sign in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Регистрация</span>
                            <div className="input-field">
                                <input placeholder="Введите Логин"
                                    id="Login"
                                    type="text"
                                    name="Login"
                                    onChange={changeHandler1}
                                />
                                <label htmlFor="email"></label>
                            </div>
                            <div>
                                <div className="input-field">
                                    <input placeholder="Введите Email"
                                        id="LoginName"
                                        type="text"
                                        name="LoginName"
                                        onChange={changeHandler1}
                                    />
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="input-field">
                                    <input placeholder="Введите пароль"
                                        id="Password"
                                        type="Password"
                                        name="Password"
                                        onChange={changeHandler1}
                                    />
                                    <label htmlFor="password"></label>
                                </div>
                                <div className="input-field">
                                    <input placeholder="Введите имя"
                                        id="Name"
                                        type="text"
                                        name="Name"
                                        onChange={changeHandler1}
                                    />
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="input-field">
                                    <input placeholder="Введите Фамилию"
                                        id="Surname"
                                        type="text"
                                        name="Surname"
                                        onChange={changeHandler1}
                                    />
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="input-field">
                                    <input placeholder="Введите TypeID"
                                        id="TypeID"
                                        type="text"
                                        name="TypeID"
                                        onChange={changeHandler1}
                                    />
                                    <label htmlFor="email"></label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn gray darken-1"
                                onClick={registerHandler}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
