import Image from "next/image"
import PlaceholderImage from "@/assets/images/placeholder2.jpg"
import Link from "next/link"

function ProjectCard() {
  return (
    <article className="rounded-2xl overflow-hidden bg-grey-normal-active border-2 border-grey-normal">
      <Link href="/" className="flex flex-col  group">
        <figure className="w-full h-full overflow-hidden ">
          <Image src={PlaceholderImage} alt="Placeholder photo" className="object-cover object-center group-hover:scale-105 w-full" />
        </figure>
        <div className="w-full px-4 py-3.5">
          <h3 className="text-white-normal-active font-bold text-md mb-3">Name project</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-x-3 gap-y-1.5">
            <p className="text-white-dark-hover font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">HTML5</p>
            <p className="text-white-dark-hover font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">CSS3</p>
            <p className="text-white-dark-hover font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">TypeScript</p>
            <p className="text-white-dark-hover font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">JavaScript</p>
            <p className="text-white-dark-hover font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">React</p>
            <p className="text-white-dark-hover font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">Next.js</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProjectCard