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
            <p>Sunset Sanctuary Retreat est un témoignage de l'innovation architecturale et de la conception durable. Nichée au cœur de la nature, cette structure à deux niveaux est dotée de grandes baies vitrées qui offrent aux résidents une vue imprenable sur la verdure environnante. Le niveau supérieur, caractérisé par des lattes de bois, ajoute un élément d'intimité tout en rehaussant l'attrait esthétique.</p>
            <p></p>
          </div>
        </div>
        <div className={styles.d__top}></div>
      </div>
    </section>
  );
};

export default DetailsDetails;
