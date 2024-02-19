import React from 'react'
import styles from "../../styles/HomePage/about.module.scss"

const HomeAbout = ({reference}: {reference: React.RefObject<HTMLDivElement>}) => {
  return (
    <section ref={reference}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__main}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.tit}></span>
          </div>
          <div className={styles.about__content}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout