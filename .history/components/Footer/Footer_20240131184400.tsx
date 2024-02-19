"use client";

import React, { useRef } from "react";
import { FooterLinks } from "@/utils";
import { Magnetic } from "..";
import Link from "next/link";
import Image from "next/image";
import IMAGE from "../../public/images/businesscard.jpg";
import styles from "../../styles/Footer/footer.module.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const container = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo(
      container.current,
      { y: -300 },
      { y: 0 }
    );
  }, []);


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
                      href={data.link}
                      className={styles.footer__link}
                    >
                      {data.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className={styles.contact}>
                <div className={styles.menu}>
                  <span className={styles.nav_header}>Prendre Contact</span>
                  <div className={styles.footer__links}>
                    <Link
                      href="tel:+237690756994"
                      className={styles.footer__link}
                    >
                      +237 690-756-994
                    </Link>
                    <Link
                      href="mailto:onac464@yahoo.com"
                      className={styles.footer__link}
                    >
                      onac464@yahoo.com
                    </Link>
                  </div>
                </div>
                <div className={styles.menu}>
                  <span className={styles.nav_header}>Adresse</span>
                  <div className={styles.footer__links}>
                    <span className={styles.footer__link}>
                      Rue 1.894, Yaounde I(Bastos)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ft__right}>
              <div className={styles.menu}>
                <span className={styles.nav_header}>À Propos de DKAD</span>
                <div className={styles.footer__links}>
                  <span className={styles.footer__link}>
                    DKAD révolutionne la conception architecturale en créant des
                    structures distinctives qui contribuent au caractère de nos
                    villes.
                  </span>
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
              <span className={styles.nav_header}>S'Inscrire</span>
              <div className={styles.footer__links}>
                <span className={styles.footer__link}>Newsletter</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer__image_wrapper}>
        <div className={styles.footer__image_content} ref={container}>
          <div className={`container ${styles.footeri__container}`}>
            <h3>
              DONFACK KENGNI
              <br />
              ARCHITECTURE & DESIGN
            </h3>
            <div className={styles.footer__footer}>
              <span>&copy; DKAD {year}</span>
              <span>
                Built by <span className={styles.underline}>Better Marque</span>
              </span>
            </div>
          </div>
          <div className={styles.footer__image}>
            <Image src={IMAGE} alt="Carte de Visiste" fill quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
