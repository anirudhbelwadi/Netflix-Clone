import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBg8m8bOGlKISjuRe8INoaw4RO-R3NYCOs",
    authDomain: "netflix-clone-63163.firebaseapp.com",
    projectId: "netflix-clone-63163",
    storageBucket: "netflix-clone-63163.appspot.com",
    messagingSenderId: "604261123662",
    appId: "1:604261123662:web:9e00a888fe60eddf0fe51f",
    measurementId: "G-TNLTLDW6B5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth }
export default db;