import { ReactNode } from "react"
import { Lato } from "next/font/google"
import "@/styles/globals.css"
import { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

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
      <body className="flex justify-center">
        <div className="flex flex-col w-full max-w-7xl min-h-dvh pt-8  relative">
          <Header />
          <main className="flex-1 mb-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}