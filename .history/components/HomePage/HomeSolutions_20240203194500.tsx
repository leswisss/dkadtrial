import React from 'react'
import Lenis from '@studio-freight/lenis/types'
import { SolutionsBottom, TitleReusable } from '..'
import initTranslations from '@/app/i18n'
import { useTranslation } from 'react-i18next'


const HomeSolutions = ({lenis}: {lenis: Lenis | null}) => {
  const { t } = useTranslation()
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