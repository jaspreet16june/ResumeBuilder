import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyALwANOMtHInxBq3eqT_3hHPi8OAZSAuxw",
        authDomain: "resume-builder-6a6b2.firebaseapp.com",
        projectId: "resume-builder-6a6b2",
        storageBucket: "resume-builder-6a6b2.appspot.com",
        messagingSenderId: "98736755617",
        appId: "1:98736755617:web:3a9307aa238cbc3b9f31e0"
      };

firebase.initializeApp("configKey")

export const auth = firebase.auth();
export const firestore = firebase.firestore();


