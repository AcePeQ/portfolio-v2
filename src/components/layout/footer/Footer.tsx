import Logo from '@/components/ui/logo/Logo'
import React from 'react'
import FooterNavigation from './components/footerNavigation/FooterNavigation'
import FooterSocials from './components/footerSocials/FooterSocials'
import FooterContact from './components/footerContact/FooterContact'

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-8 md:gap-10  pb-8 md:pb-10 px-6 md:px-10'>
      <Logo />
      <FooterNavigation />
      <FooterSocials />
      <FooterContact />
      <div aria-hidden className='h-0.5 bg-grey-normal max-w-3xl w-full' />
    </footer>
  )
}

export default Footer