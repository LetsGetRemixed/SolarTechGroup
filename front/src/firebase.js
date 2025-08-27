// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY9-D3szkGlNd3Vh-Wwod6ftcowO5sN8o",
  authDomain: "southerntechgroup-569b4.firebaseapp.com",
  projectId: "southerntechgroup-569b4",
  storageBucket: "southerntechgroup-569b4.firebasestorage.app",
  messagingSenderId: "938024600879",
  appId: "1:938024600879:web:6fb77788ebffca41bc0dda",
  measurementId: "G-YKR9HLGDDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export analytics for use in other components
export { analytics };
