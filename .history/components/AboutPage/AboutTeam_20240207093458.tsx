"use client";

import React, { useState } from 'react'
import { Accordion } from '..'
import styles from "../../styles/AboutPage/aboutteam.module.scss"

const AboutTeam = () => {
  const text = "Notre Equipe"
  const text2 = "Voici DKAD : un groupe dynamique d'architectes, chacun expert dans son domaine, unis par une vision commune. Dédiés à la transformation des espaces, à la création de designs innovants et à la réalisation de rêves architecturaux - ensemble nous façonnons l'avenir de l'architecture."

  const [activeAccordion, setActiveAccordion] = useState(0);

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
        <div className={styles.accordion__section}>
          {
            [0,1,2].map(() =>  (
              
            ))
          }
          <Accordion activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} />
        </div>
      </div>
    </section>
  )
}

export default AboutTeam