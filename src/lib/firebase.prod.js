import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// somehow seed the database steps for later on

// config for firebase
const firebaseConfig = {
    apiKey: "AIzaSyBskjrcqhtdWy3o5BuFw4vlia235U5SVoQ",
    authDomain: "netflix-2-dd1da.firebaseapp.com",
    projectId: "netflix-2-dd1da",
    storageBucket: "netflix-2-dd1da.appspot.com",
    messagingSenderId: "397080975798",
    appId: "1:397080975798:web:121f329b46b79761120917"
  };

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };