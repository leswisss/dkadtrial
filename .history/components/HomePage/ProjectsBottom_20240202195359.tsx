import React from 'react'
import IMAGE from "../../public/images/project1.jpg"
import IMAGE2 from "../../public/images/project2.jpg"
import styles from "../../styles/HomePage/projectsbottom.module.scss"

const ProjectsBottom = () => {
  return (
    <>
      <div className={styles.projects__bottom}>
        <div className={styles.projects__content}>
          <div className={styles.background__images}>

          </div>
          <div className={styles.project__images}>
            
          </div>
          <div className={`container ${styles.project__container}`}>

          </div>
          <div className={styles.overlay}>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsBottom