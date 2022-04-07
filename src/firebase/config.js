import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC1tM2ys6aGijINSntjVCJTGum2iL3EFeA",
    authDomain: "mymoney-24-7.firebaseapp.com",
    projectId: "mymoney-24-7",
    storageBucket: "mymoney-24-7.appspot.com",
    messagingSenderId: "716023912051",
    appId: "1:716023912051:web:ef031cd7148a305155fc06"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }