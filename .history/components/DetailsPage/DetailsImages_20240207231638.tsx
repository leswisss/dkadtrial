import React from 'react'
import styles from "../../styles/DetailsPage/dimages.module.scss"
import Image from 'next/image'
import IMAGE from "../../public/images/project1.jpg"
import IMAGE2 from "../../public/images/project2.jpg"
import IMAGE3 from "../../public/images/project3.jpg"

const DetailsImages = () => {
  return (
    <section className={styles.images__section}>
      <div className={styles.images__wrapper}>
        <div className={styles.image__wrapper}> 
          <Image src={i}/>
        </div>
      </div>
    </section>
  )
}

export default DetailsImages