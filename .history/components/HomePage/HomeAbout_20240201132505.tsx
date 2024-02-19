import React from 'react'
import styles from "../../styles/HomePage/about.module.scss"

const HomeAbout = ({reference}: {reference: React.RefObject<HTMLDivElement>}) => {
  return (
    <section ref={reference}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__main}>
          <div className={about__}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout