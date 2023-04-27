import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div className= 'container' >
        
        <div className='homeDiv'>

            <div className='topHomeDiv' >
                
                <h5>
                    secureChat
                </h5>
            </div>
            
            <div className='midHomeDiv' >
                
                <input placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password'  />
                <input placeholder='Confirm Password'  />

                <div className='button' >
                   <h6>
                    Sign Up
                   </h6>    
                </div>
            </div>

            <div className='bottomHomeDiv'  >
                <h6>
                    Already have an account? <Link to="/login" >Login</Link> 
                </h6> 
            </div>
        </div>  
    </div>
  )
}

export default SignUpPage