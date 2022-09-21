import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxOOsp46b7SKnGefIs3_ivOyiEVbXRr9E",
  authDomain: "portifolio-fdef7.firebaseapp.com",
  projectId: "portifolio-fdef7",
  storageBucket: "portifolio-fdef7.appspot.com",
  messagingSenderId: "996951700513",
  appId: "1:996951700513:web:982d84fc19c2486734df60"

};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
