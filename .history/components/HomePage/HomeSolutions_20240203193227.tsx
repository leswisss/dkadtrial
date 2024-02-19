import React from 'react'
import Lenis from '@studio-freight/lenis/types'
import { SolutionsBottom, TitleReusable } from '..'
import initTranslations from '@/app/i18n'


const HomeSolutions = async ({lenis}: {lenis: Lenis | null }) => {
  const { t } = await init
  const title = 
  const text = 
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