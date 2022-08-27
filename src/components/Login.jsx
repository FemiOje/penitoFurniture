import React, { useState} from 'react'
import '../styles/Login.css'

const Login = () => {
    const [ loginData, setLoginData ]= useState(
        {
            username: "",
            password: "",
            rememberPassword: false
        })

    function handleChange(event) {
         setLoginData( (prevData)=> { 
            return { 
                ...prevData, 
                [event.target.name]: ((event.target.type === "checkbox") ? event.target.checked : event.target.value)}
         })
    }
    function handleSubmit() {
        // 
    }
  return (
    <section id='login'>
        <form>
            <h2>Log In</h2>

            <label htmlFor="username">Username</label>
            <br />
            <input 
            type="text" 
            id="username" 
            name="username"
            value={loginData.username}
            onChange={(e)=> handleChange(e)}
            />

            <br />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" 
            id="password" 
            name="password"
            value={loginData.password}
            onChange={(e)=> handleChange(e)}
            />

            <br />
            <br />

            <input 
            type="checkbox" 
            name="rememberPassword" 
            value={loginData.rememberPassword}
            id="rememberPassword"
            onChange={(e)=> handleChange(e)} />
            <label htmlFor="rememberPassword">Remember Password</label>

            <br />
            <br />

            <button 
            className='login--button'
            onSubmit={(e)=> handleSubmit(e)}> 
                Log In
            </button>
        </form>
        <p>Username: {loginData.username}</p>
        <p>Password: {loginData.password}</p>
        <p>RememberPasword: {loginData.rememberPassword ? "True": "False"}</p>
    </section>
  )
}

export default Login