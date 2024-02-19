import React from "react";
import IMAGE from "../../public/images/architecture.jpg";
import styles from "../../styles/AboutPage/accordion.module.scss";

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header}>
        <div className={styles.h__left}>
          <span>Donfack Kengni Frankie</span>
        </div>
        <div className={styles.h__right}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
