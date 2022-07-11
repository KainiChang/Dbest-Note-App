import './login.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export default function SignUp() {

  const emailValidator = /^\S+@\S+\.\S+$/

  const [signUpData, setSignUpData] = React.useState({
    email: "",
    password: ""
  })
  const [error, setError] = React.useState(null);

  function isValidEmail() {
    if (signUpData.email === "" || signUpData.email === null) {
      setError("please input valid email")
    } else {
      if (emailValidator.test(signUpData.email) === false) { setError("please input valid email") }
      else { setError(null) }
    }
  }

  React.useEffect(() => {
    isValidEmail()
  },
    [signUpData.email]
  )
  function handleChange(e) {
    console.log("change")
    const { type, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [type]: value }))
  }

  function handlesubmit ( e){
    e.preventDefault();
        console.log(signUpData.email,signUpData.password)
    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((cred)=>{console.log("user logined:"+cred.user)
      navigate("/")} 
      )
      .catch((err) => { console.log(err) })
      
  }

  const navigate = useNavigate();

  return (
    <main >
      <img src='./images/sign.png' alt='sign' />
      <div className='login-right'
      >
        <h2>Sign Up</h2>
        <form className='signup'>
          <span>Email address</span>
          <input type="email" onChange={handleChange} name='email'></input>
          {error !== null && <p className='err'>{error}</p>}
          <span>Password</span>
          <input type="password" onChange={handleChange} name='password'></input>
          <button onClick={handlesubmit}>Sign Up</button>
          <div className='signGuide'>
            already have an account?
            <a href='../login' onClick={() => navigate("login")} >  login here</a>
          </div>
        </form>

      </div>
    </main>
  )
}
