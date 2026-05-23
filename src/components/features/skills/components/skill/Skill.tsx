type SkillProps = {
  skill: string;
  percentage: number;
}
function Skill({ percentage, skill }: SkillProps) {
  return (
    <div>
      <div className="relative w-40 h-40">
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
            stroke-linecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={`calc(251.2px - (251.2px * ${percentage}) / 100)`}
          ></circle>
        </svg>
      </div>
      <p className='text-3xl font-bold text-orange-normal'>{percentage}%</p>
      <p className='text-2xl font-bold text-white-dark-hover'>{skill}</p>
    </div>
  )
}

export default Skill