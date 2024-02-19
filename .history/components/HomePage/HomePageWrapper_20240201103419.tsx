import React from 'react'

const HomePageWrapper = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
    
    </>
  )
}

export default HomePageWrapper