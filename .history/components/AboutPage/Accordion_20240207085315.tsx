import React from "react";
import IMAGE from "../../public/images/architecture.jpg";
import Image from "next/image";
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
          <div className={styles.image__wrapper}>
            <div className={styles.image}>
              <Image src={IMAGE} fill alt="Donfack CEO" quality={100} />
            </div>
          </div>
          <div className={styles.data}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
