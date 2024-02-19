"use client";

import React, { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Rounded, Cursor } from "..";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import styles from "../../styles/HomePage/projectsbottom.module.scss";
import { ProjectsContent } from "@/utils";
import Link from "next/link";

const ProjectsBottom = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const totalProjects = ProjectsContent.length;
  const backgroundRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animateSlide = (slideNumber: number, reveal: boolean) => {
    const background = backgroundRefs.current[slideNumber];
    const img = imgRefs.current[slideNumber];

    const clipPathValue = reveal
      ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
      : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    gsap.to(background, {
      clipPath: clipPathValue,
      duration: 0.7,
      ease: "power4.out",
    });
    gsap.to(img, {
      clipPath: clipPathValue,
      duration: 0.7,
      ease: "power4.out",
    });
  };

  const handleRightClick = () => {
    if (activeProject < totalProjects - 1) {
      animateSlide(activeProject + 1, true);
      setActiveProject((prev) => prev + 1);
    }
  };

  const handleLeftClick = () => {
    if (activeProject > 0) {
      animateSlide(activeProject, false);
      setActiveProject((prev) => prev - 1);
    }
  };

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 0]);

  //CursorAnim
  const [cursor, setCursor] = useState({ active: false, index: 0 });
  const mainRef = useRef<HTMLDivElement>(null);


  //Translation
  const { t, i18n } = useTranslation();
  const currentlocale = i18n.language;

  return (
    <>
      <div className={styles.projects__bottom} ref={mainRef}>
        <div className={styles.projects__content} ref={container}>
          <motion.div style={{ y }} className={styles.background__images}>
            {ProjectsContent.map((content, i) => (
              <div
                className={`${styles.background__image} ${
                  i === 0 ? styles.first__background : ""
                }`}
                key={i}
                ref={(el) => (backgroundRefs.current[i] = el)}
              >
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
              <div
                className={`${styles.project__image} ${
                  i === 0 ? styles.first__image : ""
                }`}
                key={i}
                ref={(el) => (imgRefs.current[i] = el)}
              >
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
              <div
                className={styles.text__swiper}
                style={{ transform: `translateY(${-activeProject * 100}%)` }}
              >
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
                    <div
                      className={styles.location__swiper}
                      style={{
                        transform: `translateY(${-activeProject * 100}%)`,
                      }}
                    >
                      {ProjectsContent.map((content, i) => (
                        <p key={i}>{content.location}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.bottom__right}>
                  <motion.div layout className={styles.bottom__top}>
                    {ProjectsContent[activeProject].services.map(
                      (service, i) => (
                        <motion.span layout key={i}>
                          {service}
                        </motion.span>
                      )
                    )}
                  </motion.div>
                  {/* <div className={styles.bottom__bottom}>
                    <Rounded
                      backgroundColor="#ffffff"
                      classNames={styles.rounded__button}
                      link="/"
                    >
                      <p>Decouvrir ce projet</p>
                    </Rounded>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div
              onClick={handleLeftClick}
              onMouseEnter={() => {
                setCursor({ active: true, index: 0 });
              }}
              onMouseLeave={() => {
                setCursor({ active: false, index: 0 });
              }}
            ></div>
            <Link
              href="/"
              onMouseEnter={() => {
                setCursor({ active: true, index: 1 });
              }}
              onMouseLeave={() => {
                setCursor({ active: false, index: 1 });
              }}
            />
            <div
              onClick={handleRightClick}
              onMouseEnter={() => {
                setCursor({ active: true, index: 2 });
              }}
              onMouseLeave={() => {
                setCursor({ active: false, index: 2 });
              }}
            ></div>
          </div>
        </div>
        <div className="container">
          <div className={styles.bottom__button}>
            <Rounded linker link={`/{}`}>
              <p>Decouvrir les projets</p>
            </Rounded>
          </div>
        </div>
      </div>
      <Cursor
        active={activeProject}
        length={ProjectsContent.length}
        cursor={cursor}
        boundary={mainRef}
      />
    </>
  );
};

export default ProjectsBottom;
