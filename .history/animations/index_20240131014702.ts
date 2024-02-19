const transition = {duration: 0.7, ease: [.7, 0, .3, 1]}

export const sideBarAnim = {
  initial: {
    height: "0vh"
  },
  entry: {
    height: "100vh",
    transition: transition
  },
  exit: {
    height: "0vh",
    transition: transition
  }
}

export const sideBarImageAnim = {
  initial: {
    height: "0px"
  },
  entry: {
    height: "320px",
    transition: {duration: 0.7, ease: [.7, 0, .3, 1], dela}
  },
  exit: {
    height: "0px",
    transition: transition
  }
}