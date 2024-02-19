import React from 'react'
import { Rounded } from '..'
import styles from "../../styles/ContactPage/specialist.module.scss"

const ContactSpecialist = () => {
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const text = "DKAD offre une gamme complète de services architecturaux, contribuant à la réalisation de certains des projets les plus innovants et les plus impressionnants au monde."
  return (
    <section className={styles.specialist__section}>
      <div className={`container ${styles.special__container}`}>
        <div className={styles.left}>
          <span></span>
          <p>Parlez a Nos Specialiste</p>
        </div>
        <div className={styles.right}>
          <p className={styles.right__text}>DKAD offre une gamme complète de services architecturaux, contribuant à la réalisation de certains des projets les plus innovants et les plus impressionnants au monde.</p>
          <div className={styles.rounded__button}>
            <Rounded linker link='mailto:onac464@yahoo.com' backgroundColor='#ffffff' classNames={styles.rounded}>
              <p>Contactez nos experts ici</p>
            </Rounded>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSpecialist