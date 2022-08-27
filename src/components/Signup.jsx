import React, { useState } from 'react'
import '../styles/Signup.css'

const Signup = () => {
    const [ signUpData, setSignUpData ] = useState({
        username: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
    })

    function handleChange(event) {
        setSignUpData( (prevData)=> { 
           return { ...prevData, [event.target.name]: event.target.value}
        })
   }

   function handleSubmit() {
    // 
   }
  return (
    <section id="sign--up">
        <form>
            <h2>Create Account</h2>
            
            <label htmlFor="username">Create Username</label>
            <br />
            <input 
            id="username"
            type="username" 
            name="username"
            value={signUpData.username}
            onChange= {(e)=> handleChange(e)}
            />

            <br />
            <br />

            <label htmlFor="emailAddress">Enter email address</label>
            <br />
            <input type="email" 
            name="emailAddress" 
            id="emailAddress"
            value={signUpData.emailAddress} 
            onChange={(e)=> handleChange(e)}
                />

            <br />
            <br />

            <label htmlFor="password">Enter Password</label>
            <br />
            <input 
            type="password" 
            name="password"
            value={signUpData.password} 
            id="password" 
            onChange={(e)=> handleChange(e)}
            />

            <br />
            <br />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input 
            type="confirmPassword" 
            name="confirmPassword"
            value={signUpData.confirmPassword} 
            id="confirmPassword" 
            onChange={(e)=> handleChange(e)}
            />

            <br />
            <br />

            <button 
            className='signup--button'
            onClick={(e)=> handleSubmit(e)}>Create Account</button>
        </form>
        <p>Username: {signUpData.username}</p>
    </section>
  )
}

export default Signup