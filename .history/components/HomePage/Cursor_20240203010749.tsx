"use client";

import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/HomePage/cursor.module.scss";

const Cursor = ({active, length}: {active: number, length: number}) => {
  return (
    <div className={styles.cursor}>
      <div className={styles.cursor__content}>
        <div className={styles.cursor__swiper}>
          <div className={styles.directives}>
            <Icon icon="la:angle-left" /> <span>{active}/{len}</span>{" "}
            <Icon icon="la:angle-right" />
          </div>
          <span>View</span>
        </div>
      </div>
    </div>
  );
};

export default Cursor;
