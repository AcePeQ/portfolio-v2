import HeroFeature from "./HeroFeature"


function HeroFeatures() {
  return (
    <div className="shadow-sm shadow-white-darker 2xs:w-full lg:max-w-fit bg-grey-dark rounded-md flex flex-col 2xs:flex-row px-6 py-6 2xs:[&>*:first-child]:pl-0 2xs:[&>*:last-child]:pr-0 
    2xs:[&>*:last-child]:border-r-0 2xs:*:border-r-2 2xs:*:border-white-darker *:border-b *:border-white-darker *:pb-3 *:pt-3 [&>*:first-child]:pt-0
    2xs:*:border-b-0 2xs:*:pb-0 2xs:*:pt-0 
    ">
      <HeroFeature text="Years Experience" value="1+" />
      <HeroFeature text="Project done" value="15+" />
      <HeroFeature text="Technologies Used" value="20+" />
    </div>
  )
}

export default HeroFeatures