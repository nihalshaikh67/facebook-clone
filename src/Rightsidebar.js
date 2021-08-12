import React from 'react';
import './css/right.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';


const Rightsidebar = () => {
    return (
        <div className="widget">
            <div className="widhget_header">
                <div className="widget_headerLeft">
                    <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="widget_body">
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Newton school</h4>
                </div>
                <div className="widget_bodyOptions mll0">
                    <NotificationsNoneIcon />
                    <p>1 Notification</p>
                </div>
                <div className="widget_bodyOptions mll0">
                    <VolumeUpIcon />
                    <p>Create promotions</p>
                </div>
            </div>
            <hr /><br />
            <div className="widhget_header">
                <div className="widget_headerLeft">
                    <h4>Contacts</h4>
                </div>
                <div className="widget_headerRight">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
                
            </div>
                <div className="widget_body">
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Ranveer valia</h4>
                </div>
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Tom hank</h4>
                </div>
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Imran Shaikh</h4>
                </div>
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Shadab Ali</h4>
                </div>
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Akshay Kumar</h4>
                </div>
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>Sahil khan</h4>
                </div>
                <div className="widget_bodyOptions">
                    <Avatar src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <h4>lulia venture</h4>
                </div>

            </div>
        </div>
    )
}

export default Rightsidebar