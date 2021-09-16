import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoEXYi4NA3eEvJ6AVfM4l5WWyvJuadiHE",
  authDomain: "slack-clone-eb3a4.firebaseapp.com",
  projectId: "slack-clone-eb3a4",
  storageBucket: "slack-clone-eb3a4.appspot.com",
  messagingSenderId: "660600773223",
  appId: "1:660600773223:web:06a4733eb572e8573c92c2",
  measurementId: "G-C4PDF383QK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };