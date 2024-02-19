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
            {su.map((project, index) => {
              return (
                <Solution
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                />
              );
            })}
          </div>

          <Modal modal={modal} projects={projects} />
        </div>
        <div className={styles.desktop__bottom}></div>
      </div>
      <div className={styles.mobile}></div>
    </div>
  );
};

export default SolutionsBottom;
