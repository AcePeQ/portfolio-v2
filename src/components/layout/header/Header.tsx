import Button from "@/components/ui/button/Button"
import Logo from "@/components/ui/logo/Logo"
import MainNavigation from "@/components/ui/mainNavigation/MainNavigation"
import { MenuIcon } from "@/lib/helpers/icons"

function Header() {
  return (
    <header className="flex items-center justify-between gap-6 xl:gap-8 py-3 bg-background">
      <div className="w-40 flex items-center justify-start lg:hidden">
        <button className="w-8 cursor-pointer text-white-dark-hover hover:text-white-dark active:text-white-dark-active focus:text-white-dark">
          <MenuIcon />
        </button>
      </div>
      <div className="w-40 flex items-center justify-center lg:justify-start">
        <Logo />
      </div>
      <div className="flex-1 hidden lg:block">
        <MainNavigation />
      </div>
      <div className="w-40 flex items-center justify-end">
        <Button isLink variant="primary" size="small" path="/#contact">Hire Me</Button>
      </div>
    </header>
  )
}

export default Header