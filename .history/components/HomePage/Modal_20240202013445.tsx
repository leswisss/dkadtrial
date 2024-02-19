"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { scaleAnimation } from "@/animations";
import { solutionProps } from "@/types";
import styles from "../../styles/HomePage/modal.module.scss";

interface SolutionsProp {
  solutions: solutionProps[];
}

const Modal = ({ solutions }: SolutionsProp) => {
  return (
    <>
      <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
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

      <motion.div className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>

      <motion.div className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  );
};

export default Modal;
