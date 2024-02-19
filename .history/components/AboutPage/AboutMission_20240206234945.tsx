"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Rounded } from "..";
import { ValuesData } from "@/utils";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/background.jpg";
import IMAGE2 from "../../public/images/exterior.jpg";
import styles from "../../styles/AboutPage/mission.module.scss";

const AboutMission = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Slider Management

  const [activeSlide, setActiveSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const [buttonWidths, setButtonWidths] = useState<number[]>(new Array(ValuesData.length).fill(0));
  const intervalDuration = 7000;

  const changeSlide = () => {
    setActiveSlide((prevSlide) => {
      const nextSlide = (prevSlide + 1) % ValuesData.length;
      updateButtonWidths(prevSlide, nextSlide);
      return nextSlide;
      // return (prevSlide + 1) % ValuesData.length; // This will loop back to the first slide after the last one
    });
  };

  const updateButtonWidths = (prevSlide: number, nextSlide: number) => {
    setButtonWidths((prevWidths) => {
      const updatedWidths = [...prevWidths];
      updatedWidths[prevSlide] = 100;
      updatedWidths[nextSlide] = 0;
      return updatedWidths;
    });
  };

  useEffect(() => {
    slideInterval.current = setInterval(changeSlide, 7000); // Change slide every 7 seconds

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current); // Clean up the interval on unmount
      }
    };
  }, [ValuesData.length]);

  useEffect(() => {
    let startTime: number;

    const animateButtonWidth = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = (elapsed % intervalDuration) / intervalDuration;
      setButtonWidths((prevWidths) => {
        const updatedWidths = [...prevWidths];
        updatedWidths[activeSlide] = progress * 100;
        return updatedWidths;
      });

      if (elapsed < intervalDuration) {
        requestAnimationFrame(animateButtonWidth);
      }
    };

    startTime = performance.now();
    requestAnimationFrame(animateButtonWidth);

    if (slideInterval.current) {
      clearInterval(slideInterval.current); // Clear the interval
    }
    slideInterval.current = setInterval(changeSlide, 7000); // Set the interval again
  }, [activeSlide]); // Reset the timer whenever activeSlide changes

  const handleButtonClick = (index: number) => {
    setActiveSlide(index); // Set the active slide to the button's index
    updateButtonWidths(activeSlide, index)
  };

  //Word splitting
  const [active, setActive] = useState(true);

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <p key={`word-${i}`}>
          <span style={{ top: condition ? "0%" : "-100%" }}>{word}</span>
        </p>
      );
    });

    return body;
  };

  const text1 = "Nos Valeurs";
  const text2 =
    "Dans le domaine dynamique de l'architecture, l'adaptabilité est essentielle. Chez DKAD, nous acceptons le changement et considérons chaque défi comme une occasion d'apprendre et de progresser. Notre approche flexible nous permet d'offrir des solutions novatrices qui répondent aux besoins uniques de nos clients.";
  const text3 = "Adaptabilite";

  return (
    <section className={`${styles.mission__section}`}>
      <div className={styles.image__overflow} ref={container}>
        <motion.div className={styles.mission__image} style={{ y }}>
          <Image src={IMAGE} alt="Landscape Image" fill quality={100} />
        </motion.div>
      </div>
      <div className={`container ${styles.mission__container}`}>
        <div className={styles.mission}>
          <div className={styles.mission__wrapper}>
            <div className={styles.mission__content}>
              <span className={styles.m__header}>Notre Mission</span>
              <div className={styles.p__tags}>
                <p>
                  Notre mission est ancrée dans la création d'espaces inspirants
                  pour une meilleure qualité de vie. Nous croyons au pouvoir de
                  transformation des environnements bien conçus et à leur
                  capacité à enrichir la vie.
                </p>
                <p>
                  Chaque projet que nous entreprenons est abordé avec une
                  volonté inébranlable de dépasser les attentes et d'aller
                  au-delà des normes conventionnelles. C'est l'essence même de
                  ce que nous sommes et de ce que nous recherchons. Parce que
                  c'est notre façon de faire.
                </p>
              </div>
              <div className={styles.rounded}>
                <Rounded
                  backgroundColor="#013cac"
                  linker
                  link={currentLocale === "en" ? "/en/projects" : "/fr/projets"}
                  classNames={styles.rounded__button}
                >
                  <p>Nos Projets</p>
                </Rounded>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.values__wrapper}>
            <div className={styles.values__content}>
              <span className={styles.h__text}>
                {splitwords(text1, active)}
              </span>
              <div className={styles.v__content}>
                <div className={styles.v__header}>
                  {splitwords(ValuesData[activeSlide].name, active)}
                </div>
                <div className={styles.p__text}>
                  {splitwords(ValuesData[activeSlide].text, active)}
                </div>
              </div>
              <div className={styles.buttons}>
                {ValuesData.map((data, i) => (
                  <div
                    className={styles.progress__wrapper}
                    key={i}
                    onClick={() => handleButtonClick(i)}
                  >
                    <div
                      className={styles.progress}
                      style={{ width: `${buttonWidths[i]}%`}}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.values__images}>
              <div className={styles.images__slider}>
                <div className={styles.image}>
                  <Image src={IMAGE2} fill quality={100} alt="Project Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
