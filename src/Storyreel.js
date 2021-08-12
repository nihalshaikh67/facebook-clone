import { Avatar } from '@material-ui/core';
import React from 'react';
import './css/story.css';

const Storyreel = () => {
    return (
        <div className="storyreel">
            <div className="story" style={{backgroundImage:`url('https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`}}>
                <Avatar src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <h4>Natasha john</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`}}>
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <h4>Tom Cruise</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://images.unsplash.com/photo-1500629723675-4d6b0685936a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`}}>
                <Avatar src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <h4>Steve Harvy</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://images.unsplash.com/photo-1601730263526-229807bd34cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FsbWFuJTIwa2hhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`}}>
                <Avatar  src="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <h4>Allen Show</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://images.unsplash.com/photo-1621705471214-b1e0a2b42bcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbG1hbiUyMGtoYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`}}>
                <Avatar src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <h4>Cristien martin</h4>
            </div>
            
        </div>
    )
}

export default Storyreel
