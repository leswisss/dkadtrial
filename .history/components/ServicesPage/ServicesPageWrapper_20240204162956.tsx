"use client";

import React, {useEffect, useState} from 'react'
import { ServicesHeader, SolutionsBottom } from '..'
import Lenis from "@studio-freight/lenis";

const ServicesPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

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
      <SolutionsBottom lenis={lenis}/>
    </>
  )
}

export default ServicesPageWrapper