import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IMAGE from "../../public/images/architecture.jpg"
import styles from "../../styles/ProjectsPage/project.module.scss"


const Project = () => {
  const services = ["Interior", "Exterior", "Landscaping Amanagement", "Supervision"]
  return (
    <Link href="/" className={styles.project__wrapper}>
      <div className={styles.image__content}>
        <div className={styles.image__overflow}>
          <Image src={IMAGE} fill quality={100} alt="ProjectImage"/>
        </div>
        <div className={styles.image__overlay}>
          <div className={styles.p__services}>
            
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project