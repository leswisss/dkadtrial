import React from 'react'
import { FooterLinks } from '@/utils'
import Link from 'next/link'
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
                {
                  FooterLinks.map((data, i) => (
                    <Link key={i} href={data.link} className={styles.footer__link}>{data.name}</Link>
                  ))
                }
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.menu}>
                <span className={styles.nav_header}>Prendre Contact</span>
                <div className={styles.footer__links}>
                  <Link href="tel:+237690756994" className={styles.footer__link}>
                    +237 690-756-994
                  </Link>
                  <Link href="mailto:onac464@yahoo.com" className={styles.footer__link}>
                    onac464@yahoo.com
                  </Link>
                </div>
              </div>
              <div className={styles.menu}>
                <span className={styles.nav_header}>Adresse</span>
                <div className={styles.footer__links}>
                  <span className={styles.footer__link}>
                    onac464@yahoo.com
                  </span>
                </div>
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