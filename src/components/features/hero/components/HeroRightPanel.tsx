import Image from "next/image"
import ImageFace from "@/assets/images/cartoonFaceAlpha.png"

function HeroRightPanel() {
  return (
    <div className="flex lg:flex-2 xl:flex-1 w-3/6 lg:w-full lg:h-full">
      <figure className="relative w-full h-full flex items-center justify-center">
        <Image
          className="relative z-10 w-3/4 rounded-full"
          src={ImageFace}
          alt="Picture of Maciej Nojszewski - blue eyes, dark short hair"
          loading="eager"
        />
        <figcaption className="sr-only">Picture of me (Maciej Nojszewski)</figcaption>
        <div className="z-1 aspect-square w-full absolute bottom-0 left-1/2 -translate-x-1/2  bg-grey-dark rounded-full" aria-hidden />
      </figure>
    </div>
  )
}

export default HeroRightPanel
