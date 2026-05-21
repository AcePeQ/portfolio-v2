
type HeroFeatureProps = {
  text: string;
  value: string;
}

function HeroFeature({ text, value }: HeroFeatureProps) {
  return (
    <div className="flex flex-col gap-3 pr-4 pl-4">
      <p className="text-orange-normal text-2xl font-extrabold"><strong>{value}</strong></p>
      <p className="text-white-normal text-xl font-bold"><strong>{text}</strong></p>
    </div>
  )
}

export default HeroFeature