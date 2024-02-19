"use client";

import React, { useState } from "react";
import Lenis from "@studio-freight/lenis/types";
import { Icon } from "@iconify/react";
import { SolutionModal } from "..";
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
}: SolutionProps) => {
  const [activeModal, setActiveModal] = useState(false);

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
        onClick={() => {
          setActiveModal(true);
        }}
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
      <SolutionModal activeModal={activeModal} setActiveModal={setActiveModal} title={}/>
      
    </>
  );
};

export default Solution;
