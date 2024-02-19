import React from 'react'
import styles from "../../styles/HomePage/solutions.module.scss"

const HomeSolutions = () => {
  return (
    <section className={styles.solution__section}>
      <div className={`container ${styles.solution__container}`}>
        <div className="section__header">
          <div className={styles.header__overflow}>
            <h1 className={styles.large__font}>Nos Solutions</h1>
          </div>
          <p className={styles.p__font}>Notre gamme complète de services est conçue pour répondre à tous vos besoins architecturaux. De la conception initiale à l'aménagement paysager final, nous assurons un parcours sans faille vers la création de l'espace de vos rêves. Explorez nos offres pour voir comment nous pouvons vous aider.</p>
        </div>
        <div>
          asos
        </div>
      </div>
    </section>
  )
}

export default HomeSolutions