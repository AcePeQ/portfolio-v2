"use client"

import { sectionVariants } from "@/lib/helpers/animations";
import { motion } from "motion/react";
import { ReactNode } from "react"

type AnimationContainerProps = {
  children: ReactNode
}

function AnimationContainer({ children }: AnimationContainerProps) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  )
}

export default AnimationContainer
