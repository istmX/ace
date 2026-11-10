import Navbar from '@/components/ui/navbar'
import { Hero } from '@/components/hero'
import { TrustedByCarousel } from '@/components/TrustedByCarousel'
import { InterviewDemoCard } from '@/components/InterviewDemoCard'
import { FeatureShowcase } from '@/components/FeatureShowcase'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { IconMicrophone } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const Page = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col overflow-x-clip bg-neutral-300 text-neutral-900">
      <Navbar />
      <Hero />
      <TrustedByCarousel />
      <section id="home" className="bg-neutral-300 px-4 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="mx-auto mb-8 w-full max-w-5xl sm:mb-10">
          <p className="mb-3 flex items-center gap-2 font-mono text-sm font-medium text-[#2563EB]">
            <InlineIcon color="#407cf9"><IconMicrophone /></InlineIcon>
            Live interview demo
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Practice your next interview, <span className="text-[#407cf9]">one question at a time.</span>
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-base leading-7 text-neutral-700 sm:text-lg">
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
      <FAQ />
    </main>
  )
}

export default Page
