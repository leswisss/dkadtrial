"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Rounded, Cursor } from "..";
import Image from "next/image";
import gsap from "gsap";
import styles from "../../styles/HomePage/projectsbottom.module.scss";
import { ProjectsContent } from "@/utils";
import Link from "next/link";


const ProjectsBottom = () => {
  const [activeProject, setActiveProject] = useState<number>(0)
  const totalSlides = ProjectsContent.length;
  const backgroundRefs = useRef([]);
  const imgRefs = useRef([]);

  const animateSlide = (slideNumber: number, reveal: boolean) => {
    const background = backgroundRefs.current[slideNumber];
    const img = imgRefs.current[slideNumber];

    const clipPathValue = reveal
      ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
      : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';

    gsap.to(background, { clipPath: clipPathValue, duration: 1, ease: 'power4.out', delay: 0.3 });
    gsap.to(img, { clipPath: clipPathValue, duration: 1, ease: 'power4.out' });
  };

  const handleDecrease = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1);
    }
  };

  const handleIncrease = () => {
    if (activeProject < ProjectsContent.length - 1) {
      setActiveProject(activeProject + 1);
    }
  };

  const services = [
    "Interieur",
    "Exterieur",
    "Supervision",
    "Amenagement Paysager",
  ];

  
  //Parallax
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
              <div className={`${styles.background__image} ${activeProject===0 ? styles.first__background : ""}`} key={i} ref={(el) => (backgroundRefs.current[i] = el)}>
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
              <div className={`${styles.project__image} ${activeProject===0 ? styles.first__image : ""}`} key={i}>
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
              <div className={styles.text__swiper} style={{transform: `translateY(${-activeProject * 100}%)`}}>
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
                    <div className={styles.location__swiper} style={{transform: `translateY(${-activeProject * 100}%)`}}>
                      {ProjectsContent.map((content, i) => (
                        <p key={i}>{content.location}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.bottom__right}>
                  <motion.div layout className={styles.bottom__top}>
                    {ProjectsContent[activeProject].services.map((service, i) => (
                      <motion.span layout key={i}>{service}</motion.span>
                    ))}
                  </motion.div>
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
            <div onClick={handleDecrease}></div>
            <Link href="/" />
            <div onClick={handleIncrease}></div>
          </div>
          <Cursor active={activeProject} length={ProjectsContent.length} />
        </div>
      </div>
    </>
  );
};

export default ProjectsBottom;
