import React from 'react'
import styles from "../../styles/HomePage/footerr.module.scss"
import { StaticImageData } from 'next/image';

interface DataProps {
  title: string;
  title2: string;
  text: string;
  image: StaticImageData
}

const FooterReusable = ({ data }: {data: DataProps}) => {
  const title
  return (
    <section className={`section ${styles.footerr__section}`}>
      <div className={`container ${styles.footerr__container}`}>
        <div className={styles.left}>
          <div className={styles.left__top}>
            <div className={styles.header__one}>
              
            </div>
            <div className={styles.header__two}>

            </div>
          </div>
          <div className={styles.left__bottom}>

          </div>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </section>
  )
}

export default FooterReusable