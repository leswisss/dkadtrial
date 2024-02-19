import React from 'react'
import { motion } from "framer-motion"
import { Icon } from "@iconify/react";
import { modalAnimation } from "@/animations";
import styles from "../../styles/HomePage/solutionmodal.module.scss"

const SolutionModal = ({activeModal, setActiveModal, }) => {
  return (
    <div
        className={`${styles.solution__modal} ${
          activeModal ? styles.active__modal : ""
        }`}
      >
        <motion.div variants={modalAnimation} initial="initial" animate={activeModal ? "enter" : "initial"} className={styles.sm__content}>
          <div className={styles.sm__container}>
            <div className={styles.sm__header}>
              <span className={styles.sm__title}>{title}</span>
              <span
                onClick={() => {
                  setActiveModal(false);
                }}
              >
                <Icon icon="material-symbols-light:cancel-outline" />
              </span>
            </div>
            <div className={styles.text__extended}>
              <p>{text}</p>
              <p>{text2}</p>
            </div>
          </div>
          <div className={styles.sm__image_container}>
            <div className={styles.sm__image}>
              <Image src={image} fill alt={title} quality={100} />
            </div>
          </div>
        </motion.div>
      </div>
  )
}

export default SolutionModal