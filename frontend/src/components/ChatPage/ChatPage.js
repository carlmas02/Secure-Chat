import React from 'react'
import ChatBody from '../ChatBody/ChatBody'
import ChatToggle from '../ChatToggle/ChatToggle'
import './chatpage.css'

const ChatPage = () => {
  return (
    <div className='main'>

     <div className='leftChat'>
            <ChatToggle />
     </div>
     
     <div className='chatBody'>
            <ChatBody />
     </div>
            
    </div>
  )
}

export default ChatPage 