"use client";

import React, { useState, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";
import { Solution, Modal, FixedReusable } from "..";
import { useTranslation } from "react-i18next";
import IMAGE4 from "../../public/images/interior.jpg"
import IMAGE5 from "../../public/images/exterior.jpg"
import IMAGE6 from "../../public/images/supervision.jpg"
import IMAGE7  from "../../public/images/landscape.jpg"
import styles from "../../styles/HomePage/solutionsbottom.module.scss";

const SolutionsBottom = ({ lenis }: { lenis: Lenis | null }) => {
  const { t } = useTranslation();
  //Data
  const SolutionsData = [
    {
      id: 1,
      title: t("HomePage:interior"),
      text: t("HomePage:interiortext"),
      text2: t("HomePage:interiortext2"),
      image: IMAGE4
    },
    {
      id: 2,
      title: t("HomePage:exterior"),
      text: t("HomePage:exteriortext"),
      text2: t("HomePage:exteriortext2"),
      image: IMAGE5
    },
    {
      id: 3,
      title: t("HomePage:supervision"),
      text: t("HomePage:supervisiontext"),
      text2: t("HomePage:supervisiontext2"),
      image: IMAGE6
    }
  ]

  const LandscapeData = {
      id: 1,
      title: t("HomePage:landscape"),
      text: t("HomePage:landscapetext"),
      text2: t("HomePage:landscapetext2"),
      image: IMAGE7
  }

  const [modal, setModal] = useState({ active: false, index: 0 });
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div className={styles.solutions__content}>
        <div className={`container ${styles.desktop}`} ref={mainRef}>
          <div className={styles.desktop__top}>
            <div className={styles.body}>
              {SolutionsData.map((solution, i) => {
                return (
                  <Solution
                    index={i}
                    title={solution.title}
                    text={solution.text}
                    text2={solution.text2}
                    image={solution.image}
                    key={i}
                    setModal={setModal}
                    lenis={lenis}
                  />
                );
              })}
            </div>

            <Modal solutions={SolutionsData} modal={modal} boundary={mainRef}/>
          </div>
        </div>
        <div className={styles.desktop__bottom}>
          <FixedReusable linker={false} data={LandscapeData} />
        </div>
      </div>
    </>
  );
};

export default SolutionsBottom;
