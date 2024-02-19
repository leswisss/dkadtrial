import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "../../styles/DetailsPage/other.module.scss"

// Import Swiper styles
import "swiper/css";

const DetailsOther = () => {
  const projectName = "Sunset Sanctuary Retreat"

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className="t-swiper__buttons">
        <span
          className="t-swiper__button t-button-1"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="61"
            viewBox="0 0 8 61"
            fill="none"
          >
            <path
              d="M3.64645 60.3536C3.84171 60.5488 4.15829 60.5488 4.35355 60.3536L7.53553 57.1716C7.7308 56.9763 7.7308 56.6597 7.53553 56.4645C7.34027 56.2692 7.02369 56.2692 6.82843 56.4645L4 59.2929L1.17157 56.4645C0.976311 56.2692 0.659728 56.2692 0.464466 56.4645C0.269204 56.6597 0.269204 56.9763 0.464466 57.1716L3.64645 60.3536ZM3.5 0L3.5 60H4.5L4.5 0L3.5 0Z"
              fill="black"
            />
          </svg>
        </span>
        <span
          className="t-swiper__button t-button-2"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          
        </span>
      </div>
    );
  };
  return (
    <section className={`section ${styles.other__section}`}>
      <div className={`container ${styles.other__container}`}>
        <div className={`section__header ${styles.other__header}`}>
          <p className='large__font'>Autres Projets</p>
          <p className="p__font">Après avoir découvert le {projectName}, nous vous invitons à explorer nos autres projets.</p>
        </div>
        <div>
          <Swiper className={styles.other__swiper}>

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default DetailsOther