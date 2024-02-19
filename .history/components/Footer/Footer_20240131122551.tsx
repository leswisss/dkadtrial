import React from 'react'
import styles from "../../styles/Footer/footer.module.scss"

const Footer = () => {
  return (
    <section className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.ft__left}>
            <div className={styles.menu}>
              <span className={styles.nav_header}>Menu</span>

              <div className={styles.footer__links}>

              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.get_in_touch}>

              </div>
              <div className={styles.addresse}>

              </div>
            </div>
          </div>
          <div className={styles.ft__right}>

          </div>
        </div>
        <div className={styles.footer__bottom}>
          
        </div>
      </footer>
    </section>
  )
}

export default Footer