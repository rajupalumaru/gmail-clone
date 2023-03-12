import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqgvwdXBDrvK8kXZLhFN-5E-p7hW4pG0w",
    authDomain: "clone-87847.firebaseapp.com",
    projectId: "clone-87847",
    storageBucket: "clone-87847.appspot.com",
    messagingSenderId: "737102706755",
    appId: "1:737102706755:web:13679dddda8ace97887cf6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;