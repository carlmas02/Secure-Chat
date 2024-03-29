import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
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
                <input type="password" placeholder='Password'  />

                <div className='button' >
                   <h6>
                   Login
                   </h6>
                    
                </div>

            </div>

            <div className='bottomHomeDiv'  >
                <h6>
                Don't have an account? <Link to="/signup" >Sign up</Link> 
                </h6> 
            </div>

        </div>


        
    </div>
  )
}

export default HomePage