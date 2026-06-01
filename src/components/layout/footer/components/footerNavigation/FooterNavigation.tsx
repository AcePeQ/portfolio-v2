import { MAIN_NAVIGATION } from "@/lib/constants/navigation"
import Link from "next/link"

function FooterNavigation() {
  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex flex-wrap gap-8 md:gap-14 lg:gap-16'>
        {MAIN_NAVIGATION.map(link =>
          <li key={link.path}>
            <Link className='text-xl font-medium text-white-dark-hover' href={link.path}>{link.name}</Link>
          </li>)}
      </ul>
    </nav>
  )
}

export default FooterNavigation