import React from 'react'
import { motion } from "framer-motion"
import { solutionProps } from '@/types'
import styles from ""

interface SolutionsProp{
  solutions: solutionProps[]
}

const Modal = ({solutions}: SolutionsProp) => {
  return (
    <>

        <motion.div className={styles.modalContainer}>

            <div className={styles.modalSlider}>

            {

                solutions.map( (solution, index) => (


              <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>

                    <Image 

                    />

                </div>

                ))

            }

            </div>

        </motion.div>

        <motion.div className={styles.cursor}></motion.div>

        <motion.div className={styles.cursorLabel} >View</motion.div>

    </>
  )
}

export default Modal