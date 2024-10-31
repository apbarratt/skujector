import React from "react";
import styles from "../styles/Diya.module.scss";

export class Diya extends React.Component {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return <div className={styles.diya_container}>
      <div className={styles.shadow}></div>
      <div className={styles.diya}>
        <div className={styles.line_1}></div>
        <div className={styles.line_2}></div>
        <div className={styles.dots}></div>
      </div>
      <div className={styles.inside}>
        <div className={styles.light}></div>
        <div className={styles.flame}></div>
      </div>
    </div>
  }
}
