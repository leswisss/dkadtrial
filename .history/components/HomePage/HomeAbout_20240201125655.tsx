import React from 'react'

const HomeAbout = ({reference}: {reference: React.RefObject<HTMLDivElement>}) => {
  return (
    <section ref={reference} style={{zIndex: 10}}>
      solo
    </section>
  )
}

export default HomeAbout