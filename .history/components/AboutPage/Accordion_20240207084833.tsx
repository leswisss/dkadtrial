import React from "react";
import IMAGE from "../../public/images/architecture.jpg";
import { Icon } from "@iconify/react";
import styles from "../../styles/AboutPage/accordion.module.scss";

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header}>
        <div className={styles.h__left}>
          <span>Donfack Kengni Frankie</span>
        </div>
        <div className={styles.h__right}>
          <span>Fondateur et directeur général</span>
          <span><Icon icon="la:angle-up" /></span>
        </div>
      </div>
      <div className={styles.accordion__data}>
        <div className={styles.empty}></div>
        <div className={styles.a__data}>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
