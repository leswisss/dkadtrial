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
            <div className={styles.content__two}>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>
                  Notre Marque
                </span>
                <p>DKAD, acronyme de Donfack Kengni Architecture & Design, témoigne de la vision et de la passion du fondateur. Ce nom résume notre engagement en faveur de l'excellence architecturale et notre conviction que le design a le pouvoir d'inspirer.</p>
              </div>
              <div className={styles.content__two_main}>
                <span className={styles.subheader}>
                  Notre Persona
                </span>
                <p>Notre marque est en résonance avec l'intensité et la vivacité de la couleur Infinite Azure, une nuance de bleu profonde et vibrante.  Elle symbolise notre engagement à repousser les limites de la conception architecturale, en créant des espaces qui inspirent et transforment.</p>
              </div>
            </div>
            <div className=''>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout