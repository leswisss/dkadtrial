import React from 'react'
import styles from "../../styles/AboutPage/aboutteam.module.scss"

const AboutTeam = () => {
  return (
    <section className={`section ${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <div className="section__header">
          <div className='large__font'>
            Notre Equipe
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutTeam