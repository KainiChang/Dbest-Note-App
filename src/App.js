import React from "react";
import Home from './components/Home';
import Notes from './components/Notes';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import { createContext} from 'react';


export const UserAuthContext = createContext()

function App() {
    // const [isAuth, setAuth] = React.useState(true)
    const isAuth=true
    // () => JSON.parse(localStorage.getItem("isAuth")) ||[]
//     useEffect(() => {
//     localStorage.setItem("isAuth", JSON.stringify(isAuth))
// }, [isAuth])



    return (<div className='main'>
  <UserAuthContext.Provider value={{isAuth}}>
         <BrowserRouter >
            {isAuth&&<Navbar />}

            <Routes>
                  <Route element={<PrivateRoute />} >
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<PrivateRoute />} >
                  <Route path="notes" element={<Notes />} >
                  <Route path=":note" element={<Notes />} />
                  </Route>
                </Route>
                
                <Route element={<PrivateRoute />} >
                  <Route path="contact" element={<Contact />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
            </Routes>
            </BrowserRouter>
            </UserAuthContext.Provider>
            </div>
    )
}

export default App;


// useEffect,

// import{getAuth,createUserWithEmailAndPassword}from"firebase/auth"



    // const auth= getAuth()
    // const signupFrom=document.querySelector(".signup")
    // signupFrom.addEventListener("submit",(e)=>{
    //     e.preventDefault()
    //     const email=signupFrom.email.value
    //     const password= signupFrom.password.value
    //     createUserWithEmailAndPassword(auth,email,password)
    //     .then((cred)=>{console.log("user created:",cred.user)})
    //     .catch((err)=>{console.log(err.message)})
    // })




