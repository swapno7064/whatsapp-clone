import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
const firebaseConfig = {
    apiKey: "AIzaSyBc57jmc_JLeJQWwrUKgm3Cs9szkbfjCLc",
    authDomain: "whatsapp-clone-b15be.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b15be.firebaseio.com",
    projectId: "whatsapp-clone-b15be",
    storageBucket: "whatsapp-clone-b15be.appspot.com",
    messagingSenderId: "645985724828",
    appId: "1:645985724828:web:752104847a68c008d5c059",
    measurementId: "G-FCW43GT8QX"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;