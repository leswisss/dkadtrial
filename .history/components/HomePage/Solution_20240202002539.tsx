"use client";

import React from 'react'
import { Icon } from '@iconify/react';
import styles from "../../styles/HomePage/solution.module.scss"

interface SolutionProps{
  index: number;
  title: string;
  text: string;
}

const Solution = ({index, title, text}: SolutionProps ) => {
  return (
    <div className={styles.solution__container}>
      <div className={styles.solution__left}>
        <div className={styles.solution__index}>
          <span>
            
          </span>
          {index+1}
        </div>
        <div className={styles.solution__title}>
          {title}
        </div>
      </div>
      <div className={styles.solution__right}>
        <p>{text}</p>
        <span><Icon icon="la:angle-right" /></span>
      </div>
    </div>
  )
}

export default Solution