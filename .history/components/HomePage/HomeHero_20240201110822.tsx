import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/HomePage/hero.module.scss"

const HomeHero = () => {
  return (
    <section className={styles.hero__section}>
      <div className={styles.image__wrapper}>
        <Image src={IMAGE} alt="Home Page" fill quality={100}/>
      </div>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text}>
          <p>DKAD&trade; Creation des espaces qui inspirent pour une meilleure qualite de vie</p>
        </div>
        <div className={styles.hero__footer}>
          <span>Decouvrir DKAD</span>
          <span>Creation des Espaces qui Inspirent</span>
          <span>Base au Cameroon</span>
        </div>
      </div>
    </section>
  )
}

export default HomeHero