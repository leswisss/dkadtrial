"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Icon } from "@iconify/react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoreProjects, swiperSettings } from "@/utils";
import styles from "../../styles/DetailsPage/other.module.scss";

// Import Swiper styles
import "swiper/css";

const DetailsOther = () => {
  const projectName = "Sunset Sanctuary Retreat";

  const [offset, setOffset] = useState(0);
  const [lastSlide, setLastSlide] = useState(false)

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className={styles.swiper__buttons}>
        <span
          className={styles.swiper__button}
          onClick={() => {
            swiper.slidePrev();
            console.log(swiper.activeIndex);
          }}
          style={{ opacity: swiper.activeIndex === 0 ? "default" : "pointer" }}
        >
          <Icon icon="ph:arrow-left-light" />
        </span>
        <span
          className={styles.swiper__button}
          onClick={() => {
            swiper.slideNext();
            console.log(swiper.activeIndex);
          }}
          style={{ opacity: swiper.activeIndex === 3 ? "default" : "pointer" }}
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
        <Swiper
          className={styles.other__swiper}
          {...swiperSettings}
          speed={600}
          onSlideChange={(swiper) => {
            const direction =
              swiper.activeIndex > swiper.previousIndex ? 1 : -1;
            setOffset((prevOffset) => prevOffset + direction * 10);

            //Check if last slide is 
            const totalSlides = swiper.slides.length;
            const isLastSlideVisible = swiper.realIndex === totalSlides - 1;

            if (isLastSlideVisible) {
              setLastSlide(true)
            }
          }}
        >
          <SwiperButtons />
          {MoreProjects.map((data, i) => {
            const container = useRef(null);
            const { scrollYProgress } = useScroll({
              target: container,

              offset: ["start end", "end start"],
            });
            const y = useTransform(scrollYProgress, [0, 1], [-120, 0]);
            const [active, setActive] = useState(false);

            return (
              <SwiperSlide className={styles.other__slide} key={i}>
                <Link
                  className={styles.other__content}
                  href="/"
                  onMouseEnter={() => setActive(true)}
                  onMouseLeave={() => setActive(false)}
                >
                  <div className={styles.other__image} ref={container}>
                    <motion.div
                      className={styles.other__overflow}
                      animate={{ scale: active ? 1.05 : 1 }}
                      transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                    >
                      <motion.div
                        className={styles.image__wrapper}
                        style={{ y }}
                      >
                        <Image
                          src={data.image}
                          fill
                          quality={100}
                          alt="Project Image"
                          style={{ objectPosition: `${offset}% center` }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className={styles.content__data}>
                    <div className={styles.data__content}>
                      <div className={styles.left}>
                        <span className={styles.left__button}></span>
                        <span className={styles.project__name}>
                          {data.name}
                        </span>
                      </div>
                      <div className={styles.right}>
                        <span>{data.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default DetailsOther;
