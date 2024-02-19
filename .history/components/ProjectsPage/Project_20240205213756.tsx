import React from 'react'
import Image from 'next/image'
import IMAGE from "../../"
import styles from "../../styles/ProjectsPage/project.module.scss"


const Project = () => {
  return (
    <div className={styles.project__wrapper}>
      <div className={styles.image__content}>
        <div className={styles.image__overflow}>

        </div>
      </div>
    </div>
  )
}

export default Project