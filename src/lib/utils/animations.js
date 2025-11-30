export const fadeUp = {
  initial: { opacity: 0, y: 25 },
  enter: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const slideDown = {
  initial: { y: -100 },
  animate: { y: 0 },
};
