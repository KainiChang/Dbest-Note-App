import React from 'react'
export default function Contact() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [error1, setError1] = React.useState(null);
  const [error2, setError2] = React.useState(null);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  React.useEffect(() => {
    isValidName()
  },
    [name]
  )

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  React.useEffect(() => {
    isValidEmail()
  },
    [email]
  )
  const nameValidator = /^[a-zA-Z]+$/
  const emailValidator = /^\S+@\S+\.\S+$/

  function isValidName() {

    if (name === "" || name === null) {
      setError1("please input valid name")
    } else {
      if (nameValidator.test(name) === false) { setError1("please input valid name") }
      else { setError1(null) }
    }
  }
  function isValidEmail() {
    if (email === "" || email === null) {
      setError2("please input valid email")
    } else {
      if (emailValidator.test(email) === false) { setError2("please input valid email") }
      else { setError2(null) }
    }
  }
  return (
    <div className='contactContainer'>
      <h1>Contact</h1>
      <form>
        <span>name*</span>
        <input type="text" onChange={handleNameChange}></input>
        {error1 !== null && <p className='err'>{error1}</p>}
        <span>email*</span>
        <input type="email" onChange={handleEmailChange}></input>
        {error2 !== null && <p className='err'>{error2}</p>}
        <span>title</span>
        <input type="text"></input>
        <span>your massages</span>
        <input type="text"></input>
        <button className={error1 === null && error2 === null ? "good" : "bad"}>Post Comments</button>
      </form>
    </div>
  )
}
