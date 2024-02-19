import React from 'react'
import styles from "../../styles/DetailsPage/other.module.scss"

const DetailsOther = () => {
  const projectName = "Sunset Sanctuary Retreat"
  return (
    <section className={`section ${styles.other__section}`}>
      <div className={`container ${styles.other__container}`}>
        <div className='section__header'>
          <p className='large__font'>Autres Projets</p>
          <p className="p__font">Après avoir découvert le {projectName}, nous vous invitons à explorer nos autres projets.</p>
        </div>
        <div className={styles.swiper__container}>
          <div className={styles.swiper}>
            <div className={styles.swiper__slide}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsOther