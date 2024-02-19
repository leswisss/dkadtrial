import React from 'react'
import { TitleReusable } from '..'
import styles from "../../styles/HomePage/projects.module.scss"

const HomeProjects = () => {
  const title = "Nos Projets"
  const text = "Notre gamme complète de services est conçue pour répondre à tous vos besoins architecturaux. De la conception initiale à l'aménagement paysager final, nous assurons un parcours sans faille vers la création de l'espace de vos rêves. Explorez nos offres pour voir comment nous pouvons vous aider."
  return (
    <section className={styles.projects__section}>
      <div className={`container ${styles.project__container}`}>
        <TitleReusable classNames={styles.header__style} title={}/>
      </div>
    </section>
  )
}

export default HomeProjects