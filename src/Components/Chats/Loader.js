import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
        <h5>Loading data ...</h5>
    </div>
  );
};

export default Loader;
