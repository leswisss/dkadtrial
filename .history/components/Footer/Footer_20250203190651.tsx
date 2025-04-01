"use client";

import React, { useEffect, useRef, useState } from "react";
import { FooterLinks } from "@/utils";
import { Magnetic } from "..";
import Link from "next/link";
import IMAGE2 from "../../public/images/bettermarque2.png";
import { useTranslation } from "react-i18next";
import { betterMarqueAnim } from "@/animations";
import { useScroll, motion, useTransform } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import IMAGE from "../../public/images/businesscard.jpg";
import IMAGE3 from "../../public/images/bettermarque.jpg";
import styles from "../../styles/Footer/footer.module.scss";
import { Icon } from "@iconify/react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  const [transform, setTransform] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 550) {
        setTransform(0);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(200);
      } else {
        setTransform(350);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, -200]);

  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const contact_trans = "Contact";
  const pro_trans = t("projets");
  const about_trans = t("apropos");
  const serv_trans = "Services";
  const gall_trans = t("gallery")

  const navigation__menu = [about_trans, serv_trans, contact_trans, pro_trans];

  //Better Marque Anim
  const [activeBetter, setActiveBetter] = useState(false);
  const betterRef = useRef(null);
  const logoRef = useRef(null);
  const footerRef = useRef(null);
  const refs = useRef<HTMLSpanElement[]>([]);
  const betterText = t("Navigation:bettermarque");

  const splitwords = () => {
    let body: JSX.Element[] = [];
    betterText.split(" ").forEach((word, i) => {
      body.push(
        <div key={`word-${i}`} className={styles.word__wrapper}>
          <p
            ref={(el) => el && refs.current.push(el)}
            className={`${styles.word} ${
              word === "Better" || word === "Marque" || word === "Marque's"
                ? styles.highlight
                : ""
            }`}
          >
            {word}
          </p>
        </div>
      );
    });

    return body;
  };

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    //TL 1
    tl.to(betterRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      duration: 0.7,
      delay: 0.7,
    }),
      tl.to(
        logoRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
          duration: 0.7,
        },
        ">"
      ),
      tl.to(
        refs.current,
        {
          y: "0%",
          ease: "none",
          stagger: 0.008,
        },
        ">"
      );

    tl.to(
      footerRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      },
      ">-0.7"
    );

    //TL 2
    tl2.to(betterRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 0.7,
    }),
      tl2.to(
        logoRef.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          ease: "power4.inOut",
          duration: 0.7,
        },
        "<"
      ),
      tl2.to(
        refs.current,
        {
          y: "-100%",
          ease: "none",
          stagger: 0.008,
        },
        "<"
      );

    tl2.to(
      footerRef.current,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      },
      "<"
    );

    tl.pause();
    tl2.pause();

    if (activeBetter) {
      tl.restart();
    } else {
      tl2.restart();
    }

    return () => {
      tl.kill();
      tl2.kill();
    };
  }, [activeBetter]);

  return (
    <section className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={`container ${styles.footer__container}`}>
          <div className={styles.footer__top}>
            <div className={styles.ft__left}>
              <div className={styles.menu}>
                <span className={styles.nav_header}>Menu</span>

                <div className={styles.footer__links}>
                  {FooterLinks.map((data, i) => (
                    <Link
                      key={i}
                      href={
                        currentLocale === "fr"
                          ? `/${currentLocale}${data.link[0]}`
                          : `/${currentLocale}${data.link[1]}`
                      }
                      className={styles.footer__link}
                    >
                      {navigation__menu[i]}
                    </Link>
                  ))}
                </div>
              </div>
              <div className={styles.contact}>
                <div className={styles.menu}>
                  <span className={styles.nav_header}>{t("contact")}</span>
                  <div className={styles.footer__links}>
                    <Link
                      href="tel:+237690756994"
                      className={styles.footer__link}
                    >
                      +237 690-756-994
                    </Link>
                    <Link
                      href="mailto:dkadstudios@yahoo.com"
                      className={styles.footer__link}
                    >
                      dkadstudios@yahoo.com
                    </Link>
                  </div>
                </div>
                <div className={styles.menu}>
                  <span className={styles.nav_header}>{t("adresse")}</span>
                  <div className={styles.footer__links}>
                    <span className={styles.footer__link}>
                      Commisariat Bastos, Yaounde
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ft__right}>
              <div className={styles.menu}>
                <span className={styles.nav_header}>{t("aproposdkad")}</span>
                <div className={styles.footer__links}>
                  <span className={styles.footer__link}>{t("footertext")}</span>
                </div>
                <div className={styles.socials}>
                  <Magnetic>
                    <Link href="/" className={styles.social__link}>
                      Instagram
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link href="/" className={styles.social__link}>
                      Facebook
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.menu}>
              <span className={styles.nav_header}>{t("explore")}</span>
              <div className={styles.footer__links}>
                <Link href={`${currentLocale==="fr" ? "/fr/galerie": "/en/gallery"}`} className={styles.footer__link}>{gall_trans}</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer__image_wrapper} ref={container}>
        <motion.div className={styles.footer__image_content} style={{ y }}>
          <div className={`container ${styles.footeri__container}`}>
            <h3>
              DONFACK KENGNI
              <br />
              ARCHITECTURE & DESIGN
            </h3>
            <div className={styles.footer__footer}>
              <span>&copy; DKAD {year}</span>
              <span>
                {t("credit")}{" "}
                <span
                  className={styles.underline}
                  onClick={() => setActiveBetter(true)}
                >
                  Better Marque
                </span>
              </span>
            </div>
            <motion.div
              variants={betterMarqueAnim}
              animate={activeBetter ? "open" : "closed"}
              className={styles.better__marque}
            >
              <div
                className={styles.bi__wrapper}
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                ref={betterRef}
              >
                <div className={styles.b__image}>
                  <Image
                    src={IMAGE3}
                    fill
                    quality={100}
                    alt="Better Marque"
                    sizes="(max-width: 600px) 100%, 100%"
                  />
                </div>
                <div className={styles.b__contact}>
                  <Icon
                    icon="fluent-mdl2:cancel"
                    onClick={() => setActiveBetter(false)}
                  />
                  <Magnetic>
                    <Link href="https://wa.me/+237693370638">{t("Navigation:contact")}</Link>
                  </Magnetic>
                </div>
              </div>
              <div className={styles.bc__content}>
                <div
                  className={styles.logo}
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                  }}
                  ref={logoRef}
                >
                  <Image
                    src={IMAGE2}
                    fill
                    alt="Better Marque"
                    quality={100}
                    sizes="(max-width: 600px) 100%, 100%"
                    loading="eager"
                  />
                </div>
                <div className={styles.text}>{splitwords()}</div>

                <div
                  className={styles.b__footer}
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                  }}
                  ref={footerRef}
                >
                  <Link href="https://www.bettermarque.com" className={styles.coming}>{t("Navigation:website")}</Link>
                  <div className={styles.button}>
                    <Link href="https://www.instagram.com/bettermarque/">Instagram</Link>
                    <Link href="https://web.facebook.com/profile.php?id=61555159313413">Facebook</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.footer__image}>
            <Image
              loading="eager"
              src={IMAGE}
              alt="Carte de Visite"
              fill
              quality={100}
              sizes="(max-width: 600px) 100%, 100%"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
