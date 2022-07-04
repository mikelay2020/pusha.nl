import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import Link from 'react-router-dom/Link'
import 'materialize-css'

export const AuthPage = () => {
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


<<<<<<< HEAD
  const [post, setGetRes] = useState([])

  async function getResponse() {
    const response = await axios.get('api/v1/user/2')
    console.log(response)
    setGetRes(response.data)
=======
  useEffect(() => {
      window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
>>>>>>> a78ef49522bdec19cd031d36645f92d0ee5135da
  }

  const loginHandler = async () => {
      try {
          const data = await request('api/v1/signin', 'POST', { ...form })
          auth.login(data.token, data.userId)
     
      } catch (e) { }
  }
  return (
<<<<<<< HEAD
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
=======
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

                  <div className="card blue-grey darken-1">
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
>>>>>>> a78ef49522bdec19cd031d36645f92d0ee5135da
  )
}
