// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNdyOEsdaqD7O8HnNwnLRjeutyuMpync",
  authDomain: "dragon-news-with-react.firebaseapp.com",
  projectId: "dragon-news-with-react",
  storageBucket: "dragon-news-with-react.appspot.com",
  messagingSenderId: "835924963870",
  appId: "1:835924963870:web:2a9a9757f76703bae5b40f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;