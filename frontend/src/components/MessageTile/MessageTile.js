import React from 'react'
import './messagetile.css'

const MessageTile = ({type,data}) => {
  


  return (

    <div className={`msgbody ${type} `} > 
       
        <div className= "msg" >

            <h5>{data}</h5> 

            <h6 style={{color:"#e45858"}} >9:00pm</h6>

        </div>


    </div>
    
  )
}

export default MessageTile