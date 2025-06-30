import React from 'react'
import './signin.css'; // Assuming you have a CSS file for styling
import signInLogo from '../Assets/singUpLogo.png'
const SignIn = () => {
  return (
    <div className='container'>
        <div className='logo'>
            <img src={signInLogo} alt="" />
        </div>
        <div className='signin'>
            <h1>Sign In</h1>
            <div className="inputitems">
                   <div className='form-group'><input type='email' id='email' name='email' required placeholder='Email:'/></div>
                <div className='form-group'><input type='password' id='password' name='password' required placeholder='Password:' /></div>
            </div>
            <div className="btn-signin"><button type='submit'>Sign In</button></div>
            <p className='signUptext'>Don't have an account? <a href='/signup'>Sign Up</a></p>
            <p className='forgettext'><a href='/forgot-password'>Forgot Password?</a></p>
        </div>
      
    </div>
  )
}

export default SignIn;
