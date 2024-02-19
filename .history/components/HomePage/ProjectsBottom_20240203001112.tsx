"use client";

import React, { useRef } from "react";
import IMAGE from "../../public/images/project1.jpg";
import IMAGE2 from "../../public/images/project2.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
import { Rounded, Cursor } from "..";
import Image from "next/image";
import styles from "../../styles/HomePage/projectsbottom.module.scss";
import { ProjectsContent } from "@/utils";
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
            {ProjectsContent.map((content, i) => (
              <div className={styles.background__image} key={i}>
                <Image
                  src={content.image}
                  fill
                  alt="Project Image"
                  quality={100}
                />
              </div>
            ))}
          </motion.div>
          <div className={styles.project__images}>
            {ProjectsContent.map((content, i) => (
              <div className={styles.project__image} key={i}>
                <Image
                  src={content.image2}
                  fill
                  alt="Project Image"
                  quality={100}
                />
              </div>
            ))}
          </div>
          <div className={`container ${styles.project__container}`}>
            <div className={styles.text__container}>
              <div className={styles.text__swiper}>
                {ProjectsContent.map((content, i) => (
                  <div className={styles.text__wrapper} key={i}>
                    <p>{content.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.project__details}>
              <div className={styles.line}></div>
              <div className={styles.details__bottom}>
                <div className={styles.bottom__left}>
                  <span className={styles.round}></span>
                  <div className={styles.location}>
                    <div className={styles.location__swiper}>
                      {ProjectsContent.map((content, i) => (
                        <p key=>Douala, Cameroon</p>
                      ))}
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
                    <Rounded
                      backgroundColor="#ffffff"
                      classNames={styles.rounded__button}
                      link="/"
                    >
                      <p>Decouvrir ce projet</p>
                    </Rounded>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div></div>
            <Link href="/" />
            <div></div>
          </div>
          <Cursor />
        </div>
      </div>
    </>
  );
};

export default ProjectsBottom;
