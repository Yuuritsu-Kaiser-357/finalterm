 // LOGIN PAGE
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
 import { getAuth,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA0WslF1bFIw9-VMkKBrfff2aa_mdIXAtY",
   authDomain: "abcd-f65c8.firebaseapp.com",
   databaseURL: "https://abcd-f65c8-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "abcd-f65c8",
   storageBucket: "abcd-f65c8.appspot.com",
   messagingSenderId: "986090065973",
   appId: "1:986090065973:web:caa3fb6ed46739a14e617c",
   measurementId: "G-L89GR3FRKG"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 document.getElementById('signin').addEventListener('click', test)
 function test(){
    let usernameoremail=document.getElementById("usernameoremail1").value 
    let password=document.getElementById("password1").value 
    signInWithEmailAndPassword(auth, usernameoremail, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   Swal.fire('Đăng nhập thành công')
   window.location.href="home.html"
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   Swal.fire(errorMessage)
   // ..
 });}
 onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    window.location.href="home.html"
    // ...
  } else {
  }
});

