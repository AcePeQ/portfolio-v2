import { ReactNode } from "react";

type LinkIconProps = {
  path: string;
  children: ReactNode
}

function LinkIcon({ path, children }: LinkIconProps) {
  return (
    <a className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white-darker bg-grey-normal 
    hover:bg-grey-normal-hover focus:bg-grey-normal-hover active:bg-grey-normal-active text-white-dark 
    hover:text-white-dark-hover focus:text-white-dark-hover active:text-white-dark-active" href={path}>
      <span className="w-6 h-6 flex items-center justify-center">
        {children}
      </span>
    </a>
  )
}

export default LinkIcon