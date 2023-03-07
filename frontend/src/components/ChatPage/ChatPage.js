import React from 'react'
import MessageTile from '../MessageTile/MessageTile'
import './chatpage.css'
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ChatPage = () => {
  return (
    <div className='' >
      
      <div className='topChatPage secondary'>
        <h1>Varad</h1>
      <MoreHorizIcon  className='iconColor' />  
      </div>

      <div className='bodyChatPage'>

        <MessageTile type = 'sent' data = "Hello world" />
        <MessageTile data = "Hello varad" />
        <MessageTile type = 'sent' data = "Hello world this is coding " />
        <MessageTile type = 'sent' data = "lets go " />
        <MessageTile type = 'sent' data = "Enjoy" />
        <MessageTile data = "I may have to leave !" />
        <MessageTile type = 'sent' data = "Hello world" />
        <MessageTile data = "Hello varad" />
        <MessageTile type = 'sent' data = "Hello world this is coding " />
        <MessageTile type = 'sent' data = "lets go " />
        <MessageTile type = 'sent' data = "Enjoy" />
        <MessageTile data = "I may have to leave !" /><MessageTile type = 'sent' data = "Hello world" />
        <MessageTile data = "Hello varad" />
        <MessageTile type = 'sent' data = "Hello world this is coding " />
        <MessageTile type = 'sent' data = "lets go " />
        <MessageTile type = 'sent' data = "Enjoy" />
        <MessageTile data = "I may have to leave !" />



      </div>

      <div className='footerInput secondary'>
        <input placeholder='Type a message' />
        <SendIcon  sx={{ fontSize: 16 }} className = {'iconColor'} />
      </div>
      
    </div>
  )
}

export default ChatPage