"use client";

import React, {useState, useRef, useLayoutEffect} from "react";
import styles from "../../styles/Navigation/navbar.module.scss";
import { NavMenu } from "@/utils";
import { Magnetic, Rounded } from "..";
import Link from "next/link";
import Image from "next/image";
import IMAGE1 from "../../public/images/SVG/svgblack.svg";
import IMAGE2 from "../../public/images/SVG/svgwhite.svg";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/utils/LanguageSelector";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


const Navbar = ({ lang }: { lang: string }) => {
  const [activeSide, setActiveSide] = useState(false);

  const currentPathname = usePathname();


  //Languages
  const { t } = useTranslation();
  const pro_trans = t("projets") 
  const about_trans = t("apropos")
  const serv_trans = "Services"

  const navigation__menu = [pro_trans, about_trans, serv_trans]

  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.navigation__container}`}>
          <div className={styles.nav__left}>
            <div className={styles.left__button} onClick={() => setActiveSide(true)}>
              <div className={styles.line__wrapper}>
                <span></span>
                <span></span>
              </div>
              <span className={styles.menu__text}>Menu</span>
            </div>
            <div className={styles.left__menu}>
              {NavMenu.map((data, i) => (
                <Magnetic key={i}>
                  <Link key={`link-${i}`} href={`/${lang}${data.link}`}>
                    {navigation__menu[i]}
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
          <div className={styles.nav__center}>
            <Image src={currentPathname==="/en" || currentPathname==="/fr" ? IMAGE2 : IMAGE1} fill alt="DKAD Logo" quality={100} />
          </div>

          <div className={styles.nav__right}>
            <div className={styles.right__language}>
              <LanguageSelector/>
            </div>
            <div className={styles.right__cta}>
              <Rounded backgroundColor="transparent" classNames={styles.cta_button} link={`/${lang}/contact`} linker={true}>
                <p>{t("contact")}</p>
              </Rounded>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {activeSide && (
          <SideBar activeSide={activeSide} setActiveSide={setActiveSide} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
