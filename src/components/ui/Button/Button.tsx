import { MouseEventHandler, ReactNode } from "react"

type ButtonProps = {
  isIcon: boolean;
  variant: "primary" | "secondary" | "ghost";
  size: "small" | "medium" | "big"
  type: "submit" | "reset" | "button";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode
}

function Button({ isIcon, variant, size, type, onClick, children }: ButtonProps) {
  let clsx = "";

  if (variant === "primary") {

  } else if (variant === "secondary") {

  } else if (variant === "ghost") {

  }

  if (size === "small") {

  } else if (size === "medium") {

  } else if (size === "big") {

  }

  if (isIcon) {

  } else {

  }

  return (
    <button type={type} onClick={onClick} className={clsx}>
      {children}
    </button>
  )
}

export default Button