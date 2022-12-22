import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyB8-rXYCxxazGPK6EOIAQaW25A-oruL4Zg",
    authDomain: "singinsingup-2565c.firebaseapp.com",
    databaseURL: "https://singinsingup-2565c-default-rtdb.firebaseio.com",
    projectId: "singinsingup-2565c",
    storageBucket: "singinsingup-2565c.appspot.com",
    messagingSenderId: "1072718454301",
    appId: "1:1072718454301:web:e383313d196e3f5544f0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth();

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    
  } else {
   
  }
});

logout.addEventListener('click',(e)=>{

   signOut(auth).then(() => {
     // Sign-out successful.
     toHomeLogOff()
     alert('user loged out');
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;

        alert(errorMessage);
   });

});