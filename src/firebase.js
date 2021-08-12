import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB9ezUPEWw08iwIQZKe9ecohQuduMyekzg",
    authDomain: "fb-clone-dd7ba.firebaseapp.com",
    projectId: "fb-clone-dd7ba",
    storageBucket: "fb-clone-dd7ba.appspot.com",
    messagingSenderId: "275632632583",
    appId: "1:275632632583:web:450794a53994a05d8a4ba2"
  });


  const auth = firebase.auth();

  const provider = new firebase.auth.FacebookAuthProvider();


  export {auth , provider}