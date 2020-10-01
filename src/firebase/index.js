import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { firebaseConfig } from '../../config/firebase.config';

const app = firebase.initializeApp(firebaseConfig);

firebase.analytics();

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}

// Initialize Firebase Analytics
// firebase.analytics();