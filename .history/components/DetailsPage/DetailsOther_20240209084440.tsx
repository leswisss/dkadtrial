import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Icon } from "@iconify/react";
import IMAGE from "../../public/images/innovation.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/DetailsPage/other.module.scss";

// Import Swiper styles
import "swiper/css";

const DetailsOther = () => {
  const projectName = "Sunset Sanctuary Retreat";

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className={styles.swiper__buttons}>
        <span
          className={styles.swiper__button}
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <Icon icon="ph:arrow-left-light" />
        </span>
        <span
          className={styles.swiper__button}
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <Icon icon="ph:arrow-right-light" />
        </span>
      </div>
    );
  };
  return (
    <section className={`section ${styles.other__section}`}>
      <div className={`container ${styles.other__container}`}>
        <div className={`section__header ${styles.other__header}`}>
          <p className="large__font">Autres Projets</p>
          <p className="p__font">
            Après avoir découvert le {projectName}, nous vous invitons à
            explorer nos autres projets.
          </p>
        </div>
        <Swiper className={styles.other__swiper}>
          <SwiperButtons />
          <SwiperSlide>
            <Link className={styles.other__content} href="/">
              <div className={styles.other__image}>
                <div className={styles.image__wrapper}>
                  <Image src={IMAGE} fill quality={100} alt="Project Image" />
                </div>
              </div>
              <div className={styles.content__data}>
                <div className={styles.data__content}>
                  <div className={styles.left}>
                    <span className={styles.left__button}></span>
                    <span className={styles.project__name}>
                      Sunset Sanctuary Retreat
                    </span>
                  </div>
                  <div className={styles.right}>
                    <span>2023</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default DetailsOther;
