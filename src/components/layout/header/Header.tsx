import Button from "@/components/ui/button/Button"
import Logo from "@/components/ui/logo/Logo"
import MainNavigation from "@/components/ui/mainNavigation/MainNavigation"

function Header() {
  return (
    <header className="w-full h-15 flex items-center justify-between gap-8">
      <div className="w-40 flex items-center justify-start">
        <Logo />
      </div>
      <div className="flex-1">
        <MainNavigation />
      </div>
      <div className="w-40 flex items-center justify-end">
        <Button isLink variant="primary" size="medium" path="/#contact">Hire Me</Button>
      </div>
    </header>
  )
}

export default Header