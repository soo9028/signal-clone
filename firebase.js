import {initializeApp, getApps} from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getDoc } from 'firebase/firestore'
import { firebase } from '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDwBEAZdddfVYg3bHWJkWFiSDQyq5d6Ga4',
  authDomain: 'signal-clone-49ffc.firebaseapp.com',
  projectId: 'signal-clone-49ffc',
  storageBucket: 'signal-clone-49ffc.appspot.com',
  messagingSenderId: '76318123271',
  appId: '1:76318123271:web:73dbcd62a42108d480d1a2',
  measurementId: 'G-RVH86YZ8FX',
};

// if (!getApps().length) initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);

// passwordReset: email => {
//   return firebase.auth().sendPasswordResetEmail(email);
// }

// initialize firebase
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
};
