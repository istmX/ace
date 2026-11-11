import Navbar from '@/components/ui/navbar'
import { Hero } from '@/components/hero'
import { TrustedByCarousel } from '@/components/TrustedByCarousel'
import { InterviewDemoCard } from '@/components/InterviewDemoCard'
import { FeatureShowcase } from '@/components/FeatureShowcase'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Pricing } from '@/components/Pricing'
import { ClosingCTA } from '@/components/ClosingCTA'
import { Footer } from '@/components/Footer'
import { IconMail, IconMicrophone } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const Page = () => {
  return (
    <>
      <a
        href="/sale"
        aria-label="View the Ace template sale page"
        className="fixed bottom-4 right-4 z-50 flex w-[118px] flex-col items-center rounded-2xl border border-brand/20 bg-surface/95 px-3 py-3 font-mono text-center text-[10px] font-semibold text-brand-deep shadow-[0_10px_28px_-14px_var(--effect-black-35)] transition-[border-color,background-color,box-shadow] hover:border-brand/40 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:bottom-6 sm:right-8 sm:w-[132px] sm:px-3.5 sm:py-3.5"
      >
        <InlineIcon color="var(--brand-primary)" className="mx-0 h-9 w-9 rounded-xl text-white sm:h-10 sm:w-10">
          <IconMail />
        </InlineIcon>
        <span className="mt-2 flex flex-col gap-1 leading-none">
          <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-subtle">Template</span>
          <span className="tracking-[0.08em]">For sale</span>
        </span>
        <span aria-hidden="true" className="my-3 flex w-full items-center gap-1.5 text-brand/40">
          <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />
          <span className="min-w-0 flex-1 border-t border-dotted border-brand/50" />
          <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />
        </span>
        <span className="rounded-lg bg-brand/8 px-3 py-1.5 text-base font-semibold tracking-[-0.02em] text-brand sm:text-lg">
          $300
        </span>
      </a>
      <main className="flex min-h-screen w-full flex-col overflow-x-clip bg-page text-copy">
        <Navbar />
        <Hero />
        <TrustedByCarousel />
        <section id="home" className="bg-page px-4 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-28">
          <div className="mx-auto mb-8 w-full max-w-5xl sm:mb-10">
            <p className="mb-3 flex items-center gap-2 font-mono text-sm font-medium text-brand-logo">
              <InlineIcon color="var(--brand-primary)"><IconMicrophone /></InlineIcon>
              Inside a practice session
            </p>
            <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Practice your next interview, <span className="text-brand">one question at a time.</span>
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-base leading-7 text-body sm:text-lg">
              Ace asks role-specific questions, listens to your answer, and gives you a clear review when you finish.
            </p>
          </div>
          <InterviewDemoCard
            question="How would you evaluate a new feature?"
            questionIndex={5}
            totalQuestions={5}
            isRecording
            elapsed={58}
          />
        </section>
        <FeatureShowcase />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}

export default Page
