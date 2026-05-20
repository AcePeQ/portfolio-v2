
type HeroFeatureProps = {
  text: string;
  value: string;
}

function HeroFeature({ text, value }: HeroFeatureProps) {
  return (
    <div>
      <p><strong>{value}</strong></p>
      <p><strong>{text}</strong></p>
    </div>
  )
}

export default HeroFeature