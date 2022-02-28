// import firebase from "firebase/compat/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyC44aY2qeVVIvwiH2RhcoqyQdkcpUKeCYY",
//     authDomain: "linkedin-clone-7f64f.firebaseapp.com",
//     projectId: "linkedin-clone-7f64f",
//     storageBucket: "linkedin-clone-7f64f.appspot.com",
//     messagingSenderId: "82896986594",
//     appId: "1:82896986594:web:bdd90392e7381164afd9bb"
//   };


// const firebaseApp = firebase.initializeApp (firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {db,auth};

// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC44aY2qeVVIvwiH2RhcoqyQdkcpUKeCYY",
//   authDomain: "linkedin-clone-7f64f.firebaseapp.com",
//   projectId: "linkedin-clone-7f64f",
//   storageBucket: "linkedin-clone-7f64f.appspot.com",
//   messagingSenderId: "82896986594",
//   appId: "1:82896986594:web:bdd90392e7381164afd9bb"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = auth()
// const db = app.automaticDataCollectionEnabledO();
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC44aY2qeVVIvwiH2RhcoqyQdkcpUKeCYY",
  authDomain: "linkedin-clone-7f64f.firebaseapp.com",
  projectId: "linkedin-clone-7f64f",
  storageBucket: "linkedin-clone-7f64f.appspot.com",
  messagingSenderId: "82896986594",
  appId: "1:82896986594:web:bdd90392e7381164afd9bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseAppp.firestore();
const auth = fiebase.auth();

export {db,auth};