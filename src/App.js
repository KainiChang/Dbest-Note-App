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
import { createContext } from 'react';
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";


export const UserAuthContext = createContext()

function App() {
    const [isAuth, setAuth] = React.useState(() => JSON.parse(localStorage.getItem("isAuth")) || false)
    // const isAuth=true
    // 

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setAuth(user ? true : false)
            console.log("user status changed: " + user)
        })
        localStorage.setItem("isAuth", JSON.stringify(isAuth))
    }, [isAuth])


    return (
        <div className='main'>
            <UserAuthContext.Provider value={{ isAuth }}>
                <BrowserRouter >
                    {isAuth && <Navbar />}

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









