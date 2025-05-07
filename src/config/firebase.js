import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBxQw8QwQwQwQwQwQwQwQwQwQwQwQwQwQ",
    authDomain: "polybanker.firebaseapp.com",
    projectId: "polybanker",
    storageBucket: "polybanker.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:1234567890123456789012",
    measurementId: "G-1234567890"
};
// Initialize Firebase only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
let analytics;
let storage;
const isClient = typeof globalThis !== 'undefined' && 'window' in globalThis;
if (isClient) {
    analytics = getAnalytics(app);
    storage = getStorage(app);
}
export { app, db, analytics, storage, firebaseConfig };
