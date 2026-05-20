import HeroLeftPanel from "./components/HeroLeftPanel"
import HeroRightPanel from "./components/HeroRightPanel"

function Hero() {
  return (
    <section id="home">
      <div className="flex gap-20">
        <HeroLeftPanel />
        <HeroRightPanel />
      </div>
    </section>
  )
}

export default Hero