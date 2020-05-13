import React from "react";
import { Router, navigate } from "@reach/router";

import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAppAuth, providers } from "lib/firebase";

import { Dashboard, Editor, SignIn } from "components";
import "./App.css";

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth,
});

const App = ({ signInWithGoogle, signOut, user }) => {
  console.log(user);
  return (
    <>
      <header>
        <h2>Marko</h2>
        {user && (
          <div>
            <a
              href="#log-out"
              onClick={() => {
                signOut();
                navigate("/");
              }}
            >
              Log Out
            </a>
            <img alt="Profile" src={user.photoURL} />
          </div>
        )}
      </header>
      <Router>
        <SignIn path="/" user={user} signIns={{ signInWithGoogle }} />
        <Dashboard path="user/:userId" />
        <Editor path="user/:userId/editor/:fileId" />
      </Router>
    </>
  );
};

export default createComponentWithAuth(App);
