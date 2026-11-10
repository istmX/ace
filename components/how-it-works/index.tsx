'use client'
import { MotionConfig } from 'motion/react'
import { IconListDetails } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'
import { InterviewCard } from './InterviewCard'
import { FeedbackCard } from './FeedbackCard'
import { ProgressCard } from './ProgressCard'
import { QuestionsCard } from './QuestionsCard'
import { FollowUpCard } from './FollowUpCard'

export function HowItWorks() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="how-it-works" className="bg-neutral-300 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <p className="mb-3 flex items-center gap-2 font-mono text-sm font-medium text-[#2563EB]">
              <InlineIcon color="#f43f5e"><IconListDetails /></InlineIcon>
              Built for better interviews
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-neutral-900 sm:text-4xl lg:text-5xl">
              A little practice changes the <span className="text-[#407cf9]">whole interview.</span>
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-base leading-7 text-neutral-700">
              Explore how Ace helps you practice, improve your answers, and prepare for the role you want.
            </p>
          </div>

          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-6">
            <InterviewCard />
            <FeedbackCard />
            <ProgressCard />
            <QuestionsCard />
            <FollowUpCard />
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
