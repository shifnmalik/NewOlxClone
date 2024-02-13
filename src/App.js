import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import { AuthContext, FirebaseContext } from './store/Context'
import Create from './Pages/Create'
import view from './Pages/ViewPost'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext'


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>
<Post>
      <Router>
        <Route exact path='/' >
      <Home/>
      </Route>
      <Route exact path='/React-Olx-Clone' >
      <Home/>
      </Route>
      <Route  path='/signup' >
      <Signup/>
      </Route>
      <Route  path='/login' >
      <Login />
      </Route>
      <Route  path='/create' >
      <Create />
      </Route>
      <Route  path='/view' >
      <ViewPost />
      </Route>
      </Router>
      </Post>
    </div>
   ) ;

}

export default App;
