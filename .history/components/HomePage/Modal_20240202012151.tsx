import React from 'react'
import 
import { solutionProps } from '@/types'

interface SolutionsProp{
  solutions: solutionProps[]
}

const Modal = ({solutions}: SolutionsProp) => {
  return (
    <>

        <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>

            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>

            {

                projects.map( (project, index) => {

                const { src, color } = project

                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>

                    <Image 

                    src={`/images/${src}`}

                    width={300}

                    height={0}

                    alt="image"

                    />

                </div>

                })

            }

            </div>

        </motion.div>

        <motion.div className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>

        <motion.div className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>

    </>
  )
}

export default Modal