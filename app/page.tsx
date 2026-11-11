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
import { IconMicrophone } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const Page = () => {
  return (
    <>
      <a
        href="#pricing"
        aria-label="Ace template for sale for 300 dollars"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-surface/90 px-3.5 py-2 font-mono text-xs font-semibold tracking-[0.08em] text-brand-deep shadow-[0_8px_24px_-12px_var(--effect-black-35)] backdrop-blur-md transition-colors hover:border-brand/45 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:left-6 sm:top-5"
      >
        <span aria-hidden="true" className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand/12 px-1 text-[11px] tracking-normal">
          $
        </span>
        FOR SALE · $300
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
