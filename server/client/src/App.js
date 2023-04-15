import React, { useReducer } from 'react'
import  './App.css';
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import { createContext } from 'react';
import { initialState,reducer } from '../src/reducer/UseReducer';

export const UserContext =createContext()




const Routing =()=>{
  return(
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='*' element={<Errorpage/>}/>
    <Route path='/logout' element={<Logout />}/>
    </Routes>
  )
 }


const App = () => {
  //context api
  const [state,dispatch]=useReducer(reducer,initialState)
   
  
  return (

    <>
<UserContext.Provider value={{state,dispatch}}>
 
      <Navbar />
      <Routing/>

      </UserContext.Provider>
{/* 
     
      </Route>

      <Route path='/contact'>
      <Contact />
      </Route>

      <Route path='/login'>
      <Login />
      </Route>

      <Route path='/signup'>
      <Signup />
      </Route> */}
    </>
  )
}

export default App