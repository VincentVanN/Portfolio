/* eslint-disable import/prefer-default-export */
export const navLeftVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      x: { delay: 1 },
    },
  },
  init: {
    x: -800,
  },
};
export const navRightVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      x: { delay: 1 },
    },
  },
  init: {
    x: 800,
  },
};
export const homeTopLeftVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      y: { delay: 0.1 },
    },
  },
  close: {
    x: -800,
    transition: {
      duration: 0.2,
    },
  },
  init: {
    y: -500,
  },
};
export const homeTopRightVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      y: { delay: 0.1 },
    },
  },
  close: {
    x: 1000,
    transition: {
      duration: 0.2,
    },
  },
  init: {
    y: -500,
  },
};
export const homeBottomLeftVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      y: { delay: 0.6 },
    },
  },
  close: {
    x: 800,
    transition: {
      duration: 0.2,
    },
  },
  init: {
    y: -500,
  },
};
export const homeBottomRightVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      y: { delay: 0.6 },
    },
  },
  close: {
    x: -1000,
    transition: {
      duration: 0.2,
    },
  },
  init: {
    y: -500,
  },
};
