import { BootstrapIcon, CsharpIcon, CSSIcon, DotNetIcon, EnglishFlag, ExpressIcon, FigmaIcon, GithubIcon, GitIcon, HTMLIcon, JavascriptIcon, MySqlIcon, NextjsIcon, NodejsIcon, NuxtIcon, PHPIcon, PolishFlag, PostgresIcon, ReactIcon, ReduxIcon, SCSSIcon, TailwindIcon, TypescriptIcon, VSCodeIcon, VueIcon } from '@/lib/helpers/icons'
import Skill from './components/skill/Skill'
import { ReactNode } from 'react';
import Separator from '@/components/ui/separator/Separator';

type SkillType = {
  skill: string;
  percentage: number;
  icon: ReactNode;
}


function Skills() {
  return (
    <section>
      <h2>My Skills</h2>

      <div className='flex gap-4 lg:gap-8 flex-wrap justify-center'>
        {FRONT_SKILLS.map(skill => <Skill key={skill.skill} skill={skill.skill} percentage={skill.percentage}>{skill.icon}</Skill>)}
      </div>

      <Separator />

      <div className='flex gap-4 lg:gap-8 flex-wrap justify-center'>
        {BACK_SKILLS.map(skill => <Skill key={skill.skill} skill={skill.skill} percentage={skill.percentage}>{skill.icon}</Skill>)}
      </div>

      <Separator />

      <div className='flex gap-4 lg:gap-8 flex-wrap justify-center'>
        {OTHER_SKILLS.map(skill => <Skill key={skill.skill} skill={skill.skill} percentage={skill.percentage}>{skill.icon}</Skill>)}
      </div>

      <Separator />

      <div className='flex gap-4 lg:gap-8 flex-wrap justify-center'>
        {LANGUAGE_SKILLS.map(skill => <Skill key={skill.skill} skill={skill.skill} percentage={skill.percentage}>{skill.icon}</Skill>)}
      </div>
    </section>
  )
}

const FRONT_SKILLS: SkillType[] = [
  {
    skill: "HTML5",
    percentage: 100,
    icon: <HTMLIcon />
  },
  {
    skill: "CSS3",
    percentage: 100,
    icon: <CSSIcon />
  },
  {
    skill: "Sass",
    percentage: 100,
    icon: <SCSSIcon />
  },
  {
    skill: "JavaScript",
    percentage: 95,
    icon: <JavascriptIcon />
  },
  {
    skill: "React",
    percentage: 95,
    icon: <ReactIcon />
  },
  {
    skill: "Tailwind",
    percentage: 85,
    icon: <TailwindIcon />
  },
  {
    skill: "Bootstrap",
    percentage: 70,
    icon: <BootstrapIcon />
  },
  {
    skill: "TypeScript",
    percentage: 70,
    icon: <TypescriptIcon />
  },
  {
    skill: "Redux",
    percentage: 70,
    icon: <ReduxIcon />
  },
  {
    skill: "Vue",
    percentage: 50,
    icon: <VueIcon />
  },
]

const BACK_SKILLS: SkillType[] = [
  {
    skill: "Express",
    percentage: 50,
    icon: <ExpressIcon />
  },
  {
    skill: "PostgresSQL",
    percentage: 40,
    icon: <PostgresIcon />
  },
  {
    skill: "MySQL",
    percentage: 40,
    icon: <MySqlIcon />
  },
  {
    skill: "Next.js",
    percentage: 30,
    icon: <NextjsIcon />
  },
  {
    skill: "Nuxt",
    percentage: 30,
    icon: <NuxtIcon />
  },
  {
    skill: "Node.js",
    percentage: 30,
    icon: <NodejsIcon />
  },
  {
    skill: "PHP",
    percentage: 30,
    icon: <PHPIcon />
  },
  {
    skill: "C#",
    percentage: 25,
    icon: <CsharpIcon />
  },
  {
    skill: ".NET",
    percentage: 20,
    icon: <DotNetIcon />
  },
]

const OTHER_SKILLS: SkillType[] = [
  {
    skill: "Visual Studio Code",
    percentage: 100,
    icon: <VSCodeIcon />
  },
  {
    skill: "Figma",
    percentage: 80,
    icon: <FigmaIcon />
  },
  {
    skill: "Git",
    percentage: 80,
    icon: <GitIcon />
  },
  {
    skill: "GitHub",
    percentage: 80,
    icon: <GithubIcon />
  },
]

const LANGUAGE_SKILLS: SkillType[] = [
  {
    skill: "Polish (Native)",
    percentage: 100,
    icon: <PolishFlag />
  },
  {
    skill: "English (B1/B2)",
    percentage: 70,
    icon: <EnglishFlag />
  },
]

export default Skills