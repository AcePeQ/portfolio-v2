import Logo from "@/components/ui/logo/Logo"
import MainNavigation from "@/components/ui/mainNavigation/MainNavigation"

function Header() {
  return (
    <header className="xl:w-full xl:h-15 flex items-center justify-between xl:gap-8">
      <div className="xl:w-40 flex items-center justify-start">
        <Logo />
      </div>
      <div className="xl:flex-1">
        <MainNavigation />
      </div>
      <div className="xl:w-40 flex items-center justify-end"></div>
    </header>
  )
}

export default Header