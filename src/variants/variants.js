/* eslint-disable import/prefer-default-export */
//
// home variants
//
export const homeTopLeftVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
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
//
// nav variants
//
export const initNavHomeVariants = {
  close: {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',
    transition: {
      top: {
        duration: 1,
        delay: 0.4,
      },
    },
  },
  init: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
export const navOtherPageVariants = {
  init: {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
};
export const navOtherPageToHomeVariants = {
  init: {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
  open: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: {
      top: {
        duration: 0.5,
      },
    },
  },
  close: {
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',
    transition: {
      top: {
        duration: 1,
        delay: 0.5,
      },
    },
  },
};
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
//
// home variants
//
export const centerVariants = {
  other: {
    opacity: 0,
    transition: {
      delay: 0.4,
    },
  },
  about: {
    left: '25%',
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
  home: {
    display: 'block',
  },
};
