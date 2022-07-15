// проверка комита
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // чтобы работал компонент Swich
import { useRoutes } from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import './app.css'
import 'materialize-css'

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated =!!token
  const routes = useRoutes(isAuthenticated)
  
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated}}>
    <Router>
      <div>
        {routes}
      </div>
      </Router>

    </AuthContext.Provider>
    

    
  )
}

export default App;



/*
    const getDate =async (url)=>
    new Promise((resolve, reject)=>
      fetch(url)
      .then (response => response.json())
      .then (json => resolve(json))
      .catch (error => reject(error))
    )
    
    getDate('/api/v1/user/1')
    .then (data => console.log(data))
    .catch (error => console.log(error.message))
  */


  /*const [post , setGetRes] = useState([])
  
  async function getResponse () {
    const response = await axios.get ('api/v1/user/2')
    console.log (response)
    setGetRes (response.data)
  } 
  */

  /*         
             <div>
               <h1>Hello {post.LoginName}</h1>
               <button onClick ={getResponse}> Get запрос</button>
               <br/>
               
               <Mybutton>Пизда!</Mybutton>
   
               <p>LoginName = {post.LoginName}</p>
               <p>TypeId = {post.TypeId}</p>
               <p>ConnectedId = {post.ConnectedId}</p>
               <p>Password = {post.Password}</p>
             </div>
       */