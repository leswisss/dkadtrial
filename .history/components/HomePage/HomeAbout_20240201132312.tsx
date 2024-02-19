import React from 'react'
import styles from "../../styles/HomePage/about.module.scss"

const HomeAbout = ({reference}: {reference: React.RefObject<HTMLDivElement>}) => {
  return (
    <section ref={reference}>
      <div className={`styles.about__container}>

      </div>
    </section>
  )
}

export default HomeAbout