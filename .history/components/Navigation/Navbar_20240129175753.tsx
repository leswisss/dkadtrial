import React from 'react'
import styles from "../../styles/Navigation/navbar.module.scss"
import { NavMenu } from '@/utils'
import { Magnetic, Rounded } from '..'

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
              <span className={styles.menu__text}>Menu</span>
            </div>
            <div className={styles.left__menu}>
              {
                NavMenu.map((data, i) => (
                  <Link key={`link-${i}`} href={data.link}>{data.name}</Link>
                ))
              }
            </div>
          </div>
          <div className={styles.nav__center}>

          </div>
          <div className={styles.nav__right}>
            <Magnetic>
              <div>Solo</div>
            </Magnetic>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar