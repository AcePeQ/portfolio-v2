import Button from '@/components/ui/button/Button'

function AboutMe() {
  return (
    <section id='about-me'>
      <h2>About Me</h2>
      <p className='text-lg 2xs:text-xl font-medium leading-[190%] max-w-[75ch] mx-auto text-white-dark-hover mb-7 2xs:mb-12 text-justify'>Junior Frontend Developer focused on building responsive, maintainable
        and user-friendly web applications using React, TypeScript and modern
        frontend tools. Experienced in supporting commercial client projects,
        implementing UI changes, fixing bugs, creating reusable components and
        working with existing codebases. Worked on frontend implementation for
        React, Vue/Nuxt and Joomla-based projects. Comfortable working with
        Figma designs, REST APIs and AI-assisted development workflows using
        ChatGPT, Codex and MCP Figma. Motivated to grow as a frontend
        developer, with a strong self-learning background, attention to detail and
        the ability to quickly adapt to new technologies and project requirements.
      </p>
      <div className='flex items-center justify-center'>
        <Button isLink download="Maciej_Nojszewski_CV" path="/assets/files/Maciej_Nojszewski_CV.pdf">Download CV</Button>
      </div>
    </section>
  )
}

export default AboutMe