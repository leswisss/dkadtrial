import React from 'react'
import styles from "../../styles/ContactPage/chero.module.scss"

const ContactHero = () => {
  return (
    <section className={`section__special ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className="header__text">
          <p className='header__text-main'>DKAD offre une gamme complète de services architecturaux, contribuant à la réalisation de certains des projets les plus innovants et les plus impressionnants au monde.</p>
        </div>
      </div>
    </section>
  )
}

export default ContactHero