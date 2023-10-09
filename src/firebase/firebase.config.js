// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('inside fairevsei', import.meta.env.VITE_APIKEY)
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBBsQfl_K2WKABNVsDaXaqWDzuArluvpgU",
  authDomain: "assaignment-9-a805d.firebaseapp.com",
  projectId: "assaignment-9-a805d",
  storageBucket: "assaignment-9-a805d.appspot.com",
  messagingSenderId: "1049637090002",
  appId: "1:1049637090002:web:114cff204dce97dc25f30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;