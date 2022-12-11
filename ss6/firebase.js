
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
 import {getAuth} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
 import {getFirestore} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
 const firebaseConfig = {
   apiKey: "AIzaSyDa-LJMlwe_fnnRfeuf5-tnVyDVw6SD4kQ",
   authDomain: "mindx-blog1.firebaseapp.com",
   projectId: "mindx-blog1",
   storageBucket: "mindx-blog1.appspot.com",
   messagingSenderId: "88409828721",
   appId: "1:88409828721:web:e096d4d3e640140bd31ad0",
   measurementId: "G-ZGJ1J6LE29"
 };

 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth=getAuth(app);
 export const db=getFirestore(app);
 export const subsription=[];