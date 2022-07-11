import React from 'react'
import {NavLink} from "react-router-dom"

export default function Navbar(props) {
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav className='primNav'style={{width:toggle?"0px":"200px"}} >
        <img src="./images/Logo.png" className="primNa--img1" alt="logo"/>

        <img src={toggle ? "./images/false.png" : "./images/true.png"} onClick={() => setToggle(prev => !prev)} className="primNa--img2" alt="btn" />


        <NavLink to="/" >Home</NavLink>
         <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}
