import React from 'react'
import styles from "../../styles/ContactPage/chero.module.scss"

const ContactHero = () => {
  return (
    <section className={`section__special ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className="header__text">
          <p className='header__text-main'>Rue 1.894, Yaoundé I</p>
        </div>
      </div>
    </section>
  )
}

export default ContactHero