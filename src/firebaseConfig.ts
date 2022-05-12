import 'dotenv/config';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/storage';




const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain:process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };
  // Initialize Firebase
  export const FirebaseApp = firebase.initializeApp(firebaseConfig);
  export const FirebaseStorage = firebase.storage();
  export const FirebaseAnalytics = firebase.analytics();
  export default firebaseConfig;
  
  export async function openTreasure({name,team}: {
    name: string;
    team: string;

  }) {
    console.log("Creating user data");     
   // Create the associated user table
    const user=await FirebaseApp.firestore().collection("hunters").doc().set({
      Name: name,
      TeamName: team,
      FinishedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Created user data");
    return user;
  }