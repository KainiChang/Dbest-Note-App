import './login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';




function Login() {
    const navigate = useNavigate();


    // function handleLoginIn(){
    //     setAuth(true)
    // }
    // function handleLoginOut(){
    //     setAuth(false)
    // }

    return (
        <main >
                <img src='./images/login.png' alt='login' />
                <div className='login-right'>
                    <h2>Account Login</h2>
                    <form>
                        <span>Email address</span>
                        <input type="email" ></input>
                        <span>Password</span>
                        <input type="password" ></input>
                        <button >Login</button>
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