import React from 'react'
import styles from "../../styles/Navigation/navbar.module.scss"
import { NavMenu } from '@/utils'
import Link from 'next/link'

const Navbar = () => {

  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.navigation__container}`}>
          <div className={styles.nav__left}>
            <div className={styles.left__button}>
              <div className={styles.line__wrapper}>
                <span></span><span></span>
              </div>
            </div>
            <div className={styles.left__menu}>
              {
                NavMenu.map((data, i) => (
                  <Link key={`link-${i}`} href={data.}></Link>
                ))
              }
            </div>
          </div>
          <div className={styles.nav__center}>

          </div>
          <div className={styles.nav__right}>

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar