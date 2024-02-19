import React from 'react'
import styles from "../../styles/ServicesPage/header.module.scss"

const ServicesHeader = () => {
  return (
    <section className={`section__special ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.header__text}>
          <p>DKAD offre une gamme complète de services architecturaux, contribuant à la réalisation de certains des projets les plus innovants et les plus impressionnants au monde.</p>
        </div>
        <div className={styles.floating__text}>
          <div className={styles.text__left}>
            <p>5+ ans</p>
          </div>
          <div className={styles.text__right}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeader