import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/background.jpg"
import styles from "../../styles/AboutPage/mission.module.scss"

const AboutMission = () => {
  return (
    <section className={`section ${styles.mission__section}`}>
      <div className={styles.mission__image}>
        <Image src={IMAGE} alt="Landscape Image" fill quality={100}/>
      </div>
      <div className={`container ${styles.mission__container}`}>

      </div>
    </section>
  )
}

export default AboutMission