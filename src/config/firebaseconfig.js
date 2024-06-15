import firebase from "firebase"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCD3bP3yYnP612q3IKKHXT0kXsm9aEhXDY",
    authDomain: "agendamento-6c679.firebaseapp.com",
    projectId: "agendamento-6c679",
    storageBucket: "agendamento-6c679.appspot.com",
    messagingSenderId: "405599573122",
    appId: "1:405599573122:web:9b8d68268b6a2996af109b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database