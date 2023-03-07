import React from 'react'
import './chattoggle.css'
// import logo from '../profile.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import ChatTile from '../ChatTile/ChatTile';

const ChatToggle = () => {
  return (
    <div className='chatttoggle' >
        
        <div className='topChatToggle secondary' >
            
            <div className='userNav' >
                
                <div>
                    img
                </div>

                <MoreVertIcon fontSize="small" />

            </div>

            <div className='searchUser'>
                
            
                <input  />

                <SearchIcon  sx={{ fontSize: 14 }} className = {"iconColor"} />
                
            </div>
            
        </div>

        <div className='bodyChatToggle' >
            

            <ChatTile  />

            <ChatTile />

            <ChatTile />
            <ChatTile />
            <ChatTile />


        </div>

    </div>
  )
}

export default ChatToggle