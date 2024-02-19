import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/architecture.jpg"
import styles from "../../styles/ProjectsPage/project.module.scss"


const Project = () => {
  return (
    <div className={styles.project__wrapper}>
      <div className={styles.image__content}>
        <div className={styles.image__overflow}>
          <Image src={IMAGE} fill quality={100} alt="ProjectImage"/>
        </div>
        <div className={styles.image__overlay}>
          <div class>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project