import React from 'react'
import { ServicesHeader } from '..'
import Lenis from "@studio-freight/lenis";

const ServicesPageWrapper = () => {
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);
  return (
    <>
      <ServicesHeader />
    </>
  )
}

export default ServicesPageWrapper