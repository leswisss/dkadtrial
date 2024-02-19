"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Rounded } from "..";
import { valuesAnim } from "@/animations";
import { useScroll, motion, useTransform, useAnimation } from "framer-motion";
import IMAGE from "../../public/images/background.jpg";

import VALUE from "../../public/images/integrity.jpg";
import VALUE2 from "../../public/images/adaptability.jpg";
import VALUE3 from "../../public/images/collaboration.jpg";
import VALUE4 from "../../public/images/innovation.jpg";
import VALUE5 from "../../public/images/resilience.jpg";

import styles from "../../styles/AboutPage/mission.module.scss";


const AboutMission = () => {

  const ValuesData = [
    {
      name: "Integrity",
      text: "Nous accordons de l'importance aux relations durables. Nous instaurons la confiance par une approche de partenariat, démontrant ainsi notre engagement pour la réussite de tous ceux avec qui nous travaillons. Nos actions reflètent notre intégrité, montrant que nous donnons la priorité au succès mutuel plutôt qu'au gain individuel.",
      image: VALUE,
    },
    {
      name: "Adaptability",
      text: "Dans le domaine dynamique de l'architecture, l'adaptabilité est essentielle. Chez DKAD, nous acceptons le changement et considérons chaque défi comme une occasion d'apprendre et de progresser. Notre approche flexible nous permet d'offrir des solutions novatrices qui répondent aux besoins uniques de nos clients.",
      image: VALUE2,
    },
    {
      name: "Collaboration",
      text: "Chez DKAD, nous croyons au pouvoir de l'unité. Nous favorisons un environnement de collaboration où les idées de chacun sont valorisées. Notre approche du travail d'équipe nous permet d'offrir des solutions architecturales qui reflètent un large éventail de perspectives.",
      image: VALUE3,
    },
    {
      name: "Innovation",
      text: "Chez DKAD, l'innovation est notre pierre angulaire. Nous repoussons constamment les limites de la conception architecturale, en incorporant les dernières technologies et tendances pour créer des espaces qui inspirent. Cette approche originale nous permet de transformer les idées en réalité et de créer des espaces uniques qui se démarquent.",
      image: VALUE4,
    },
    {
      name: "Resilience",
      text: "La résilience est plus qu'une compétence, c'est notre essence. Nous relevons les défis de front, transformant les obstacles en tremplins de croissance. Quelle que soit la complexité des défis auxquels nous sommes confrontés, la résilience chez DKAD nous permet de rester ancrés dans notre mission.",
      image: VALUE5,
    }
  ];


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

  const changeSlide = () => {
    setActiveSlide((prevSlide) => {
      return (prevSlide + 1) % ValuesData.length; // This will loop back to the first slide after the last one
    });
  };

  const [gapper, setGapper] = useState(0);

  useEffect(() => {
    if (progressWrapperRefs.current.length > 1) {
      const firstOffset = progressWrapperRefs.current[0]?.offsetLeft;
      const secondOffset = progressWrapperRefs.current[1]?.offsetLeft;
      const firstWidth = progressWrapperRefs.current[0]?.offsetWidth;

      if (
        firstOffset !== undefined &&
        secondOffset !== undefined &&
        firstWidth !== undefined
      ) {
        const gap = secondOffset - firstOffset - firstWidth;
        setGapper(gap);
      }
    }

    slideInterval.current = setInterval(changeSlide, 7000); // Change slide every 7 seconds

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current); // Clean up the interval on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current); // Clear the interval
    }

    slideInterval.current = setInterval(changeSlide, 7000); // Set the interval again
  }, [activeSlide]); // Reset the timer whenever activeSlide changes

  const handleButtonClick = (index: number) => {
    setActiveSlide(index); // Set the active slide to the button's index
  };

  //Word splitting

  const splitwords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <p key={`word-${i}`}>
          <span>{word}</span>
        </p>
      );
    });

    return body;
  };

  const splitwordSpecial = (phrase: string, selected: number) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <p key={`word-${i}`}>
          <motion.span custom={i} variants={valuesAnim} animate={activeSlide===selected ? "enter" : "initial"}>{word}</motion.span>
        </p>
      );
    });

    return body;
  };

  const text1 = "Nos Valeurs";

  const progressWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

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
              <span className={styles.m__header}>{t("")}</span>
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
              <span className={styles.h__text}>{splitwords(text1)}</span>
              <div className={styles.v__content}>
                <div className={styles.v__header}>
                  {ValuesData.map((data, i) => (
                    <div className={styles.v__headerr} key={i}>{splitwordSpecial(data.name, i)}</div>
                  ))}
                </div>
                <div className={styles.p__text}>
                {ValuesData.map((data, i) => (
                  <div className={styles.pp__text}>
                    {splitwordSpecial(data.text, i)}
                  </div>
                  ))}
                </div>
              </div>
              <div className={styles.buttons}>
                {ValuesData.map((data, i) => (
                  <div
                    className={styles.progress__wrapper}
                    key={i}
                    onClick={() => handleButtonClick(i)}
                    ref={(el) => (progressWrapperRefs.current[i] = el)}
                  ></div>
                ))}
                <div
                  className={styles.progress}
                  style={{
                    transform: `translateX(calc(${activeSlide}*100% + ${
                      (activeSlide * gapper) / 16
                    }rem))`,
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.values__images}>
              <div
                className={styles.images__slider}
                style={{ transform: `translateX(${-activeSlide * 100}%)` }}
              >
                {ValuesData.map((data, i) => (
                  <div className={styles.image} key={i}>
                    <Image
                      src={data.image}
                      fill
                      quality={100}
                      alt="Project Image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
