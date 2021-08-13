import React from 'react'
import './css/login.css'
import { auth, provider } from './firebase'
import logo from './images/logo.png'
import { useStateValue } from './Stateprovider'

const Login = () => {
const[{user}, dispatch] = useStateValue();
const signIn = ()=>{
    auth.signInWithPopup(provider).then(result=>{
        alert("hello");
          var credential = result.credential;
          alert("hello1");
          const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;
          alert("hello2");
           dispatch({
               type:"SET_USER",
               user:{
                   displayName : result.user.displayName,
                   photoURL:photoURL
               }
           })
           alert("hello3");
    },error=>{
        console.log(error);
        alert("hello4");
    } ).catch(error=>{
        console.log(error);
        alert("hello4");
    })
}

    return (
        <div className="login_wrapper">
        <div className="login">
            <img src={logo} alt="img"/>
            <h2>Sign In with Facebook</h2>
            <button onClick={signIn}>Login with Facebook.</button>
        </div>
    </div>
    )
}

export default Login
