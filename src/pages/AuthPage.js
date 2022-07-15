import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import Link from 'react-router-dom/Link'
import 'materialize-css'

export const AuthPage = () => {
    // так работало
    //     const [form, setForm] = useState({
    //         LoginName: '', Password: ''
    //     })
    //     const changeHandler = event => {
    //         setForm({ ...form, [event.target.name]: event.target.value })
    //     }

    //     function sendRecuest() {
    //         const headers = {
    //             'Content-Type': 'application/json'
    //         }
    //         return fetch('api/v1/signin', {
    //             method: 'POST',
    //             body: JSON.stringify({...form}),
    //             headers: headers
    //         }).then(response => {
    //             if (response.ok) {
    //                 return response.text()
    //             }
    //             authification = true
    //             return response.text().then(error => {
    //                 const e = new Error('ашыпка')
    //                 e.data = error
    //                 throw e
    //             })
    //         })


    //     }
    // const body = {
    //     LoginName: "Spiderman",
    //     Password: "123"
    // }
    // sendRecuest('POST', recuestUrl, body)

    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        LoginName: '', Password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
           const data = await request('/api/v1/signin', 'POST', { ...form })
           auth.login(data.Token, data.LoginName)
           console.log (data)
           console.log (data.Token)

        } catch (e) { }
    }



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


            <div className="row">
                <div className="col s6 offset-s3">

                    <div className="card blue-grey darken-3">
                        <div className="card-content white-text">
                            <span className="card-title">Авторизация</span>
                            <div>
                                <div className="input-field">
                                    <input placeholder="Введите Email"
                                        id="LoginName"
                                        type="text"
                                        name="LoginName"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="input-field">
                                    <input placeholder="Введите пароль"
                                        id="Password"
                                        type="Password"
                                        name="Password"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="password"></label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn gray darken-1"
                                onClick={loginHandler}
                            >
                                Войти
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
