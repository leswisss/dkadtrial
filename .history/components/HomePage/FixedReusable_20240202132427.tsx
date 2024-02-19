import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/landscape.jpg"
import styles from "../../styles/HomePage/fixed.module.scss"

const FixedReusable = () => {
  return (
    <div className={styles.fixed}>
      <div className={styles.background__image}>
        <Image/>
      </div>
    </div>
  )
}

export default FixedReusable