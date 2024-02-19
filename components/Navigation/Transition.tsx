"use client";

import React from 'react'
import { transitionAnim } from '@/animations';
import { motion } from "framer-motion"
import styles from "../../styles/Navigation/transition.module.scss"

const Transition = ({activeTransition}: {activeTransition: boolean}) => {
  return (
    <motion.div variants={transitionAnim} initial="initial" animate={activeTransition ? "enter" : "initial"} exit="exit" className={styles.transition}>
      <div className={styles.overflow}>
        <span>Loading...</span>
      </div>
    </motion.div>
  )
}

export default Transition