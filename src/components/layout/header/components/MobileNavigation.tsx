"use client"

import { MAIN_NAVIGATION } from '@/lib/constants/navigation'
import { MenuIcon, XIcon } from '@/lib/helpers/icons'
import Link from 'next/link'
import { useState } from 'react'


function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(prevStatus => !prevStatus);
  }

  return (
    <>
      <div className="w-40 flex items-center justify-start lg:hidden">
        <button onClick={toggleMenu} className="w-8 h-8 cursor-pointer text-white-dark-hover hover:text-white-dark 
        active:text-white-dark-active focus:text-white-dark">
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen &&
        <div className="absolute z-20 h-[calc(100%-88px)] w-full top-22 left-0 bg-background lg:hidden">
          <nav className='flex items-center justify-center w-full h-full'>
            <ul className='flex flex-col text-center gap-6'>
              {MAIN_NAVIGATION.map(link =>
                <li key={link.path}>
                  <Link className='text-3xl font-medium text-white-dark-hover' href={link.path}>{link.name}</Link>
                </li>)}
            </ul>
          </nav>
        </div>
      }
    </>
  )
}

export default MobileNavigation