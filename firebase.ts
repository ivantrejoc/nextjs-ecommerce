
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2DZSTfUS8pP21-EvAflzi6nu7rMVq7Q",
  authDomain: "buime-1e4db.firebaseapp.com",
  projectId: "buime-1e4db",
  storageBucket: "buime-1e4db.appspot.com",
  messagingSenderId: "388795216527",
  appId: "1:388795216527:web:76a40b9f727739fd07f6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };