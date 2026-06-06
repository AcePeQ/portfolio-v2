"use client"

import { sectionVariants } from "@/lib/helpers/animations";
import { useSetCurrentSection } from "@/lib/stores/navigationStore";
import { motion, useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react"

type AnimationContainerProps = {
  id: string;
  children: ReactNode
}

function AnimationContainer({ id, children }: AnimationContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setCurrentSection = useSetCurrentSection();

  useEffect(() => {
    const isSeparator = id.includes("separator")

    if (isSeparator || !isInView) return;

    setCurrentSection(id);

  }, [isInView, id, setCurrentSection])


  return (
    <motion.div
      id={id}
      ref={ref}
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
