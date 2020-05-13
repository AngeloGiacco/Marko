import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "lib/firebaseConfig";

// Check if we have already initialized an app
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const firebaseAppAuth = firebaseApp.auth();

export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider(), // <- This one is optional
};

import "firebase/firestore";
export const db = firebaseApp.firestore();
