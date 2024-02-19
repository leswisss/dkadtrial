"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import { TitleReusable, ProjectsBottom } from '..'
import styles from "../../styles/HomePage/projects.module.scss"

const HomeProjects = () => {
  const { t } = useTranslation();

  const title = t("HomePage:ourprojects")
  const text = t("HomePage:")
  return (
    <section className="section">
      <div className="container">
        <TitleReusable classNames={styles.header__style} title={title} text={text}/>
      </div>
      <ProjectsBottom />
    </section>
  )
}

export default HomeProjects