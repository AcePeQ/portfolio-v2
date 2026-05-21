import HeroLeftPanel from "./components/HeroLeftPanel"
import HeroRightPanel from "./components/HeroRightPanel"

function Hero() {
  return (
    <section id="home" className="max-h-195 mt-15">
      <div className="flex gap-20 items-center">
        <HeroLeftPanel />
        <HeroRightPanel />
      </div>
    </section>
  )
}

export default Hero