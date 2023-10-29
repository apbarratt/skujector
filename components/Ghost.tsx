import React from "react";
import styles from "../styles/Ghost.module.scss";

export class Ghost extends React.Component {
  private ghostRef: React.RefObject<HTMLDivElement>;

  private get element (): HTMLDivElement {
    return this.ghostRef.current as HTMLDivElement
  }

  constructor(props: any) {
    super(props);
    this.ghostRef = React.createRef();
  }
  
  render() {
    return <div className={styles.ghost_container}>
      <div className={styles.ghost} ref={this.ghostRef} >
        <div className={styles.ghost__eyes}></div>
        <div className={styles.ghost__dimples}></div>
        <div className={styles.ghost__feet}>
          <div className={styles.ghost__feet_foot}></div>
          <div className={styles.ghost__feet_foot}></div>
          <div className={styles.ghost__feet_foot}></div>
          <div className={styles.ghost__feet_foot}></div>
        </div>
      </div>
    </div>
  }
}