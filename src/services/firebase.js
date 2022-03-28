import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQEmb4VsWvulLrMYqGUCd2cxs2DouKFtM",
  authDomain: "capstone-m3.firebaseapp.com",
  projectId: "capstone-m3",
  storageBucket: "capstone-m3.appspot.com",
  messagingSenderId: "308594535655",
  appId: "1:308594535655:web:5b3ba823faaf5de2b90642",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth, app };
