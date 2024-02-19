import React from 'react'
import Lenis from '@studio-freight/lenis/types'
import { SolutionsBottom, TitleReusable } from '..'
import initTranslations from '@/app/i18n'


const HomeSolutions = async ({lenis, locale}: {lenis: Lenis | null, locale: string }) => {
  const { t } = await initTranslations(locale, ["HomePage"])
  const title = t("oursolutions")
  const text = t("solutionstext")
  return (
    <section className="section">
      <div className="container">
        <TitleReusable title={title} text={text}/>
      </div>
      <SolutionsBottom lenis={lenis} />
    </section>
  )
}

export default HomeSolutions