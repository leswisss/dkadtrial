import React from 'react'
import styles from "../../styles/AboutPage/aboutteam.module.scss"

const AboutTeam = () => {
  const text = "Notre Equipe"
  const text2 = "Voici DKAD : un groupe dynamique d'architectes, chacun expert dans son domaine, unis par une vision commune. Dédiés à la transformation des espaces, à la création de designs innovants et à la réalisation de rêves architecturaux - ensemble nous façonnons l'avenir de l'architecture."
  const text3 = "Donfack Kengni, fondateur et directeur de DKAD, est un architecte de renom inscrit à l'Ordre National des Architectes du Cameroun. Son amour profond pour les espaces beaux et paisibles se reflète dans ses conceptions architecturales novatrices. Sa vision et son leadership ont contribué à façonner la réputation d'excellence de DKAD dans le paysage architectural."
  const text4 = "Son travail incarne un mélange unique d'esthétique et de fonctionnalité, créant des espaces qui sont non seulement visuellement attrayants, mais aussi sereins et tranquilles. Les contributions de Donfack Kengni à l'architecture continuent d'inspirer et d'influencer le domaine. Son travail reflète véritablement l'essence de la création d'espaces qui inspirent."
  const post = "Fondateur et directeur général"

  return (
    <section className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <div className="section__header">
          <div className='large__font'>
            {text}
          </div>
          <p className='p__font'>
            {text2}
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutTeam