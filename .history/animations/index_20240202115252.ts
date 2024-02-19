const transition = { duration: 0.7, ease: [0.7, 0, 0.3, 1] };

export const sideBarAnim = {
  initial: {
    height: "0vh",
  },
  entry: {
    height: "100vh",
    transition: transition,
  },
  exit: {
    height: "0vh",
    transition: transition,
  },
};

export const sideBarImageAnim = {
  initial: {
    height: "0px",
  },
  entry: {
    height: "320px",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.3 },
  },
  exit: {
    height: "0px",
    transition: transition,
  },
};

export const sideBarLinkAnim = {
  initial: {
    top: "60px",
    opacity: 0,
  },

  entry: (i: number) => ({
    top: "0px",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.2 + i * 0.2 },
  }),

  exit: (i: number) => ({
    top: "60px",
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.7, 0, 0.3, 1],
      delay: -i * 0.2 + 0.4,
    },
  }),
};

export const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};

export const modalAnimation = {
  initial: { bottom: "0%", left: "50%", x: "-50%", y: "100%" },
  enter: {bottom: "50%",
  left: "50%",
  x: "-50%",
  y: "50%", transition}
};
