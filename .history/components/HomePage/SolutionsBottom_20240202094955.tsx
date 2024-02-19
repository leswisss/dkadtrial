"use client";

import React, { useState } from "react";
import { Solution, Modal } from "..";
import { Solutions } from "@/utils";
import styles from "../../styles/HomePage/solutionsbottom.module.scss";

const SolutionsBottom = () => {

  const [modal, setModal] = useState({active: false, index: 0})
  return (
    <div className={styles.solutions__content}>
      <div className={styles.desktop}>
        <div className={styles.desktop__top}>
          <div className={styles.body}>
            {Solutions.map((solution, i) => {
              return (
                <Solution
                  index={i}
                  title={solution.title}
                  text={solution.text}
                  text2
                  key={i}
                  setModal={setModal}
                />
              );
            })}
          </div>

          <Modal solutions={Solutions} modal={modal}/>
        </div>
        <div className={styles.desktop__bottom}></div>
      </div>
      <div className={styles.mobile}></div>
    </div>
  );
};

export default SolutionsBottom;
