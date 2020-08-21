import firebase from "firebase";
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMwB21oIurnp401vcEjsAiU-N2ebhHohc",
    authDomain: "instagram-clone-react-af303.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-af303.firebaseio.com",
    projectId: "instagram-clone-react-af303",
    storageBucket: "instagram-clone-react-af303.appspot.com",
    messagingSenderId: "505402440583",
    appId: "1:505402440583:web:3a1925eef515fa89f9b122",
    measurementId: "G-D3DPSSN8KC"
});



const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//   export default db;
