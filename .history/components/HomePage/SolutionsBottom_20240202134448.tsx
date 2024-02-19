"use client";

import React, { useState } from "react";
import Lenis from "@studio-freight/lenis/types";
import { Solution, Modal, FixedReusable } from "..";
import { Solutions } from "@/utils";
import styles from "../../styles/HomePage/solutionsbottom.module.scss";

const SolutionsBottom = ({ lenis }: { lenis: Lenis | null }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className={styles.solutions__content}>
      <div className={`container ${styles.desktop}`}>
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

          <Modal solutions={Solutions} modal={modal} />
        </div>
      </div>
      <div className={styles.desktop__bottom}>
        <FixedReusable />
      </div>
    </div>
  );
};

export default SolutionsBottom;
