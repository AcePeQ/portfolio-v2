import { ReactNode } from "react";

type SkillProps = {
  skill: string;
  percentage: number;
  children: ReactNode
}
function Skill({ percentage, skill, children }: SkillProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-30 h-30 lg:w-40 lg:h-40 mb-3">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-white-light-hover stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-orange-normal  progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={`calc(251.2px - (251.2px * ${percentage}) / 100)`}
            transform="rotate(-90 50 50)"
          ></circle>
        </svg>

        <div className="absolute w-12 h-12 lg:w-17 lg:h-17 top-3/6 left-3/6 -translate-2/4 text-white-dark-hover flex items-center justify-center">
          {children}
        </div>
      </div>
      <p className='text-2xl lg:text-3xl font-bold text-orange-normal text-center mb-1.5'>{percentage}%</p>
      <p className='text-xl lg:text-2xl font-bold text-white-dark-hover text-center'>{skill}</p>
    </div>
  )
}

export default Skill
