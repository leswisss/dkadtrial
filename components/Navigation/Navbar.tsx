"use client";

import React, { useState, useEffect } from "react";
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

const Navbar = ({ lang, animationFinished, setLocalState }: { lang: string, animationFinished: boolean, setLocalState: React.Dispatch<React.SetStateAction<string>> }) => {
  const [activeSide, setActiveSide] = useState(false);

  const currentPathname = usePathname();

  const [navbarStyles, setnavbarStyles] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setnavbarStyles({
          opacity: 1,
        });
      } else {
        setnavbarStyles({
          opacity: 0,
        });
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPathname]);

  //Languages
  const { t } = useTranslation();
  const pro_trans = t("projets");
  const about_trans = t("apropos");
  const serv_trans = "Services";

  const navigation__menu = [pro_trans, about_trans, serv_trans];

  return (
    <>
      <header
        className={
          currentPathname === "/en" || currentPathname === "/fr"
            ? styles.navigation
            : `${styles.navigation} ${styles.navigation__black}`
        }
        style={{opacity: animationFinished ? 1 : 0, transition: "opacity 0.7s cubic-bezier(0.7,0,0.3,1)", transitionDelay: "1s"}}
      >
        <div
          className={styles.backdrop}
          style={{
            background:
              currentPathname === "/en" || currentPathname === "/fr"
                ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 100%)"
                : "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
            opacity: navbarStyles.opacity,
          }}
        ></div>
        <div className={`container ${styles.navigation__container}`}>
          <div className={styles.nav__left}>
            <div
              className={styles.left__button}
              onClick={() => setActiveSide(true)}
            >
              <div className={styles.line__wrapper}>
                <span></span>
                <span></span>
              </div>
              <span className={styles.menu__text}>Menu</span>
            </div>
            <div className={styles.left__menu}>
              {NavMenu.map((data, i) => (
                <Magnetic key={i}>
                  <Link
                    key={`link-${i}`}
                    href={
                      lang === "en"
                        ? `/${lang}${data.link[0]}`
                        : `/${lang}${data.link[1]}`
                    }
                  >
                    {navigation__menu[i]}
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
          <Link href={`/${lang}`} className={styles.nav__center}>
            <Image
              src={
                currentPathname === "/en" || currentPathname === "/fr"
                  ? IMAGE2
                  : IMAGE1
              }
              fill
              alt="DKAD Logo"
              quality={100}
            />
          </Link>

          <div className={styles.nav__right}>
            <div className={styles.right__language}>
              <LanguageSelector setLocalState={setLocalState}/>
            </div>
            <div className={styles.right__cta}>
              <Rounded
                backgroundColor="transparent"
                classNames={styles.cta_button}
                link={`/${lang}/contact`}
                linker={true}
              >
                <p>{t("contact")}</p>
              </Rounded>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {activeSide && (
          <SideBar
            activeSide={activeSide}
            setActiveSide={setActiveSide}
            setLocalState={setLocalState}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

