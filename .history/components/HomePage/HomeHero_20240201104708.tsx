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
        div
      </div>
    </section>
  )
}

export default HomeHero