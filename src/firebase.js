import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAjsj9ryllUNbSwgiLDbA-IvBf3sHV_9Mg",
  authDomain: "hashchat-24f4e.firebaseapp.com",
  projectId: "hashchat-24f4e",
  storageBucket: "hashchat-24f4e.appspot.com",
  messagingSenderId: "970337693157",
  appId: "1:970337693157:web:f5c4ac59599980597a930c"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};