import { ReactNode } from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex justify-center">
      <div className="flex min-h-dvh w-full max-w-7xl flex-col pt-4 lg:pt-8">
        <Header />
        <main className="mb-20 flex-1 px-6 xs:mb-28 md:px-10">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
