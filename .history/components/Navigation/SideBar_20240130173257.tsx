import React from "react";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={`container ${styles.sidebar__container}`}>
        <div className={styles.sidebar__top}>
          <div className={styles.left__button}>
            <div className={styles.line__wrapper}>
              <span></span>
              <span></span>
            </div>
            <span className={styles.menu__text}>Close</span>
          </div>
        </div>
        <div className={styles.sidebar__content}></div>
        <div className={styles.sidebar__bottom}></div>
      </div>
    </div>
  );
};

export default SideBar;
