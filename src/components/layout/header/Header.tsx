import Button from "@/components/ui/button/Button"
import Logo from "@/components/ui/logo/Logo"
import MainNavigation from "@/components/ui/mainNavigation/MainNavigation"
import MobileNavigation from "./components/MobileNavigation"

function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full max-w-7xl flex items-center justify-between gap-6 xl:gap-8 py-3 bg-background">
      <MobileNavigation />
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