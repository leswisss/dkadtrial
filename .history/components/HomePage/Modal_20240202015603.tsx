"use client";

import React, {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { scaleAnimation } from "@/animations";
import { solutionProps } from "@/types";
import styles from "../../styles/HomePage/modal.module.scss";

interface SolutionsProp {
  solutions: solutionProps[];
  modal: any
}

const Modal = ({ modal, solutions }: SolutionsProp) => {
  const { active, index } = modal;

  const modalContainer = useRef(null);

  const cursor = useRef(null);

  const cursorLabel = useRef(null);


  useEffect( () => {

    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})


    window.addEventListener('mousemove', (e) => {

      const { pageX, pageY } = e;

      xMoveContainer(pageX)

      yMoveContainer(pageY)

      xMoveCursor(pageX)

      yMoveCursor(pageY)

      xMoveCursorLabel(pageX)

      yMoveCursorLabel(pageY)

    })

  }, [])

  return (
    <>
      <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer} ref={modalContainer}>
        <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
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
