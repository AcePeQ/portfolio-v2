"use client"

import { MAIN_NAVIGATION } from '@/lib/constants/navigation'
import { useCurrentSection } from '@/lib/stores/navigationStore'
import Link from 'next/link'

function MainNavigation() {
  const currentSectionId = useCurrentSection();


  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex gap-12'>
        {MAIN_NAVIGATION.map(link => {
          const activeSection = currentSectionId === link.id ? "active" : null
          return <li key={link.path}>
            <Link className={`text-xl font-medium text-white-dark-hover ${activeSection}`} href={link.path}>{link.name}</Link>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default MainNavigation

