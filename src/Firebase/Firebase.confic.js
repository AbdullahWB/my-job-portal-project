// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvUwoz3Bc-Uk3zJpqbkVGcfvOH7dP7Ql8",
  authDomain: "my-job-portal-project.firebaseapp.com",
  projectId: "my-job-portal-project",
  storageBucket: "my-job-portal-project.appspot.com",
  messagingSenderId: "723007304890",
  appId: "1:723007304890:web:7a43f97847b56c33a77e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;