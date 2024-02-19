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
      <div style={}>

      </div>
    </div>
  )
}

export default Solution