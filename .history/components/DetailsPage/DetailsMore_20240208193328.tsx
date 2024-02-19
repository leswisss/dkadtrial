import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/landscape.jpg"
import styles from "../../styles/DetailsPage/more.module.scss"

const DetailsMore = () => {
  return (
    <section className={`section ${styles.more__section}`}>
      <div className={`container ${styles.more__container}`}>
        <div className={styles.more__wrapper}>
          <div className={styles.more__image}>
            <Image src={IMAGE} quality={100} alt='Project Image' fill/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsMore