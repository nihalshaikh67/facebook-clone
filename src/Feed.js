import React from 'react';
import './css/feed.css';
import Messagesender from './Messagesender';
import Storyreel from './Storyreel';
import Post from './Post';

const Feed = () => {
    return (
        <div className="feed">
         <Storyreel/>
         <Messagesender/>
        
        <Post photoURL = "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" image="" username="Salman Khan" timestamp = "4:12" message="This is text message"/>
        <Post photoURL = "https://images.unsplash.com/photo-1595288573661-d0e6a92d8616?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" image="https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" username="Jack John" timestamp = "8:45" message="This is a dummy text"/>
        <Post photoURL = "https://images.unsplash.com/photo-1595288573661-d0e6a92d8616?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" image="https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" username="Jack John" timestamp = "8:45" message="This is a dummy text"/>
         
        </div>
    )
}

export default Feed
