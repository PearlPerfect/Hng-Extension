// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8Wtwz3F8UwK3NUDwRcjqZBvnlEp9IXR0",
  authDomain: "etension-authentication.firebaseapp.com",
  projectId: "etension-authentication",
  storageBucket: "etension-authentication.appspot.com",
  messagingSenderId: "935800993712",
  appId: "1:935800993712:web:953868a64622f677c84875",
  measurementId: "G-RMKRB6GD4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}