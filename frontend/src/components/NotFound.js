import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

// component to be displayed when a query or filter doesn't
// find any results
const NotFound = () => (
  <div className={styles.NotFound}>
    <Asset
      src={NoResults}
      message="Sorry, the page doesn't exist. Please try again."
    />
  </div>
);

export default NotFound;
