import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import { createContext ,useEffect,useState} from 'react';

export const UserAuthContext = createContext()

function IndexContext() {

    const [isAuth, setAuth] = useState(() => JSON.parse(localStorage.getItem("isAuth")) ||[])

    useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth))
}, [isAuth])

  return (
    <UserAuthContext.Provider value={{isAuth}}>
        <BrowserRouter className='main1'>
            <Routes>
                <Route element={<PrivateRoute />} >
                    <Route path="/" element={<App />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </UserAuthContext.Provider>
  )
}

export default IndexContext



