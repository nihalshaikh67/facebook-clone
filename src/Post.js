import React from 'react';
import './css/post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post_top">
                <div className="post_topLeft">
                  <Avatar src={props.photoURL}/>
                  <div className="postInfo">
                      <h4>{props.username}</h4>
                      <p>{props.timestamp}<PublicIcon/></p>
                  </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="post_middle">
                <p>{props.message}</p>
                {props.image &&  <img src={props.image}/>}
               
            </div>
            <div className="post_bottom">
                <div className="post_bottomOption">
                    <ThumbUpIcon/><p>Like</p>
                </div>
                <div className="post_bottomOption">
                    <ChatBubbleOutlineIcon/><p>Comment</p>
                </div>
                <div className="post_bottomOption">
                    <ShareIcon/><p>Share</p>
                </div>
            </div>


        </div>
        
    )
}

export default Post;
