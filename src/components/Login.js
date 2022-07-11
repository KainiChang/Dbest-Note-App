import './login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword}from"firebase/auth";
import { auth } from "../firebase-config";
function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
      })
    
      function handleChange(e) {
        console.log("change")
        const { type, value } = e.target;
        setLoginData((prev) => ({ ...prev, [type]: value }))
      }
    
      function handleSubmit(e) {
        e.preventDefault();
                console.log(loginData.email,loginData.password)
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
          .then((cred)=>{console.log("user logined:"+cred.user)
          navigate("/")} )
          .catch((err) => { console.log(err) })
          
      }

    return (
     
        <main >
        
                <img src='./images/login.png' alt='login' />
                <div className='login-right'>
                    <h2>Account Login</h2>
                    <form className='login'>
                        <span>Email address</span>
                        <input type="email" name='email'onChange={handleChange}></input>
                        <span>Password</span>
                        <input type="password" name='password'onChange={handleChange}></input>
                        <button onClick={handleSubmit}>Login</button>
                        <div className='signGuide'>
                            don't have account?
                            <a href='../sign-up' onClick={() => navigate("sign-up")} >  sign up here</a>
                        </div>
                    </form>
                </div>

        </main>
    )
}
export default Login