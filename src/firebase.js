import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{ getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWgYEQRowpM8jj2ww2L7HcyBmJbwzwJEs",
    authDomain: "react-chat-5d9c8.firebaseapp.com",
    projectId: "react-chat-5d9c8",
    storageBucket: "react-chat-5d9c8.appspot.com",
    messagingSenderId: "689946330239",
    appId: "1:689946330239:web:884a85cd0174df50df2b4a"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);

  //cambiar las reglas de seguridad 
  //https://console.firebase.google.com/u/0/project/react-chat-5d9c8/firestore/rules