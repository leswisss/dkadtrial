import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/aboutimage2.jpg"
import styles from "../../styles/ContactPage/chero.module.scss"

const ContactHero = () => {
  return (
    <section className={`section__special ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className="header__text">
          <p className='header__text-main'>Rue 1.894, Yaoundé I (Bastos)</p>
        </div>
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__content}>
            <div className={styles.image__wrapper}>
              <Image src={IMAGE}/>
            </div>
            <div className={styles.contact__info}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero