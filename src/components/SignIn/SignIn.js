import React, { useEffect } from "react";
import { navigate } from "@reach/router";

const SignIn = ({ user, signIns: { signInWithGoogle } }) => {
  useEffect(() => {
    if (user) {
      navigate(`/user/${user.uid}`);
    }
  }, [user]);

  return (
    <div className="sign-in-page">
      <h3>
        Welcome to Marko a simple &amp; beautiful online markdown editor for
        taking notes
      </h3>
      <p>
        Sign in with your social accounts to have files that are synced accross
        devices
      </p>
      <div className="sign-in-buttons">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
