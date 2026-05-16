import { ReactNode } from "react"
import { Lato } from "next/font/google"
import "@/styles/globals.css"
import { Metadata } from "next";

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Maciej Nojszewski | Junior Frontend Developer",
  description: "Personal portfolio website built with Next.js"
}

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${latoSans.variable}`}>
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}