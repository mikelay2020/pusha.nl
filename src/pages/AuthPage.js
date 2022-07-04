import React, { useState } from 'react'
import Link from 'react-router-dom/Link'

import axios from "axios"
import './navbarOne.css'
import './authPage.css'
// переделать a на link


export const AuthPage = () => {

  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHundler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }



  const [post, setGetRes] = useState([])

  async function getResponse() {
    const response = await axios.get('api/v1/user/2')
    console.log(response)
    setGetRes(response.data)
  }

  return (
    <div>
      <ul>
      <li><Link to="/"> Home</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
      </ul>

      <div className="form-auth">
        <h2>Авторизоваться</h2>

        <form>
          <label for="Email">Ваше мыло:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Введите ваше Мыло"
          />

          <label for="password">Ваш пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
          />

          <button>Войти</button>
        </form>

      </div>



  <div className="formSignIn">
        <h1>Hello {post.LoginName}</h1>
        <button onClick={getResponse}> Get запрос</button>
        <p>LoginName = {post.LoginName}</p>
        <p>TypeId = {post.TypeId}</p>
        <p>ConnectedId = {post.ConnectedId}</p>
        <p>Password = {post.Password}</p>
      </div>


    </div>
  )
}
