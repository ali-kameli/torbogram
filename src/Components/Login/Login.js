import React from "react";
import google from "../../assets/google.svg";
import Torbogram from "../../assets/Torbogram.png";
import styles from "./Login.module.css";
import firebase from "firebase/compat";
import { auth } from "../../firebase";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.come}>
        <img src={Torbogram} alt="Torbogram" />
        <h2>WellCome to Torbogram</h2>
        <h5 style={{ color: "red", marginTop: "6px" }}>
          If you live in IRAN please turn on VPN
        </h5>
      </div>
      <div
        className={styles.sign}
        onClick={() =>
          auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        }
      >
        <img src={google} alt="google" />
        <h2>Sign in with Google</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
