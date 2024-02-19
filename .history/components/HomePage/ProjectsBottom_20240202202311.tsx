"use client";

import React, {useRef} from "react";
import IMAGE from "../../public/images/project1.jpg";
import IMAGE2 from "../../public/images/project2.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/HomePage/projectsbottom.module.scss";

const ProjectsBottom = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  return (
    <>
      <div className={styles.projects__bottom}>
        <div className={styles.projects__content} ref={container}>
          <motion.div className={styles.background__images}>
            <div className={styles.background__image}>
              <Image src={IMAGE} fill alt="Project Image" quality={100} />
            </div>
          </motion.div>
          <div className={styles.project__images}>
            <div className={styles.project__image}>
              <Image src={IMAGE2} fill alt="Project Image" quality={100} />
            </div>
          </div>
          <div className={`container ${styles.project__container}`}>

          </div>
          <div className={styles.overlay}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsBottom;
