import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDBOtwraH6SP1kwtWDT6EP-ZvOdWWSML8",
    authDomain: "react-meeting-log.firebaseapp.com",
    databaseURL: "https://react-meeting-log.firebaseio.com",
    projectId: "react-meeting-log",
    storageBucket: "react-meeting-log.appspot.com",
    messagingSenderId: "221627550871",
    appId: "1:221627550871:web:8838139f769a63c7f72dd2",
    measurementId: "G-2QQ5VNXQW8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;