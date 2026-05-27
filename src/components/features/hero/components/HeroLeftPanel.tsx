import Button from "@/components/ui/button/Button"
import LinkIcon from "@/components/ui/linkIcon/LinkIcon"
import { SOCIAL_MEDIA_NAVIGATION } from "@/lib/constants/navigation"
import HeroFeatures from "./HeroFeatures"


function HeroLeftPanel() {
  return (
    <div className="flex flex-col flex-3 xl:flex-1">
      <hgroup className="mb-6 xl:mb-8">
        <p className="text-white-dark-active text-2xl">Hi I am</p>
        <p className="text-white-dark-hover text-[28px] mb-2 xl:mb-4">Maciej Nojszewski</p>
        <h1 className="leading-18">Junior Frontend Developer</h1>
      </hgroup>

      <nav className="mb-12 xl:mb-16">
        <ul className="flex gap-4">
          {SOCIAL_MEDIA_NAVIGATION.map(link => {
            const Icon = link.icon;

            return (
              <li key={link.path}>
                <LinkIcon path={link.path}>{Icon ? <Icon /> : null}</LinkIcon>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex gap-6 mb-12 xl:mb-16">
        <Button isLink path="/#contact" variant="primary" size="medium">Hire Me</Button>
        <Button isLink download="Maciej_Nojszewski_CV" path="/assets/files/Maciej_Nojszewski_CV.pdf" variant="ghost" size="medium">Download CV</Button>
      </div>

      <HeroFeatures />
    </div>
  )
}

export default HeroLeftPanel
