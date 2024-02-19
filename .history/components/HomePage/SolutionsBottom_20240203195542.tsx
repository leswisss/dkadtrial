"use client";

import React, { useState, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";
import { Solution, Modal, FixedReusable } from "..";
import { Solutions, Landscape } from "@/utils";
import styles from "../../styles/HomePage/solutionsbottom.module.scss";

const SolutionsBottom = ({ lenis }: { lenis: Lenis | null }) => {
  //Data
  const SolutionsData = [
    {
      id: 1,
      title
    }
  ]
  const [modal, setModal] = useState({ active: false, index: 0 });
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div className={styles.solutions__content}>
        <div className={`container ${styles.desktop}`} ref={mainRef}>
          <div className={styles.desktop__top}>
            <div className={styles.body}>
              {Solutions.map((solution, i) => {
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

            <Modal solutions={Solutions} modal={modal} boundary={mainRef}/>
          </div>
        </div>
        <div className={styles.desktop__bottom}>
          <FixedReusable linker={false} data={Landscape} />
        </div>
      </div>
      <div className={styles.mobile} style={{display: "none"}}></div>
    </>
  );
};

export default SolutionsBottom;
