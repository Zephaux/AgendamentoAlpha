<<<<<<< HEAD
import "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
import "firebase/storage"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
=======
import firebase from "firebase"
import "firebase/storage"

>>>>>>> 49bf670c1b16de1c6328f489d4041d4ec3a06283

const firebaseConfig = {
    apiKey: "AIzaSyCD3bP3yYnP612q3IKKHXT0kXsm9aEhXDY",
    authDomain: "agendamento-6c679.firebaseapp.com",
    projectId: "agendamento-6c679",
    storageBucket: "agendamento-6c679.appspot.com",
    messagingSenderId: "405599573122",
    appId: "1:405599573122:web:9b8d68268b6a2996af109b"
  };

// Initialize Firebase
<<<<<<< HEAD
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database }
=======
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database
>>>>>>> 49bf670c1b16de1c6328f489d4041d4ec3a06283
