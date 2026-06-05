import AboutMe from "@/components/features/aboutMe/AboutMe";
import Hero from "@/components/features/hero/Hero";
import ProjectShowcase from "@/components/features/projectShowcase/ProjectShowcase";
import Skills from "@/components/features/skills/Skills";
import AnimationContainer from "@/components/ui/animationContainer/AnimationContainer";
import Separator from "@/components/ui/separator/Separator";

export default function HomePage() {
  return (
    <>
      <AnimationContainer>
        <Hero />
      </AnimationContainer>

      <AnimationContainer>
        <Separator />
      </AnimationContainer>

      <AnimationContainer>
        <AboutMe />
      </AnimationContainer>

      <AnimationContainer>
        <Separator />
      </AnimationContainer>

      <AnimationContainer>
        <Skills />
      </AnimationContainer>

      <AnimationContainer>
        <Separator />
      </AnimationContainer>

      <AnimationContainer>
        <ProjectShowcase />
      </AnimationContainer>
    </>
  )
}