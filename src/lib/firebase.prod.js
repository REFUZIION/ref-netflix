import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// somehow seed the database steps for later on

// config for firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmdq3CafLB_TmnLZybSoQjeKpgw2KOay4",
    authDomain: "netflixclone-8a5e0.firebaseapp.com",
    projectId: "netflixclone-8a5e0",
    storageBucket: "netflixclone-8a5e0.appspot.com",
    messagingSenderId: "824635687096",
    appId: "1:824635687096:web:57d68a164dfe3a3265744d"
  };

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };