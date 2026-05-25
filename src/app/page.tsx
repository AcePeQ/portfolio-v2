import AboutMe from "@/components/features/aboutMe/AboutMe";
import Hero from "@/components/features/hero/Hero";
import ProjectShowcase from "@/components/features/projectShowcase/ProjectShowcase";
import Skills from "@/components/features/skills/Skills";
import Separator from "@/components/ui/separator/Separator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Separator />
      <AboutMe />
      <Separator />
      <Skills />
      <Separator />
      <ProjectShowcase />
    </>
  )
}