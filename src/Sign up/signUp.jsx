import React from 'react'
import'./signUp.css'
import signUpLogo from '../Assets/singUpLogo.png'
const SignUp = () => {
  return (
    <div className='signUpPage'>
        <div className="amazonImg"><img src={signUpLogo} alt="" /></div>
        <div className="inputForm">
          <h2 className='headSignUp'>Creat a new account</h2>
        <div className="inputItems">
          <input className="inputitem" type="text" placeholder='UserName'/>
           <input className="inputitem" type="email" placeholder='Email'/>
            <input className="inputitem" type="Password" placeholder='Password'/>
          
        </div>
        <div className="btncreat"><button>Creat account</button></div>
            

        </div>
    </div>
  )
}

export default SignUp;
