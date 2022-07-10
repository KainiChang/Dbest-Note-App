import './login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const navigate=useNavigate();

  return (
    <main >
      <img src='./images/sign.png' alt='sign'/>
      <div className='login-right'
      >
        <h2>Sign Up</h2>
        <form>
            <span>Email address</span>
            <input type="email" ></input>
            <span>Password</span>
            <input type="password" ></input>
            <button>Sign Up</button>
            <div className='signGuide'>
            already have an account?  
            <a href='../login' onClick={()=>navigate("login")} >  login here</a>
            </div>
        </form>
    
      </div>
    </main>
  )
}
