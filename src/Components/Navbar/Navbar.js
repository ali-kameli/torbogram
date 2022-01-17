import React from "react";
import styles from "./Navbar.module.css";
import Torbogram from "../../assets/Torbogram.png";

const Navbar = ({ logoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <img src={Torbogram} alt="torbogram" />
        Torbogram
      </div>
      <div className={styles.logout} onClick={logoutHandler}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
