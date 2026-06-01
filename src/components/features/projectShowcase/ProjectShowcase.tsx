import ProjectCard from "./components/ProjectCard"

function ProjectShowcase() {
  return (
    <section id="project-showcase">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default ProjectShowcase