// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

initializeApp({
    apiKey: 'AIzaSyCwMu74OxlAXD58xW_SM7isTSqU_YOdhdE',
    authDomain: 'bodra-constructor-sandbox.firebaseapp.com',
    projectId: 'bodra-constructor-sandbox',
    storageBucket: "bodra-constructor-sandbox.appspot.com",
});

export const firestore = getFirestore();
