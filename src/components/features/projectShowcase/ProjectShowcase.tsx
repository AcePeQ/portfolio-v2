'use client'

import { SHOWCASE_PROJECTS } from "@/lib/constants/projects"
import ProjectCard from "./components/ProjectCard"
import Button from "@/components/ui/button/Button"
import { useState } from "react"

function ProjectShowcase() {
  const [currentFilter, setCurrentFilter] = useState("all");
  let showcaseProjects = SHOWCASE_PROJECTS;

  function handleFilter(value: string) {
    setCurrentFilter(value);
  }

  if (currentFilter !== "all") {
    showcaseProjects = showcaseProjects.filter(project => currentFilter === project.type);
  }

  return (
    <section id="project-showcase">
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

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {showcaseProjects.map(project => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  )
}

export default ProjectShowcase