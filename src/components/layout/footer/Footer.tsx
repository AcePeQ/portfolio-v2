import Logo from '@/components/ui/logo/Logo'
import React from 'react'
import FooterNavigation from './components/footerNavigation/FooterNavigation'
import FooterSocials from './components/footerSocials/FooterSocials'
import FooterContact from './components/footerContact/FooterContact'

function Footer() {
  return (
    <footer className='flex flex-col gap-10'>
      <Logo />
      <FooterNavigation />
      <FooterSocials />
      <FooterContact />
    </footer>
  )
}

export default Footer