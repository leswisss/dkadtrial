"use client";

import React, { useState } from 'react'
import { Accordion, TitleReusable } from '..'
import { useTranslation } from 'react-i18next';
import Lenis from "@studio-freight/lenis/types";
import styles from "../../styles/AboutPage/aboutteam.module.scss"

const AboutTeam = ({lenis}: {lenis: Lenis | null}) => {
  const { t } = useTranslation();
  const title = t("AboutPage:team")
  const text2 = t("AboutPage:teamtext")

  const [activeAccordion, setActiveAccordion] = useState(-1);

  return (
    <section className={`${styles.team__section}`}>
      <div className={`container ${styles.team__container}`}>
        <TitleReusable title={title} text={text2}/>
        <div className={styles.accordion__section}>
          {
            [0,1,2,3,4].map((data, i) =>  (
              <Accordion key={i} index={i} activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} lenis={lenis} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutTeam