import React from "react";
import styles from "./Loading.module.scss";

export default function Loading(): JSX.Element {
  return (
    <div className={styles.loadingOverlay}>
      <h3 className={styles.loadingMessage}>Loading...</h3>
    </div>
  );
}
