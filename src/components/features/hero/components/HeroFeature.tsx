
type HeroFeatureProps = {
  text: string;
  value: string;
}

function HeroFeature({ text, value }: HeroFeatureProps) {
  return (
    <div className="flex flex-1 lg:flex-auto flex-col gap-4 pr-4 pl-4">
      <p className="text-orange-normal text-[22px] xl:text-2xl font-extrabold"><strong>{value}</strong></p>
      <p className="text-white-normal-hover text-[18px] xl:text-xl font-bold"><strong>{text}</strong></p>
    </div>
  )
}

export default HeroFeature