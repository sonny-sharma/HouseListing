import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCty1SdbkdgmK09Mb2M85yYb0CJ18G5-VI",
  authDomain: "house-listing-app-d4430.firebaseapp.com",
  projectId: "house-listing-app-d4430",
  storageBucket: "house-listing-app-d4430.appspot.com",
  messagingSenderId: "616995218957",
  appId: "1:616995218957:web:97b4223dcde3e167f71744"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()