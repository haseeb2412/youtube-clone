import {intiliazeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpuo7w0tbRDgW0dsJ0EKYlKj2o4wAqBUw",
    authDomain: "clone-d20d6.firebaseapp.com",
    projectId: "clone-d20d6",
    storageBucket: "clone-d20d6.appspot.com",
    messagingSenderId: "638341016757",
    appId: "1:638341016757:web:8d3508b710f29ca88462fc",
    measurementId: "G-LEDT201KNT"
  };

  const app = intiliazeApp(firebaseConfig);
  const firestore = getFirestore(app);