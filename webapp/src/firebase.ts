import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAzzk8_MHN0cg5GPY60EbApTzofxt38G7s',
  authDomain: 'the-f495a.firebaseapp.com',
  projectId: 'the-f495a',
  storageBucket: 'the-f495a.firebasestorage.app',
  messagingSenderId: '443530950597',
  appId: '1:443530950597:web:7c0fa0c52bee1465f1bdac',
  measurementId: 'G-ZZKCV971LK',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
