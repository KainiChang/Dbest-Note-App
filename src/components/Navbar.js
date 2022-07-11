import React from 'react'
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { UserAuthContext } from "../App"
import { signOut } from 'firebase/auth'
import { auth } from "../firebase-config";

export default function Navbar(props) {
  
  const {isAuth} =useContext(UserAuthContext) 
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    signOut(auth)
      .then((cred)=>{
        console.log("user logined:"+cred.user)
        navigate("login")} )
      .catch((err) => { console.log(err) })
      
  }
  
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav className='primNav'style={{width:toggle?"0px":"200px"}} >
        <img src="./images/Logo.png" className="primNa--img1" alt="logo"/>

        <img src={toggle ? "./images/false.png" : "./images/true.png"} onClick={() => setToggle(prev => !prev)} className="primNa--img2" alt="btn" />


        <NavLink to="/" >Home</NavLink>
         <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {isAuth&&<button className='logout'onClick={handleClick}>log out</button>}
    </nav>
  )
}
