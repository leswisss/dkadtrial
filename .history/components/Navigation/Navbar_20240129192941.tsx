import React from "react";
import styles from "../../styles/Navigation/navbar.module.scss";
import { NavMenu } from "@/utils";
import { Magnetic, Rounded } from "..";
import Link from "next/link";
import Image from "next/image";
import IMAGE1 from "../../public/images/SVG/svgblack.svg"
import IMAGE2 from "../../public/images/SVG/svgwhite.svg"

const Navbar = () => {
  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.navigation__container}`}>
          <div className={styles.nav__left}>
            <div className={styles.left__button}>
              <div className={styles.line__wrapper}>
                <span></span>
                <span></span>
              </div>
              <span className={styles.menu__text}>Menu</span>
            </div>
            <div className={styles.left__menu}>
              {NavMenu.map((data, i) => (
                <Magnetic>
                  <Link key={`link-${i}`} href={data.link}>
                    {data.name}
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
          <div className={styles.nav__center}>
            
          </div>
          <div className={styles.nav__right}>
            <div className={styles.right__language}>
              <Link href="/en">EN</Link>
              <span>/</span>
              <Link href="/fr">FR</Link>
            </div>
            <div className={styles.right__cta}>
              <Rounded backgroundColor="#013cac" className={styles.cta_button}>
                <p>Prenez contact</p>
              </Rounded>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
