import React from "react";
import { Solution, Modal } from "..";
import { Solutions } from "@/utils";
import styles from "../../styles/HomePage/solutionsbottom.module.scss";

const SolutionsBottom = () => {
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
                  text={so}
                  key={i}
                />
              );
            })}
          </div>

          <Modal solutions={Solutions}  />
        </div>
        <div className={styles.desktop__bottom}></div>
      </div>
      <div className={styles.mobile}></div>
    </div>
  );
};

export default SolutionsBottom;
