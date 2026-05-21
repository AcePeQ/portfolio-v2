import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react"

type ButtonProps = {
  isIcon?: boolean;
  isLink?: boolean;
  path?: string;
  variant?: "primary" | "secondary" | "ghost" | "active";
  size?: "small" | "medium" | "big"
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode
}

function Button({ isLink = false, path, isIcon = false, variant = "primary", size = "medium", type = "button", onClick, children }: ButtonProps) {
  let clsx = "flex items-center justify-center cursor-pointer ";

  if (variant === "primary") {
    clsx += "bg-orange-normal hover:bg-orange-normal-hover focus:bg-orange-normal-hover active:bg-orange-normal-active text-white "
  } else if (variant === "secondary") {
    clsx += "bg-grey-normal hover:bg-grey-normal-hover focus:bg-grey-normal-focus active:bg-grey-normal-active text-white-normal hover:text-white-normal-hover focus:text-white-normal-hover active:text-white-normal-active "
  } else if (variant === "ghost") {
    clsx += "bg-transparent text-white-dark hover:text-white-dark:hover focus:text-white-dark-hover active:text-white-dark-active border-2 border-white-dark hover:border-white-dark-hover focus:border-white-dark-hover active:border-white-dark-active "
  } else if (variant === "active") {
    clsx += "bg-orange-normal hover:bg-orange-normal focus:bg-orange-normal active:bg-orange-normal text-white "
  }

  if (size === "small") {
    clsx += "px-10 py-2 rounded-lg text-lg font-bold ";
  } else if (size === "medium") {
    clsx += "px-10 py-3 rounded-lg text-xl font-bold ";
  } else if (size === "big") {
    clsx += "px-10 py-3.5 rounded-lg text-xl font-bold "
  }

  if (isIcon) {
    clsx += "gap-2"
  }

  if (isLink && path) {
    <Link href={path} className="clsx">{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={clsx}>
      {children}
    </button>
  )
}

export default Button