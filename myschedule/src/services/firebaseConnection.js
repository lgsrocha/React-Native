import firebase, {getApps, getApp, initializeApp } from "firebase/app";
import "firebase/auth"
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

let firebaseConfig = {
    apiKey: "AIzaSyBg4zsLy44A8U1NsDXiEqHc5pz1ieD_1m0",
    authDomain: "myschedule-6df62.firebaseapp.com",
    projectId: "myschedule-6df62",
    storageBucket: "myschedule-6df62.appspot.com",
    messagingSenderId: "306969928956",
    appId: "1:306969928956:web:613001f4b9cdac33156379",
    measurementId: "G-XVPMNJ0T1F"
  };

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth()
export const database = getDatabase()

export default firebase;

