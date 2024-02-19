import React from 'react'
import Lenis from '@studio-freight/lenis/types'
import { SolutionsBottom, TitleReusable } from '..'

const HomeSolutions = ({lenis}: {lenis: Lenis | null }) => {
  const title = "Nos Solutions"
  const text = "Notre gamme complète de services est conçue pour répondre à tous vos besoins architecturaux. De la conception initiale à l'aménagement paysager final, nous assurons un parcours sans faille vers la création de l'espace de vos rêves. Explorez nos offres pour voir comment nous pouvons vous aider.";

  return (
    <section className="section">
      <div className={`container ${styles.solution__container}`}>
        <TitleReusable title={title} text={text}/>
      </div>
      <SolutionsBottom lenis={lenis} />
    </section>
  )
}

export default HomeSolutions