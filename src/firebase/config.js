import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiW7MTL1IDDnB8XZTk-TZ8CfyIZWFdf6Y",
  authDomain: "olx-clone-79e20.firebaseapp.com",
  projectId: "olx-clone-79e20",
  storageBucket: "olx-clone-79e20.appspot.com",
  messagingSenderId: "429777782128",
  appId: "1:429777782128:web:94668886861e5466bd7bb5",
  measurementId: "G-R8N36PD5LD"
};

 export default   firebase.initializeApp(firebaseConfig)