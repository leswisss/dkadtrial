import React from 'react'
import { TitleReusable } from '..'
import styles from "../../styles/HomePage/projects.module.scss"

const HomeProjects = () => {
  const title = "Nos Projets"
  return (
    <section className={styles.projects__section}>
      <div className={`container ${styles.project__container}`}>
        <TitleReusable classNames={styles.header__style} title={}/>
      </div>
    </section>
  )
}

export default HomeProjects