import Button from "@/components/ui/button/Button";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 py-6 2xs:px-5 sm:px-8">
      <section className="relative flex w-full max-w-4xl items-center justify-center">
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-normal/10 blur-3xl 2xs:h-60 2xs:w-60 sm:h-72 sm:w-72" />

        <div className="relative flex w-full flex-col items-center rounded-[28px] border border-white-darker/20 bg-grey-dark px-5 py-10 text-center shadow-[0_0_24px_rgba(0,0,0,0.25)] 2xs:px-7 xs:px-8 sm:rounded-4xl sm:px-12 sm:py-14">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-orange-normal 2xs:text-sm 2xs:tracking-[0.45em]">
            Error 404
          </span>

          <h1 className="mb-5 text-[38px]! leading-none 2xs:text-[42px]! xs:text-[48px]! sm:mb-6 sm:text-[64px]!">
            Page not found
          </h1>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-white-dark 2xs:text-base xs:text-lg xs:leading-8 sm:mb-10 sm:text-xl">
            It looks like you followed a broken link or entered an invalid
            address. Head back to the homepage and jump to the section you
            need.
          </p>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button isLink path="/" variant="primary" size="medium">
              Back to home
            </Button>

            <Button isLink path="/#projects" variant="ghost" size="medium">
              View projects
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
