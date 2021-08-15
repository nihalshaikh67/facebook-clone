import { Avatar, IconButton, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import './css/messagesende.css';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import VideoCallIcon from '@material-ui/icons/VideoCall';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { lightGreen } from '@material-ui/core/colors';
import { useStateValue } from './Stateprovider';
import { db , storage } from './firebase';
import firebase from 'firebase';


const Messagesender = () => {
    const [{ user }, dispatch] = useStateValue();

    const [open, setOpen] = useState(false);

    const [image,setImage] = useState("");

    const [message,setMessage] = useState("");
    const [progress,setProgress]  =useState(0)

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const uploadFileWithClick = () => {
        document.getElementById("imageFile").click()
    }

    const handleChange = (e) =>{
           if(e.target.files[0])
           {
               setImage(e.target.files[0]);
           }
      
    }

    const handleUpload =(e)=>{
        e.preventDefault();
        if(image ===""){
            db.collection("posts").add({
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                message : message,
                username : "Nihal Shaikh",
                photoURL: "https://media-exp1.licdn.com/dms/image/C5603AQHQxjjVGlBRnw/profile-displayphoto-shrink_100_100/0/1616425669542?e=1634774400&v=beta&t=hvgz5ChGDYr8HYNjQ3NO4VAyS7KajX-un4QrasyTtNw"
            })
        }
        else{
         const uploadTask = storage.ref(`images/${image.name}`).put(image);
         uploadTask.on(
             "state_changed",
             (snapshot)=>{
               const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
               setProgress(progress);
             },
             (error)=>{
                 console.log(error);
                 alert(error.message);
             },
             ()=>{
                 storage.ref("images").child(image.name).getDownloadURL().then(url=>{
                    db.collection("posts").add({
                        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                        message : message,
                        username : "Nihal Shaikh",
                        photoURL:"https://media-exp1.licdn.com/dms/image/C5603AQHQxjjVGlBRnw/profile-displayphoto-shrink_100_100/0/1616425669542?e=1634774400&v=beta&t=hvgz5ChGDYr8HYNjQ3NO4VAyS7KajX-un4QrasyTtNw",
                        image :url
                    });
                    handleClose();
                    setMessage("");
                    setImage("");
                    setProgress(0);
                 })
             }
         )
        }
       
    }


    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className="modal_pop">
                    <form>
                        <div className="modalHeading">
                            <h3>Create Post</h3>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="modalHeader_top">
                        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHQxjjVGlBRnw/profile-displayphoto-shrink_100_100/0/1616425669542?e=1634774400&v=beta&t=hvgz5ChGDYr8HYNjQ3NO4VAyS7KajX-un4QrasyTtNw"/>
                    <h5>Nihal Shaikh</h5>
                        </div>
                        <div className="modalBody">
                            <textarea rows="5" placeholder="What's on your mind Nihal ? " onChange={e=>setMessage((e.target.value))} >{message}</textarea>
                        </div>
                        <div className="modalFooter">
                            <div className="modalFooter_Left">
                                <h4>Add to your post</h4>
                            </div>
                            <div className="modalFooter_Right">
                                <IconButton onClick={uploadFileWithClick}>
                                    <PhotoLibraryIcon fontSize="large" style={{ color: 'green' }} />
                                </IconButton>
                                <input type="file" id="imageFile" onChange={handleChange} style={{ display: 'none' }} />
                                <IconButton>
                                    <VideoCallIcon fontSize="large" style={{ color: 'red' }} />
                                </IconButton>
                                <IconButton>
                                    <InsertEmoticonIcon fontSize="large" style={{ color: '#ffb100' }} />
                                </IconButton>
                            </div>
                        </div>
                     {image !=="" &&   <h2 style={{fontSize:"15px",marginBottom:"20px",color:"green"}}>Image is added and will be displayed after clicking on post button</h2>}
                        {
                            progress !="" &&    <progress value={progress} max="100" style={{width:"100%",marginBottom:"20px"}}/>
                        }
                     
                        <input type="submit" onClick={handleUpload} className="post_submit" value="POST"></input>
                    </form>
                </div>
            </Modal>
            <div className="messageSender">

                <div className="messageSender_top">

                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHQxjjVGlBRnw/profile-displayphoto-shrink_100_100/0/1616425669542?e=1634774400&v=beta&t=hvgz5ChGDYr8HYNjQ3NO4VAyS7KajX-un4QrasyTtNw"/>
                   
                    <form>
                        <input type="text" placeholder="What's on your mind Nihal" onClick={handleOpen} />
                    </form>
                </div>

                <div className="messageSender_bottom">

                    <div className="messangerOption">
                        <VideoCallIcon style={{ color: 'red' }} fontSize="large" />
                        <p>Live Video</p>
                    </div>

                    <div className="messangerOption">
                        <PhotoLibraryIcon style={{ color: 'lightgreen' }} fontSize="large" />
                        <p>Photo/Video</p>
                    </div>

                    <div className="messangerOption">
                        <InsertEmoticonIcon style={{ color: '#ffb100' }} fontSize="large" />
                        <p>Feeling/Activity </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Messagesender;
