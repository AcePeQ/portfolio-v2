"use client"

import { MAIN_NAVIGATION } from "@/lib/constants/navigation"
import { useCurrentSection } from "@/lib/stores/navigationStore";

function FooterNavigation() {
  const currentSectionId = useCurrentSection();

  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex flex-wrap justify-center gap-x-8 gap-y-6 xs:gap-8 md:gap-14 lg:gap-16'>
        {MAIN_NAVIGATION.map(link => {
          const activeSection = currentSectionId === link.id ? "active" : null
          return <li key={link.path}>
            <a className={`text-xl font-medium text-white-dark-hover ${activeSection}`} href={link.path}>{link.name}</a>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default FooterNavigation