import AboutMe from "@/components/features/aboutMe/AboutMe";
import Hero from "@/components/features/hero/Hero";
import ProjectShowcase from "@/components/features/projectShowcase/ProjectShowcase";
import Skills from "@/components/features/skills/Skills";
import AnimationContainer from "@/components/ui/animationContainer/AnimationContainer";
import Separator from "@/components/ui/separator/Separator";

export default function HomePage() {
  return (
    <>
      <AnimationContainer id="hero">
        <Hero />
      </AnimationContainer>

      <AnimationContainer id="separator-1">
        <Separator />
      </AnimationContainer>

      <AnimationContainer id="about-me">
        <AboutMe />
      </AnimationContainer>

      <AnimationContainer id="separator-2">
        <Separator />
      </AnimationContainer>

      <AnimationContainer id="skills">
        <Skills />
      </AnimationContainer>

      <AnimationContainer id="separator-3">
        <Separator />
      </AnimationContainer>

      <AnimationContainer id="projects">
        <ProjectShowcase />
      </AnimationContainer>
    </>
  );
}
