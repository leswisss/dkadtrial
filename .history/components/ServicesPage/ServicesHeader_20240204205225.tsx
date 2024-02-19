import React from 'react'
import styles from "../../styles/ServicesPage/header.module.scss"

const ServicesHeader = () => {
  // const container = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"]
  // })

  // const sm = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <section className={`section__special ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.header__text}>
          <p>DKAD offre une gamme complète de services architecturaux, contribuant à la réalisation de certains des projets les plus innovants et les plus impressionnants au monde.</p>
        </div>
        <div className={styles.floating__text}>
          <motion.div className={styles.text__left}>
            <p>5+ ans sur le marché</p>
          </motion.div>
          <motion.div className={styles.text__right}>
            <p>Nous garantissons une <span className={styles.text__blue}>qualité inégalée</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeader