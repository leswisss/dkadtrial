import React from 'react'
import useTR
import styles from "../../styles/AboutPage/abouthero.module.scss"

const AboutHero = () => {
  return (
    <div className={`section__special ${styles.hero__section}`}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text}>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero