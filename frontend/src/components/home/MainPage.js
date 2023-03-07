import React from 'react'
import ChatPage from '../ChatPage/ChatPage'
import ChatToggle from '../ChatToggle/ChatToggle'
import './mainpage.css'

const MainPage = () => {
  return (
    <div className='main'>

     <div className='leftChat '>
            <ChatToggle />
     </div>
     
     <div className='chatBody'>
            <ChatPage />
     </div>

            
    </div>
  )
}

export default MainPage