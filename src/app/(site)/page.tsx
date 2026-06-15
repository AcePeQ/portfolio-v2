'use client'

import AboutMe from "@/components/features/aboutMe/AboutMe";
import Hero from "@/components/features/hero/Hero";
import ProjectShowcase from "@/components/features/projectShowcase/ProjectShowcase";
import Skills from "@/components/features/skills/Skills";
import Loader from "@/components/layout/loader/Loader";
import AnimationContainer from "@/components/ui/animationContainer/AnimationContainer";
import Separator from "@/components/ui/separator/Separator";
import { useLoadingStatus } from "@/lib/stores/loaderStore";
import { AnimatePresence } from "motion/react";

export default function HomePage() {
  const isLoading = useLoadingStatus();

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

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
