import React from 'react'
import styles from "../../styles/HomePage/about.module.scss"

const HomeAbout = ({reference}: {reference: React.RefObject<HTMLDivElement>}) => {
  return (
    <section ref={reference}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__main}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>Linspiration derriere dkad</span>
          </div>
          <div className={styles.about__content}>
            <div className={styles.content__one}>
              <p>Issue d'un amour profond pour les espaces beaux et paisibles, DKAD représente une ambition durable de créer et d'améliorer des conceptions architecturales qui durent.</p>
            </div>
            <div className='
          '>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout