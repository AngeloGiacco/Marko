import React from "react";
import { navigate } from "@reach/router";

const SignIn = ({ user, signIns: { signInWithGoogle } }) => {
  if (user) {
    navigate(`/user/${user.uid}`);
    return null;
  } else {
    return (
      <div className="sign-in-page">
        <h3>
          Welcome to Marko a simple &amp; beautiful online markdown editor
        </h3>
        <p>Sign in with your google account to sync files across devices</p>
        <div className="sign-in-buttons">
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    );
  }
};

export default SignIn;
