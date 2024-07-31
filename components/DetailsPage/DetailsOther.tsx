"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Icon } from "@iconify/react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TitleReusable } from "..";
import {swiperSettings, ProjectsContent} from "@/utils";
import { ProjectProps } from "@/types";
import { useTranslation } from "react-i18next";
import styles from "../../styles/DetailsPage/other.module.scss";

// Import Swiper styles
import "swiper/css";

const DetailsOther = ({currentProject, currentLocale}: {currentProject: ProjectProps | undefined | null; currentLocale: string }) => {
  const projectName = currentProject ? currentProject.name : "";
  
  //Function to get other Projects
  const getOtherProjects = (name: string | undefined, list: ProjectProps[]) => {
    const currentList = name ? list.filter(project => project.name !== name) : []
    const returnedList = currentList ? currentList.sort((a, b) => b.year - a.year) : []

    return returnedList
  }

  const otherProjects = getOtherProjects(currentProject?.name, ProjectsContent);

  const {t, i18n} = useTranslation();

  const [offset, setOffset] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className={styles.swiper__buttons}>
        <span
          className={styles.swiper__button}
          onClick={() => {
            swiper.slidePrev();
          }}
          style={{ opacity: swiper.activeIndex === 0 ? 0 : 1 }}
        >
          <Icon icon="ph:arrow-left-light" />
        </span>
        <span
          className={styles.swiper__button}
          onClick={() => {
            swiper.slideNext();
          }}
          style={{ opacity: lastSlide ? 0 : 1 }}
        >
          <Icon icon="ph:arrow-right-light" />
        </span>
      </div>
    );
  };
  

  return (
    <section className={`section ${styles.other__section}`}>
      <div className={`container ${styles.other__container}`}>
        <TitleReusable title={t("DetailsPage:otherheader")} text={t("DetailsPage:othertext", { projectName })}/>
        <Swiper
          className={styles.other__swiper}
          {...swiperSettings}
          speed={800}
          onSlideChange={(swiper) => {
            const direction =
              swiper.activeIndex > swiper.previousIndex ? 1 : -1;
            setOffset((prevOffset) => prevOffset + direction * 10);

            if (swiper.isEnd) {
              setLastSlide(true);
            } else {
              setLastSlide(false);
            }
          }}
        >
          <SwiperButtons />
          {otherProjects.map((data, i) => {
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
                  href={currentLocale === "en" ? `/en/projects/${data?.slug}` : `/fr/projets/${data?.slug}`}
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
                          src={data.images[0].image}
                          fill
                          quality={100}
                          alt= {projectName}
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
