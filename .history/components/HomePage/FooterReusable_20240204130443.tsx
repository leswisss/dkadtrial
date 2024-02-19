import React from 'react'
import styles from "../../styles/HomePage/footerr.module.scss"

const FooterReusable = () => {
  return (
    <section className={`section ${styles.footerr__section}`}>
      <div className={`container ${styles.footerr__container}`}>
        <div className={styles.left}>
          <div className={styles.left__top}>
            <div></div>
          </div>
          <div className={styles.left__bottom}>

          </div>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </section>
  )
}

export default FooterReusable