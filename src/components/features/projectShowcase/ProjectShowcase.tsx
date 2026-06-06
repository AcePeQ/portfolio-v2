'use client'

import { SHOWCASE_PROJECTS } from "@/lib/constants/projects"
import ProjectCard from "./components/ProjectCard"
import Button from "@/components/ui/button/Button"
import { useState } from "react"
import { motion } from "motion/react"

const ITEMS_PER_PAGE = 6;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  },
  exit: {},
}

function ProjectShowcase() {
  const [page, setPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("all");
  let showcaseProjects = SHOWCASE_PROJECTS;

  if (currentFilter !== "all") {
    showcaseProjects = showcaseProjects.filter(project => currentFilter === project.type);
  }

  const currentLength = showcaseProjects.length;


  function handleFilter(value: string) {
    setCurrentFilter(value);
    setPage(1);
  }


  function handleShowMore() {
    if (currentLength <= page * ITEMS_PER_PAGE) return

    setPage(prevPage => prevPage + 1)
  }

  showcaseProjects = showcaseProjects.slice(0, page * ITEMS_PER_PAGE)

  return (
    <section>
      <h2>Projects</h2>

      <div className="flex items-center justify-center mb-12">
        <ul className="flex flex-col *:w-full 2xs:*:w-auto 2xs:flex-row items-center justify-center flex-wrap gap-6">
          <li className="*:w-full">
            <Button onClick={() => handleFilter("all")} variant={currentFilter === "all" ? "active" : "secondary"} size="medium">All</Button></li>
          <li className="*:w-full">
            <Button onClick={() => handleFilter("commercial")} variant={currentFilter === "commercial" ? "active" : "secondary"} size="medium">
              Commercial Projects
            </Button>
          </li>
          <li className="*:w-full">
            <Button onClick={() => handleFilter("personal")} variant={currentFilter === "personal" ? "active" : "secondary"} size="medium">Personal Projects</Button>
          </li>
        </ul>
      </div>

      <motion.div key={currentFilter} variants={listVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {showcaseProjects.map(project => <ProjectCard key={project.name} project={project} />)}
      </motion.div>

      {currentLength > page * ITEMS_PER_PAGE &&
        <div className="mt-10 flex items-center justify-center">
          <Button onClick={handleShowMore}>Show more</Button>
        </div>
      }
    </section>
  )
}

export default ProjectShowcase