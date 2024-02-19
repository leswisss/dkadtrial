import React from 'react'
import styles from "../../styles/HomePage/contact.module.scss"

const HomeContact = () => {
  return (
    <section className={`section ${styles.contact__section}`}>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__top}>
          <div className={styles.top__one}>
            <p>Nous vous aiderons a mettre en oeuvre</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.top__two}>
            <p>toutes solutions de concep</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContact