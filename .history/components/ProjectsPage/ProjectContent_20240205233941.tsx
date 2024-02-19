import React from 'react'
import { Project } from '..'
import { ProjectsData } from '@/utils'
import styles from "../../styles/ProjectsPage/pcontent.module.scss"

const ProjectContent = () => {
  return (
    <section className={styles.content__section}>
      <div className={`container ${styles.content__container}`}>
        <div className={styles.content__wrapper}>
          {
            Pro
          }
          <Project />
        </div>
      </div>
    </section>
  )
}

export default ProjectContent