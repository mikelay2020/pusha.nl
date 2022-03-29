import { BrowserRouter as Router } from 'react-router-dom'; // чтобы работал компонент Swich
import { useRoutes } from './route'
import './app.css'

function App() {
  const routes = useRoutes(true)
  
  return (

    <Router>
      <div>
        {routes}
      </div>
    </Router>

    
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