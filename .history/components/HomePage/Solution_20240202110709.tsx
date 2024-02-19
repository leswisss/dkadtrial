"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Lenis from "@studio-freight/lenis/types";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/HomePage/solution.module.scss";

interface SolutionProps {
  index: number;
  title: string;
  text: string;
  text2: string;
  image: StaticImageData;
  setModal: any;
  lenis: Lenis | null;
}

const Solution = ({
  index,
  title,
  text,
  text2,
  image,
  setModal,
  lenis,
}: SolutionProps) => {
  const [activeModal, setActiveModal] = useState(false);

  const handleLenisScroll = () => {
    if (lenis) {
      if (activeModal) {
        lenis.stop();
        console.log("stop")
      } else {
        lenis.start();
        console.log
      }
    }
  };

  return (
    <>
      <div
        className={styles.solution__container}
        style={{ borderBottom: index === 2 ? "1px solid #5b5b5b" : "none" }}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        onClick={() => {setActiveModal(true); handleLenisScroll()}}
      >
        <div className={styles.solution__wrapper}>
          <div className={styles.solution__left}>
            <div className={styles.solution__index}>
              <span className={index === 0 ? styles.span__adjust : ""}>
                0{index + 1}
              </span>
            </div>
            <div className={styles.solution__title}>{title}</div>
          </div>
          <div className={styles.solution__right}>
            <div className={styles.right__text}>
              <p className="p__font">{text}</p>
            </div>
            <span>
              <Icon icon="la:angle-right" />
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.solution__modal} ${
          activeModal ? styles.active__modal : ""
        }`}
      >
        <div className={styles.sm__content}>
          <div className={styles.sm__container}>
            <div className={styles.sm__header}>
              <span className={styles.sm__title}>{title}</span>
              <span onClick={() => {setActiveModal(false); handleLenisScroll()}}>
                <Icon icon="material-symbols-light:cancel-outline" />
              </span>
            </div>
            <div className={styles.text__extended}>
              <p>{text}</p>
              <p>{text2}</p>
            </div>
          </div>
          <div className={styles.sm__image_container}>
            <div className={styles.sm__image}>
              <Image src={image} fill alt={title} quality={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
