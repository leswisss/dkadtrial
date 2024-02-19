import React from 'react'
import styles from "../../styles/HomePage/solutions.module.scss"

const HomeSolutions = () => {
  return (
    <section className={styles.solution__section}>
      <div className={`container ${styles.solution__container}`}>
        <div className={styles.section__header}>
          <div className={styles.header__overflow}>
            <h1>Nos Solutions</h1>
          </div>
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default HomeSolutions