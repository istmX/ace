'use client'

import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'motion/react'
import { IconChevronDown, IconQuestionMark } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const questions: { question: ReactNode; answer: ReactNode }[] = [
  {
    question: <>What is <span className="text-brand">Ace</span>?</>,
    answer: <>Ace is an AI-powered interview practice experience. Work through <span className="font-medium text-brand-logo">role-specific questions</span>, follow-ups, and a structured review of your answers.</>,
  },
  {
    question: <>How does a <span className="text-brand">practice session</span> work?</>,
    answer: <>Choose a role and interview focus, then answer a short set of questions. Ace brings the <span className="font-medium text-brand-logo">interview and answer review</span> together in one practice session.</>,
  },
  {
    question: <>What roles can I <span className="text-brand">practice for</span>?</>,
    answer: <>Practice can be tailored to <span className="font-medium text-brand-logo">software, AI and machine learning, product, and data</span> roles. A job description can help shape the question set.</>,
  },
  {
    question: <>What does the <span className="text-brand">feedback</span> cover?</>,
    answer: <>Ace highlights <span className="font-medium text-brand-logo">clarity, technical depth, and answer structure</span>, then gives you a specific next step to work on.</>,
  },
  {
    question: <>Does Ace replace a <span className="text-brand">real interview</span>?</>,
    answer: <>No. Ace is a place to rehearse your thinking and improve how you explain your work before the real conversation.</>,
  },
]

function FAQItem({ question, answer, index }: { question: ReactNode; answer: ReactNode; index: number }) {
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion() ?? false
  const panelId = `faq-answer-${index}`

  return (
    <article className="border-b border-neutral-500/25 first:border-t">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-5 py-4 text-left font-mono text-base font-medium text-copy outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-focus sm:min-h-[72px] sm:text-lg"
      >
        <span>{question}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="shrink-0 text-subtle"
        >
          <IconChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="answer"
            role="region"
            aria-label={typeof question === 'string' ? question : `Answer ${index + 1}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-5 pr-8 font-mono text-sm leading-6 text-body sm:text-base sm:leading-7">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export function FAQ() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="faq-heading" className="bg-page px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.8fr)] lg:gap-16">
          <div className="max-w-sm">
            <p className="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-body">
              <InlineIcon color="var(--status-info)"><IconQuestionMark /></InlineIcon>
              Good to know
            </p>
            <h2 id="faq-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-copy sm:text-4xl">
              Questions, <span className="text-brand">answered.</span>
            </h2>
            <p className="mt-3 font-mono text-base leading-7 text-body">
              The short answers, <span className="font-medium text-brand-logo">before you get started.</span>
            </p>
          </div>

          <div className="min-w-0">
            {questions.map(({ question, answer }, index) => (
              <FAQItem key={index} question={question} answer={answer} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
