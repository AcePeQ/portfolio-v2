import { stagger } from "motion/react";

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.06, { startDelay: 0.02 }),
      opacity: {
        duration: 0.42,
        ease: "easeOut",
      },
      y: {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      },
      filter: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
} as const;

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      opacity: {
        duration: 0.34,
        ease: "easeOut",
      },
      y: {
        duration: 0.24,
        ease: [0.22, 1, 0.36, 1],
      },
      filter: {
        duration: 0.24,
        ease: "easeOut",
      },
    },
  },
} as const;
