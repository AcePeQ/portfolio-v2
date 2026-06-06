"use client"

import Button from '@/components/ui/button/Button'
import { MAIN_NAVIGATION } from '@/lib/constants/navigation'
import { MenuIcon, XIcon } from '@/lib/helpers/icons'
import { useCurrentSection } from '@/lib/stores/navigationStore'
import Link from 'next/link'
import { useState } from 'react'


function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentSectionId = useCurrentSection();

  function toggleMenu() {
    setIsMenuOpen(prevStatus => !prevStatus);
  }

  return (
    <>
      <div className="sm:w-40 flex items-center justify-start lg:hidden">
        <button onClick={toggleMenu} className="w-8 h-8 cursor-pointer text-white-dark-hover hover:text-white-dark 
        active:text-white-dark-active focus:text-white-dark">
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen &&
        <div className="absolute z-20 h-[calc(100dvh-72px)] min-h-90 w-full top-18 left-0 bg-background lg:hidden no-doc-scroll">
          <nav className='flex items-center justify-center w-full h-full'>
            <ul className='flex flex-col text-center gap-6'>
              {MAIN_NAVIGATION.map(link => {
                const activeSection = currentSectionId === link.id ? "active" : null
                return (
                  <li key={link.path}>
                    <Link className={`text-3xl font-medium text-white-dark-hover ${activeSection}`} href={link.path}>{link.name}</Link>
                  </li>
                )
              })}
              <li>
                <Button isLink variant="primary" size="big" path="/#contact">Hire Me</Button>
              </li>
            </ul>
          </nav>
        </div>
      }
    </>
  )
}

export default MobileNavigation