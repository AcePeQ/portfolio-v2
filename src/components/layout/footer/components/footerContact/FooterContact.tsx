import { CONTACT_NAVIGATION } from "@/lib/constants/navigation"

function FooterContact() {
  return (
    <nav>
      <ul className='flex flex-col md:flex-row gap-6 md:gap-12'>
        {CONTACT_NAVIGATION.map(link => {
          const Icon = link.icon;
          return (
            <li key={link.path}>
              <a className="flex justify-center md:justify-start items-center gap-4 [&>svg]:w-6 [&>svg]:h-6 text-xl font-bold text-white-dark-hover" href={link.path}>
                {Icon ? <Icon /> : null}
                <span className="inline-block -mt-1">
                  {link.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default FooterContact