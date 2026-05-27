import { CONTACT_NAVIGATION } from "@/lib/constants/navigation"

function FooterContact() {
  return (
    <nav>
      <ul className='flex gap-12'>
        {CONTACT_NAVIGATION.map(link =>
          <li key={link.path}>
            <a className='text-xl font-medium text-white-dark-hover' href={link.path}>{link.name}</a>
          </li>)}
      </ul>
    </nav>
  )
}

export default FooterContact