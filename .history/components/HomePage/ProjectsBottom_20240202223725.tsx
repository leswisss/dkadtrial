"use client";

import React, { useRef } from "react";
import IMAGE from "../../public/images/project1.jpg";
import IMAGE2 from "../../public/images/project2.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
import { Rounded } from "..";
import Image from "next/image";
import styles from "../../styles/HomePage/projectsbottom.module.scss";
import Link from "next/link";

const ProjectsBottom = () => {
  const services = [
    "Interieur",
    "Exterieur",
    "Supervision",
    "Amenagement Paysager",
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  return (
    <>
      <div className={styles.projects__bottom}>
        <div className={styles.projects__content} ref={container}>
          <motion.div style={{ y }} className={styles.background__images}>
            <div className={styles.background__image}>
              <Image src={IMAGE} fill alt="Project Image" quality={100} />
            </div>
          </motion.div>
          <div className={styles.project__images}>
            <div className={styles.project__image}>
              <Image src={IMAGE2} fill alt="Project Image" quality={100} />
            </div>
          </div>
          <div className={`container ${styles.project__container}`}>
            <div className={styles.text__container}>
              <div className={styles.text__swiper}>
                <div className={styles.text__wrapper}>
                  <p>Sunset Sanctuary Retreat Sanctuary Retreat </p>
                </div>
              </div>
            </div>
            <div className={styles.project__details}>
              <div className={styles.line}></div>
              <div className={styles.details__bottom}>
                <div className={styles.bottom__left}>
                  <span className={styles.round}></span>
                  <div className={styles.location}>
                    <div className={styles.location__swiper}>
                      <p>Douala, Cameroon</p>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom__right}>
                  <div className={styles.bottom__top}>
                    {services.map((service, i) => (
                      <span key={i}>{service}</span>
                    ))}
                  </div>
                  <div className={styles.bottom__bottom}>
                    <Rounded backgroundColor="#ffffff" classNames={st}>

                    </Rounded>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsBottom;
