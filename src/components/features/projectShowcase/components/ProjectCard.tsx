import Image from "next/image"
import { ShowcaseProject } from "@/lib/constants/projects"
import { motion } from "motion/react"

function ProjectCard({ project }: { project: ShowcaseProject }) {
  return (
    <motion.article initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-2xl overflow-hidden bg-grey-normal-active border-2 border-grey-normal ">
      <a href={project.link} target="_blank" className="flex flex-col group h-full w-full">
        <figure className="w-full overflow-hidden h-60  xs:h-56  lg:h-46">
          <Image loading="lazy" src={project.thumbnail} alt={`Thumbnail picture of ${project.name} project`} className="object-cover object-center group-hover:scale-105 w-full h-full" />
        </figure>
        <div className="w-full  px-4 py-3.5">
          <h3 className="text-white-normal-active font-bold text-md mb-3">{project.name}</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-x-3 gap-y-1.5 mt-auto">
            {project.technologies.map(techName => <p key={techName} className="text-white-dark-hover text-center font-bold text-sm md:text-md bg-grey-normal py-1.5 px-2 rounded-md flex justify-center items-center">{techName}</p>)}
          </div>
        </div>
      </a>
    </motion.article>
  )
}

export default ProjectCard