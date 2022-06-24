// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALDCrSkEkRDvEBGckdasZvARXeTOeq9IM",
    authDomain: "media-blogs.firebaseapp.com",
    projectId: "media-blogs",
    storageBucket: "media-blogs.appspot.com",
    messagingSenderId: "169056897052",
    appId: "1:169056897052:web:7b52f6be4af1192c8cf7d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth