import React from 'react'
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

        </div>
        <div className={styles.solution__title}>

        </div>
      </div>
      <div className={styles.solution__right}>
        <p></p>
      </div>
    </div>
  )
}

export default Solution