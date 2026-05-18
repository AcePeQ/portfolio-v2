import { HEADER_NAVIGATION } from '@/lib/constants/navigation'
import Link from 'next/link'
import React from 'react'

function MainNavigation() {
  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex gap-12'>
        {HEADER_NAVIGATION.map(link =>
          <li key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>)}
      </ul>
    </nav>
  )
}

export default MainNavigation