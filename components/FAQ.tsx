'use client'

import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'motion/react'
import { IconChevronDown, IconQuestionMark } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const questions: { question: ReactNode; answer: ReactNode }[] = [
  {
    question: <>What is <span className="text-[#407cf9]">Ace</span>?</>,
    answer: <>Ace is an AI-powered interview practice experience. Work through <span className="font-medium text-[#2563EB]">role-specific questions</span>, follow-ups, and a structured review of your answers.</>,
  },
  {
    question: <>How does a <span className="text-[#407cf9]">practice session</span> work?</>,
    answer: <>Choose a role and interview focus, then answer a short set of questions. The demo shows how the <span className="font-medium text-[#2563EB]">interview and answer review</span> fit together.</>,
  },
  {
    question: <>What roles can I <span className="text-[#407cf9]">practice for</span>?</>,
    answer: <>Practice can be tailored to <span className="font-medium text-[#2563EB]">software, AI and machine learning, product, and data</span> roles. A job description can help shape the question set.</>,
  },
  {
    question: <>What does the <span className="text-[#407cf9]">feedback</span> cover?</>,
    answer: <>Ace highlights <span className="font-medium text-[#2563EB]">clarity, technical depth, and answer structure</span>, then gives you a specific next step to work on.</>,
  },
  {
    question: <>Does Ace replace a <span className="text-[#407cf9]">real interview</span>?</>,
    answer: <>No. Ace is a place to rehearse your thinking and improve how you explain your work before the real conversation.</>,
  },
]

function FAQItem({ question, answer, index }: { question: ReactNode; answer: ReactNode; index: number }) {
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion() ?? false
  const panelId = `faq-answer-${index}`

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reducedMotion ? 0 : 0.38, delay: reducedMotion ? 0 : index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-neutral-500/25 first:border-t"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-5 py-4 text-left font-mono text-base font-medium text-neutral-900 outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[#407cf9] sm:min-h-[72px] sm:text-lg"
      >
        <span>{question}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="shrink-0 text-neutral-500"
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
            <p className="max-w-2xl pb-5 pr-8 font-mono text-sm leading-6 text-neutral-700 sm:text-base sm:leading-7">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function FAQ() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="faq-heading" className="bg-neutral-300 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.8fr)] lg:gap-16">
          <div className="max-w-sm">
            <p className="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-neutral-700">
              <InlineIcon color="#38bdf8"><IconQuestionMark /></InlineIcon>
              Good to know
            </p>
            <h2 id="faq-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-neutral-900 sm:text-4xl">
              Questions, <span className="text-[#407cf9]">answered.</span>
            </h2>
            <p className="mt-3 font-mono text-base leading-7 text-neutral-700">
              The short answers, <span className="font-medium text-[#2563EB]">before you get started.</span>
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
