'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { IconListDetails } from '@tabler/icons-react'
import { after, BentoCard, Morph, spring, Swap, useTicker, v } from './shared'

const roles = [
  {
    role: 'AI Engineer',
    count: '25',
    questions: [
      'How would you evaluate an LLM feature before launch?',
      'How do you improve retrieval without adding latency?',
      'Offline scores rose but outcomes fell. Why?',
    ],
  },
  {
    role: 'Product Manager',
    count: '20',
    questions: [
      'How would you prioritize three competing requests?',
      'Which metric tells you a launch worked?',
      'Walk me through a roadmap trade-off.',
    ],
  },
  {
    role: 'Data Analyst',
    count: '18',
    questions: [
      'How would you explain a drop in weekly signups?',
      'When is an A/B test result not trustworthy?',
      'Which dashboard would you build first, and why?',
    ],
  },
]

export function QuestionsCard() {
  const [hovered, setHovered] = useState(false)
  const tick = useTicker(hovered, 2600)
  const current = roles[tick % roles.length]

  return (
    <BentoCard
      className="lg:col-span-2"
      onHover={setHovered}
      title="Make practice fit the role"
      description="Build a focused question set from your target role or a job description."
      icon={<IconListDetails className="h-4 w-4" />}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/70" />

      <div className="absolute inset-x-3 top-3 z-20 flex items-center justify-between gap-2 sm:inset-x-4 sm:top-4">
        <span className="rounded-full bg-white px-3 py-1.5 font-mono text-xs font-medium text-neutral-800 shadow-sm">
          <Morph>{current.role}</Morph>
        </span>
        <motion.span
          variants={v({ opacity: 0, x: 8 }, { opacity: 1, x: 0 })}
          transition={spring}
          className="rounded-full bg-[#407cf9] px-3 py-1.5 font-mono text-xs font-medium text-white"
        >
          <Morph>{`${current.count} questions`}</Morph>
        </motion.span>
      </div>

      {current.questions.map((question, i) => (
        <motion.div
          key={i}
          variants={{
            rest: { y: 124 + i * 10, scale: 1 - i * 0.04 },
            hover: { y: 56 + i * 78, scale: 1, transition: after(i * 0.05) },
          }}
          transition={spring}
          style={{ zIndex: 10 - i }}
          className="absolute inset-x-3 top-0 h-[68px] origin-top overflow-hidden rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 shadow-md sm:inset-x-4"
        >
          <p className="font-mono text-xs text-neutral-500">Question {i + 1}</p>
          <Swap className="mt-0.5 font-display text-[13px] font-medium leading-snug text-neutral-900">{question}</Swap>
        </motion.div>
      ))}
    </BentoCard>
  )
}
