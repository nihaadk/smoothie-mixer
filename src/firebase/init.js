import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBo7nb4a9tJygQC-rfAC-RqoadbzEGSK_I",
    authDomain: "smoothie-mixer.firebaseapp.com",
    databaseURL: "https://smoothie-mixer.firebaseio.com",
    projectId: "smoothie-mixer",
    storageBucket: "smoothie-mixer.appspot.com",
    messagingSenderId: "1083171233355"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore();