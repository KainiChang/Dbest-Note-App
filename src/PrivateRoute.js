import React from 'react'
import{Outlet,Navigate} from "react-router-dom"
import{useContext} from "react"
import  {UserAuthContext} from "./App"


function PrivateRoute() {
  const {isAuth} =useContext(UserAuthContext) 
    console.log(isAuth)
  return  isAuth ? <Outlet /> : <Navigate to="login" /> ;
}

export default PrivateRoute
