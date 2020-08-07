// const firebaseConfig = {
//     apiKey: "AIzaSyDqesGQGKrlKwBYsqerLbXMlFiqdZru6J4",
//     authDomain: "instagram-clone-7b1b3.firebaseapp.com",
//     databaseURL: "https://instagram-clone-7b1b3.firebaseio.com",
//     projectId: "instagram-clone-7b1b3",
//     storageBucket: "instagram-clone-7b1b3.appspot.com",
//     messagingSenderId: "1092688780282",
//     appId: "1:1092688780282:web:3c76a6eff6174b040ce243"
//   };

//   export default firebaseConfig

  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqesGQGKrlKwBYsqerLbXMlFiqdZru6J4",
    authDomain: "instagram-clone-7b1b3.firebaseapp.com",
    databaseURL: "https://instagram-clone-7b1b3.firebaseio.com",
    projectId: "instagram-clone-7b1b3",
    storageBucket: "instagram-clone-7b1b3.appspot.com",
    messagingSenderId: "1092688780282",
    appId: "1:1092688780282:web:3c76a6eff6174b040ce243"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage}