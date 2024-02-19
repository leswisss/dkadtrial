"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { solutionProps } from "@/types";
import styles from "../../styles/HomePage/modal.module.scss";

interface SolutionsProp {
  solutions: solutionProps[];
}

const Modal = ({ solutions }: SolutionsProp) => {
  return (
    <>
      <motion.div className={styles.modalContainer}>
        <div className={styles.modalSlider}>
          {solutions.map((solution, i) => (
            <div
              className={styles.modal}
              key={`modal_${i}`}
            >
              <Image src={solution.image} fill alt={solution.title} quality={100}/>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className={styles.cursor}></motion.div>

      <motion.div className={styles.cursorLabel}>More</motion.div>
    </>
  );
};

export default Modal;
