const transition = {duration: 0.7, ease: [.7, 0, .3, 1]}

export const sideBarAnim = {
  initial: {
    clip: "100%",
  },

  entry: {
    y: "0%",
    transition: transition
  },

  exit: {
    y: "-100%",
    transition: transition
  }
}