"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ProjectsContent } from "@/utils";
import gsap from "gsap";
import { AnimatedPhrase } from "..";
import styles from "../../styles/Navigation/preloader.module.scss";

interface PreloaderProps {
  imageLoaded?: boolean;
  setAnimationFinished: React.Dispatch<React.SetStateAction<boolean>>;
  localState: string;
}

const Preloader2 = ({
  imageLoaded,
  setAnimationFinished,
  localState,
}: PreloaderProps) => {
  const { t, i18n } = useTranslation();
  const currentPathname = usePathname();

  const phrase = t("Navigation:translating");
  const home = t("Navigation:accueil");
  const project = t("Navigation:projets");
  const about = t("Navigation:apropos");
  const services = t("Navigation:services");
  const details = "Details";
  const contact = t("Navigation:contacter");
  const error = t("Navigation:error");

  //Get Page Name
  const [pageName, setPageName] = useState("");

  // Extract the project slug from the URL
  const parameters = useParams();
  const slugg = parameters.project;

  useEffect(() => {
    const determinePageName = () => {
      if (currentPathname === "/en" || currentPathname === "/fr") {
        setPageName(home);
      } else if (
        ["/en/projects", "/fr/projets", "/en/projects?service=interior", "/fr/projets?service=intérieur", "/en/projects?service=exterior", "/fr/projets?service=extérieur", "/en/projects?service=lansdcaping", "/fr/projets?service=aménagement-paysager"].includes(currentPathname)
      ) {
        setPageName(project);
      } else if (currentPathname === "/fr/a-propos" || currentPathname === "/en/about") {
        setPageName(about);
      } else if (currentPathname === "/fr/services" || currentPathname === "/en/services") {
        setPageName(services);
      } else if (currentPathname === "/fr/contact" || currentPathname === "/en/contact") {
        setPageName(contact);
      } else if (
        (currentPathname.includes("/fr/projets/") && currentPathname !== "/fr/projets") ||
        (currentPathname.includes("/en/projects/") && currentPathname !== "/en/projects")
      ) {
      
        // Validate if the project exists
        const projectData = ProjectsContent.find(project => project.slug === slugg);
        if (projectData) {
          setPageName(projectData.name);
        } else {
          setPageName(error);
        }
      } else {
        setPageName(error);
      }
    };

    determinePageName();
  }, [currentPathname]);


  const refs = useRef<HTMLSpanElement[]>([]);
  const preloaderRef = useRef(null);
  const centralRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setAnimationFinished(true),
      });

      tl.to(refs.current, {
        y: 0,
        ease: "none",
        stagger: 0.05,
      });

      tl.to(
        centralRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
          delay: 1,
        },
        ">"
      );

      tl.to(
        refs.current,
        {
          y: "110%",
          ease: "none",
          stagger: -0.05,
        },
        "<"
      );

      tl.to(
        preloaderRef.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power4.inOut",
        },
        "<"
      );

      tl.to(preloaderRef.current, {
        display: "none",
        duration: 0,
      });

      tl.pause();

      if (imageLoaded) {
        tl.resume();
      }
    });

    return () => context.revert();
  }, [imageLoaded]);

  const splitwords = () => {
    let body: JSX.Element[] = [];
    pageName.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={`word-${i}`} className={styles.word}>
          {letters}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          className={styles.letter2}
          ref={(el) => el && refs.current.push(el)}
          key={`letter-${index}`}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <section className={styles.preloader__two} ref={preloaderRef}>
      <div className={styles.max__width_two}>
        <div className={styles.central__text} ref={centralRef}>
          {localState === "Translating State" && (
            <AnimatedPhrase phrase={phrase} />
          )}
        </div>
        {localState === "Initial State" && (
          <div className={styles.page__name}>{splitwords()}</div>
        )}
      </div>
    </section>
  );
};

export default Preloader2;
