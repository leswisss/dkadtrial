import React from 'react'
import styles from "../../styles/AboutPage/aboutteam.module.scss"

const AboutTeam = () => {
  const text = "Notre Equipe"
  const text2 = "Voici l'ensemble DKAD : Un groupe dynamique d'architectes, chacun expert dans son domaine, unis par une vision commune."
  return (
    <section className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <div className="section__header">
          <div className='large__font'>
            {text}
          </div>
          <p className='p__font'>

          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam