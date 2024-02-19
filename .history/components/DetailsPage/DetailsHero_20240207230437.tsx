import React from 'react'
import styles from "../../styles/DetailsPage/dhero.module.scss"

const DetailsHero = () => {
  return (
    <section className={`section__special ${styles.details__section}`}>
      <div className={`container ${styles.details__container}`}>
        <div className={styles.details__header}>
          <p className=''>Sunset Sanctuary Retreat</p>
        </div>
        <div className={styles.details__intro}>
          <p>Mélange harmonieux d'architecture moderne et de beauté naturelle, le Sunset Sanctuary Retreat offre une expérience de vie tranquille et luxueuse au milieu d'une végétation luxuriante et de paysages sereins.</p>
        </div>
      </div>
    </section>
  )
}

export default DetailsHero