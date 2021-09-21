// import firebase from 'firebase/app';
import firebase from 'firebase'; 

// import 'firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCHQ5SZbybHPFkrMitOSsX24BY7zbSRsUY",
    authDomain: "e-commerce-react-9a9ce.firebaseapp.com",
    projectId: "e-commerce-react-9a9ce",
    storageBucket: "e-commerce-react-9a9ce.appspot.com",
    messagingSenderId: "537950293114",
    appId: "1:537950293114:web:26fd4047b1e05b80b23fc3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {

    auth,
};