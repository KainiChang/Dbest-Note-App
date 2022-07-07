import React from 'react'
import {NavLink} from "react-router-dom"

export default function Navbar(props) {

  return (
    <nav className='primNav'style={{width:props.toggle?"0px":"200px",minWidth:props.toggle?"0px":"200px"}} >

        <img src="./images/Logo.png" alt="logo"/>


        <NavLink to="/" >Home</NavLink>
         <NavLink to="notes">Notes</NavLink>
        <NavLink to="contact">Contact</NavLink>
    </nav>
  )
}
