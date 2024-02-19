import React from 'react'
import styles from "../../styles/HomePage/cursor.module.scss"

const Cursor = () => {
  return (
    <div className={styles.cursor}>
            <div className={styles.cursor__content}>
              <div className={styles.cursor__swiper}>
                <div className={styles.directives}><Icon icon="la:angle-left" /> <span>1/3</span> <Icon icon="la:angle-right" /></div>
                <span>View</span>
              </div>
            </div>
          </div>
  )
}

export default Cursor