const transition = { duration: 0.7, ease: [0.7, 0, 0.3, 1] };

export const sideBarAnim = {
  initial: {
    height: "0dvh",
  },
  entry: {
    height: "100dvh",
    transition: transition,
  },
  exit: {
    height: "0dvh",
    transition: transition,
  },
};

export const sideBarImageAnim = {
  initial: {
    height: "0px",
  },
  entry: {
    height: "auto",
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
  initial: {
    bottom: "0%",
    left: "50%",
    x: "-50%",
    y: "100%",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  enter: {
    bottom: "50%",
    left: "50%",
    x: "-50%",
    y: "50%",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

export const valuesAnim = {
  initial: (i: number) => ({
    opacity: 0,
    top: "100%",
    transition: {
      opacity: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
      top: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: i * 0.01 },
    },
  }),

  enter: (i: number) => ({
    opacity: 1,
    top: "0%",
    transition: {
      opacity: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 0.5 },
      top: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 1 + i * 0.01 },
    },
  }),
};

export const transitionAnim = {
  initial: {
    y: "-100%",
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1]}
  },

  enter: {
    y: "0%",
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1]}
  },

  exit: {
    y: "100%",
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1]}
  }
}


export const betterMarqueAnim = {
  open: {
    width: "320px",
    height: "400px",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1]}
  },
  closed: {
    width: "0px",
    height: "0px",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 1}
  },
}
