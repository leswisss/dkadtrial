"use client";

import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/HomePage/solution.module.scss";

interface SolutionProps {
  index: number;
  title: string;
  text: string;
}

const Solution = ({ index, title, text }: SolutionProps) => {
  return (
    <div className={styles.solution__container} style={{borderBottom: index===2 ? "1px solid #5b5b5b" : "none"}}>
      <div className={styles.solution__wrapper}>
        <div className={styles.solution__left}>
          <div className={styles.solution__index}>
            <span>0{index+ 1}</span>
          </div>
          <div className={styles.solution__title}>{title}</div>
        </div>
        <div className={styles.solution__right}>
          <div className={styles.right__text}>
            <p className="p__font">{text}</p>
          </div>
          <span>
            <Icon icon="la:angle-right" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Solution;
