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
    <div className={styles.solution__container}>
      <div className={styles.solution}></div>
      <div className={styles.solution__left}>
        <div className={styles.solution__index}>
          <span>{index + 1}</span>
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
  );
};

export default Solution;
