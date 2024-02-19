"use client";

import React, { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import Link from "next/link";
import styles from "../../styles/ProjectsPage/phero.module.scss";

interface ProjectInterface {
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  animationFinished: boolean;
}

const ProjectsHero = ({
  setImageLoaded,
  animationFinished,
}: ProjectInterface) => {
  const { t, i18n } = useTranslation();

  const currentLocale = i18n.language;
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const services = [
    t("ProjectsPage:all"),
    t("HomePage:interior"),
    t("HomePage:exterior"),
    t("HomePage:landscape"),
  ];

  const filters = [
    {
      name: "Tous",
      param: "",
      link:
        currentLocale === "en"
          ? `/${currentLocale}/projects`
          : `/${currentLocale}/projets`,
    },
    {
      name: "Intérieur",
      param: "interior",
      link:
        currentLocale === "en"
          ? `/${currentLocale}/projects?service=interior`
          : `/${currentLocale}/projets?service=intérieur`,
    },
    {
      name: "Extérieur",
      param: "exterior",
      link:
        currentLocale === "en"
          ? `/${currentLocale}/projects?service=exterior`
          : `/${currentLocale}/projects?service=extérieur`,
    },
    {
      name: "Aménagement Paysager",
      param: "landscaping",
      link:
        currentLocale === "en"
          ? `/${currentLocale}/projects?service=landscaping`
          : `/${currentLocale}/projects?service=aménagement-paysager`,
    },
  ];

  //Preloader Animations

  //Simulate Image Loading
  useEffect(() => {
    setImageLoaded(true);
  }, []);

  const heroText = t("ProjectsPage:herotext");
  const refs = useRef<HTMLSpanElement[]>([]);
  const filterRefs = useRef<HTMLAnchorElement[]>([]);
  const lineRef = useRef(null);

  const splitwords2 = () => {
    let body: JSX.Element[] = [];
    heroText.split(" ").forEach((word, i) => {
      body.push(
        <div key={`word-${i}`} className={styles.word__wrapper}>
          <p ref={(el) => el && refs.current.push(el)} className={styles.word}>
            {word}
          </p>
        </div>
      );
    });

    return body;
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.to(refs.current, {
        y: "0%",
        ease: "none",
        stagger: 0.02,
      });

      tl.to(
        filterRefs.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.in",
          stagger: 0.1,
        },
        "<+0.8"
      );

      tl.to(lineRef.current, {
        width: "100%",
        ease: "power4.inOut",
        duration: 2,
      }, ">");

      tl.pause();

      if (animationFinished) {
        tl.resume();
      }
    });

    return () => context.revert();
  }, [animationFinished]);

  return (
    <section className={`section__special ${styles.projects__section}`}>
      <div className={`container ${styles.projects__container}`}>
        <div className="header__text">
          <div className={`header__text-main ${styles.htext__main}`}>
            {splitwords2()}
          </div>
        </div>
        <div className={styles.filters}>
          <div className={styles.filter__swiper}>
            {filters.map((data, i) => (
              <Link
                href={data.link}
                className={`${styles.filter__container} ${
                  (!serviceParam && data.param === "") ||
                  serviceParam === data.param
                    ? styles.active
                    : ""
                }`}
                key={i}
                ref={(el) => el && filterRefs.current.push(el)}
                style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
              >
                {services[i]}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <span className={styles.bottom__line} ref={lineRef}></span>
    </section>
  );
};

export default ProjectsHero;
