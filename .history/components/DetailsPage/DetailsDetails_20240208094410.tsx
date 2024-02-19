import React from "react";
import styles from "../../styles/DetailsPage/details.module.scss";

const DetailsDetails = () => {
  return (
    <section className={`section ${styles.details__section}}`}>
      <div className={`container ${styles.details__container}`}>
        <div className={styles.d__top}>
          <div className={styles.about__title}>
            <span className={styles.title__button}></span>
            <span className={styles.title__text}>
              A PROPOS DU PROJET
            </span>
          </div>
          <div className={styles.about__content}>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className={styles.d__top}></div>
      </div>
    </section>
  );
};

export default DetailsDetails;
