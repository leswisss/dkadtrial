"use client";

import React, {useEffect} from 'react'
import { ServicesHeader, SolutionsBottom } from '..'
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
  }, []);

  return (
    <>
      <ServicesHeader />
      <SolutionsBottom />
    </>
  )
}

export default ServicesPageWrapper