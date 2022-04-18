import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        
        if(email === "" || password === ""){
            alert('Please enter all input fields')
        }else{
            localStorage.setItem('loginUser', JSON.stringify({email: email, password: password, isAuthenticated: true}))
            navigate('/home')
        }
    }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('loginUser'))){
            let user = JSON.parse(localStorage.getItem('loginUser'))
            if(user.isAuthenticated){
                navigate('/home')
            }
        }else{
            localStorage.setItem('loginUser', JSON.stringify({email: '', password: '', isAuthenticated: false}))
        }
        
    }, [])
    
    return (
    <>
        <form className='form'>
           <div className='form-field'>
               <label htmlFor='email'>Email:</label>
               <input type='text' name="email" id='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)}/>
           </div>

           <div className='form-field'>
               <label htmlFor='password'>Password:</label>
               <input type='text' name="password" id='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>

           <button type='submit' onClick={loginUser}>Login</button>
        </form>
    </>
  )
}

export default Login