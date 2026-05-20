import Button from "@/components/ui/button/Button"
import LinkIcon from "@/components/ui/linkIcon/LinkIcon"
import { SOCIAL_MEDIA_NAVIGATION } from "@/lib/constants/navigation"
import HeroFeatures from "./HeroFeatures"


function HeroLeftPanel() {
  return (
    <div className="flex flex-col">
      <hgroup>
        <p>Hi I am</p>
        <p>Maciej Nojszewski</p>
        <h1>Junior Frontend Developer</h1>
      </hgroup>

      <nav>
        <ul>
          {SOCIAL_MEDIA_NAVIGATION.map(link => <li key={link.path}>
            <LinkIcon path={link.path}>{link.icon}</LinkIcon>
          </li>)}
        </ul>
      </nav>

      <div>
        <Button isLink path="/#contact" variant="primary" size="medium">Hire Me</Button>
        <Button variant="ghost" size="medium">Download CV</Button>
      </div>

      <HeroFeatures />
    </div>
  )
}

export default HeroLeftPanel