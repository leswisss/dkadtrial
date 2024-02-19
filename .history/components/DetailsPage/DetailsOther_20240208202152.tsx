import React from 'react'
import styles from "../../styles/DetailsPage/other.module.scss"

const DetailsOther = () => {
  return (
    <section className={`section ${styles.other__section}`}>
      <div className={`container ${styles.other__container}`}>
        <div className='section__header'>
          <p className='large__font'>Autres Projets</p>
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default DetailsOther