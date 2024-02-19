"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "../../styles/page.module.scss";

const HomePage = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  npm install -D @types/locomotive-scroll

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="main" style={{ height: "100vh" }}>
      swiss
    </div>
  );
};

export default HomePage;
