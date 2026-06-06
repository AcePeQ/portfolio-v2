import HeroLeftPanel from "./components/HeroLeftPanel"
import HeroRightPanel from "./components/HeroRightPanel"

function Hero() {
  return (
    <section className="lg:max-h-195 mt-8 lg:mt-15">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <HeroLeftPanel />
        <HeroRightPanel />
      </div>
    </section>
  )
}

export default Hero