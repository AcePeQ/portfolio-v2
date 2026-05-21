import Link from "next/link"

function Logo() {
  return (
    <Link
      href="/"
      className="inline-block bg-(image:--gradient-orange-darker) bg-linear-to-r bg-clip-text text-transparent text-[32px] font-bold"
    >
      MN.DEV
    </Link>
  )
}

export default Logo