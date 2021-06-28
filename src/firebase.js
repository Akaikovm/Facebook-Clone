import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsUgxDd7m7RdXrHAGfhcViHr_tKSzf_-M",
  authDomain: "facebook-clone-d8689.firebaseapp.com",
  projectId: "facebook-clone-d8689",
  storageBucket: "facebook-clone-d8689.appspot.com",
  messagingSenderId: "545806686503",
  appId: "1:545806686503:web:11a9d656aadb52ca217102",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
