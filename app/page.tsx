import Navbar from '@/components/ui/navbar'
import { Hero } from '@/components/hero'
import { InterviewDemoCard } from '@/components/InterviewDemoCard'

const Page = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col overflow-x-clip bg-neutral-300 text-neutral-900">
      <Navbar />
      <Hero />
      <section className="bg-neutral-300 px-4 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="mx-auto mb-8 w-full max-w-5xl sm:mb-10">
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Practice your next interview, one question at a time.
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-base leading-7 text-neutral-700 sm:text-lg">
            Ace asks role-specific questions, listens to your answer, and gives you a clear review when you finish.
          </p>
        </div>
        <InterviewDemoCard
          question="How would you evaluate an LLM feature before launch and monitor its quality in production?"
          questionIndex={5}
          totalQuestions={5}
          isRecording
          elapsed={58}
        />
      </section>
    </main>
  )
}

export default Page
