import HeroLeftPanel from "./components/HeroLeftPanel"
import HeroRightPanel from "./components/HeroRightPanel"

function Hero() {
  return (
    <section id="home" className="max-h-195">
      <div className="flex gap-20">
        <HeroLeftPanel />
        <HeroRightPanel />
      </div>
    </section>
  )
}

export default Hero