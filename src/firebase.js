import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDsaJneEsu2c-805ApRtKW68PgiaBr9YQE",
  authDomain: "spltrproject.firebaseapp.com",
  databaseURL: "https://spltrproject.firebaseio.com",
  projectId: "spltrproject",
  storageBucket: "spltrproject.appspot.com",
  messagingSenderId: "427025200282",
  appId: "1:427025200282:web:ecec4d99169110f50d1b23",
  measurementId: "G-B104P7SX9W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
