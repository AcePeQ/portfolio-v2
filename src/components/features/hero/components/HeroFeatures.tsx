import HeroFeature from "./HeroFeature"


function HeroFeatures() {
  return (
    <div className="w-full lg:max-w-fit bg-grey-dark rounded-md flex px-6 py-6 [&>*:first-child]:pl-0 [&>*:last-child]:pr-0 [&>*:last-child]:border-r-0 *:border-r-2 *:border-white-darker">
      <HeroFeature text="Years Experience" value="1+" />
      <HeroFeature text="Project done" value="15+" />
      <HeroFeature text="Technologies Used" value="20+" />
    </div>
  )
}

export default HeroFeatures