import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


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

singUp.addEventListener("click", (e) => {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;
  const age = document.getElementById('age').value;
  const cpf = document.getElementById('cpf').value;
  const cep = document.getElementById('cep').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        age: age,
        cpf: cpf,
        cep: cep
      })
      alert('User created!');

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
})

