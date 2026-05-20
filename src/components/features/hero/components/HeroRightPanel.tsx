import Image from "next/image"
import ImageFace from "@/assets/images/cartoonFaceAlpha.png"

function HeroRightPanel() {
  return (
    <div>
      <figure>
        <Image src={ImageFace} alt="Picture of Maciej Nojszewski - blue eyes, dark short hair" />
        <figcaption>Picture of me (Maciej Nojszewski)</figcaption>
        <div aria-hidden />
      </figure>
    </div>
  )
}

export default HeroRightPanel