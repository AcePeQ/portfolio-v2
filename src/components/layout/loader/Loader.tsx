"use client"

import { animate, motion } from "motion/react"
import { useEffect, useState } from "react"
import { useSetLoadingStatus } from "@/lib/stores/loaderStore"


const circumference = 251.2

function Loader() {
  const setLoadingStatus = useSetLoadingStatus()
  const [displayPercentage, setDisplayPercentage] = useState(0)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 4,
      ease: "linear",
      onUpdate: (latest) => setDisplayPercentage(Math.floor(latest)),
    })

    return () => controls.stop()
  }, [])

  useEffect(() => {
    if (displayPercentage === 100) {
      setLoadingStatus(false)
    }
  }, [displayPercentage, setLoadingStatus])

  return (
    <motion.div exit={{ opacity: 0 }} className="fixed top-0 left-0 w-dvw h-dvh flex items-center justify-center no-doc-scroll z-10000 bg-background">
      <div className="flex flex-col items-center w-25 xs:w-30 lg:w-40">
        <div className="relative w-25 h-25 xs:w-30 xs:h-30 lg:w-40 lg:h-40 mb-3">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-white-light-hover stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <motion.circle
              className="text-orange-normal progress-ring__circle stroke-current transition-none"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray={circumference}
              transform="rotate(-90 50 50)"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 4, ease: "linear" }}
              style={{ transition: "none" }}
            ></motion.circle>
          </svg>
          <div className="absolute w-9 h-9 xs:w-12 xs:h-12 lg:w-17 lg:h-17 top-3/6 left-3/6 -translate-2/4 text-white-dark-hover flex items-center justify-center">
            <p className='text-xl xs:text-xl lg:text-2xl font-bold text-orange-normal text-center mb-1.5'>{displayPercentage}%</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
