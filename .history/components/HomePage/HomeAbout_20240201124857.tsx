import React from 'react'

const HomeAbout = ({reference}: {reference: React.RefObject<HTMLDivElement>}) => {
  return (
    <section ref={reference} style>
      solo
    </section>
  )
}

export default HomeAbout