import Skill from './components/skill/Skill'

function Skills() {
  return (
    <section id='skills'>
      <h2>My Skills</h2>

      <div className='flex gap-8 flex-wrap'>
        <Skill skill='HTML' percentage={50} />
      </div>
    </section>
  )
}

export default Skills