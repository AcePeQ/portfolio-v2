import HeroFeature from "./HeroFeature"


function HeroFeatures() {
  return (
    <div className="max-w-fit bg-grey-dark rounded-md flex px-6 py-6">
      <HeroFeature text="Years Experience" value="1+" />
      <HeroFeature text="Project done" value="15+" />
      <HeroFeature text="Technologies Used" value="20+" />
    </div>
  )
}

export default HeroFeatures