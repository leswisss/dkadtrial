import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/background.jpg"
import styles from "../../styles/HomePage/background.module.scss"

const Background = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.background__image}>
          <Image src={IMAGE} quality={100} fill alt='Landscape'/>
        </div>
      </div>
    </section>
  )
}

export default Background