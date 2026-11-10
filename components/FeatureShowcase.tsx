'use client'

import { useState } from 'react'
import {
  IconBriefcase,
  IconChartBar,
  IconCheck,
  IconFileText,
  IconListCheck,
  IconSparkles,
  IconTrendingUp,
} from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const features = [
  {
    id: 'interviews',
    title: 'Realistic mock interviews',
    description: 'Face an AI interviewer that asks role-specific questions, follows up on your answers, and adapts to your level. Choose your role, company type, and difficulty, then start in seconds.',
    focus: '12% 84%',
    zoom: 1.16,
  },
  {
    id: 'feedback',
    title: 'Instant feedback',
    description: 'Get a breakdown of every answer right after you finish. Ace scores clarity, depth, and structure, and shows exactly what to say better next time.',
    focus: '12% 20%',
    zoom: 1.12,
  },
  {
    id: 'progress',
    title: 'Progress tracking',
    description: 'See your improvement over time. Track scores across sessions, spot weak topics, and know when you’re ready.',
    focus: '86% 82%',
    zoom: 1.14,
  },
  {
    id: 'questions',
    title: 'Role-based question bank',
    description: 'Practice with questions tailored to the job: frontend, backend, data, AI/ML, product, and more. Upload a job description and Ace builds the interview around it.',
    focus: '88% 20%',
    zoom: 1.17,
  },
] as const

type Feature = (typeof features)[number]
type FeatureId = Feature['id']

function StatusPill({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue' | 'green' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium ${tone === 'green' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-50 text-blue-700'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${tone === 'green' ? 'bg-emerald-500' : 'bg-[#407cf9]'}`} />
      {children}
    </span>
  )
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-neutral-100 py-2 last:border-0 last:pb-0">
      <span className="shrink-0 font-mono text-xs text-neutral-500">{label}</span>
      <span className="text-right font-mono text-xs font-medium leading-5 text-neutral-900">{value}</span>
    </div>
  )
}

function FeaturePreview({ feature, reducedMotion }: { feature: Feature; reducedMotion: boolean }) {
  if (feature.id === 'interviews') {
    return (
      <>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-neutral-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#407cf9]"><IconBriefcase className="h-4 w-4" /></span>
            <h3 className="font-display text-base font-semibold">Interview setup</h3>
          </div>
          <StatusPill>Ready</StatusPill>
        </div>
        <PreviewRow label="Role" value="Senior AI Engineer" />
        <PreviewRow label="Round" value="Technical" />
        <PreviewRow label="Difficulty" value="Hard" />
        <PreviewRow label="Duration" value="25 min" />
        <PreviewRow label="Questions" value="5" />
      </>
    )
  }

  if (feature.id === 'feedback') {
    const scores = [
      { label: 'Clarity', score: '9.0', value: 90 },
      { label: 'Technical depth', score: '8.2', value: 82 },
      { label: 'Structure', score: '7.9', value: 79 },
    ]
    return (
      <>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-neutral-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#407cf9]"><IconSparkles className="h-4 w-4" /></span>
            <h3 className="font-display text-base font-semibold">Answer feedback</h3>
          </div>
          <StatusPill tone="green">Strong answer</StatusPill>
        </div>
        <div className="mb-3 flex items-baseline gap-1 font-display text-3xl font-semibold tabular-nums text-neutral-900">8.4 <span className="font-mono text-sm font-normal text-neutral-500">/ 10</span></div>
        <div className="space-y-2.5">
          {scores.map(({ label, score, value }) => (
            <div key={label}>
              <div className="mb-1 flex justify-between font-mono text-[11px] text-neutral-600"><span>{label}</span><span className="tabular-nums text-neutral-900">{score}</span></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                <motion.div initial={reducedMotion ? false : { scaleX: 0 }} animate={{ scaleX: value / 100 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: 'easeOut' }} className="h-full origin-left rounded-full bg-[#407cf9]" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 border-t border-neutral-100 pt-2.5 font-mono text-[11px] leading-relaxed text-neutral-600">Tip: lead with the metric, then explain the tradeoff.</p>
      </>
    )
  }

  if (feature.id === 'progress') {
    return (
      <>
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-neutral-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#407cf9]"><IconChartBar className="h-4 w-4" /></span>
            <h3 className="font-display text-base font-semibold">Readiness score</h3>
          </div>
          <StatusPill tone="green">+12% this week</StatusPill>
        </div>
        <div className="flex items-end justify-between">
          <p className="font-display text-4xl font-semibold leading-none tabular-nums text-neutral-900">78<span className="text-2xl">%</span></p>
          <svg viewBox="0 0 112 42" className="h-10 w-28 text-[#407cf9]" fill="none" aria-label="Readiness score trending upward">
            <path d="M2 34 18 27 32 30 47 18 62 22 78 12 91 16 110 4" stroke="#d4d4d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <motion.path d="M2 34 18 27 32 30 47 18 62 22 78 12 91 16 110 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }} />
          </svg>
        </div>
        <div className="mt-3 border-t border-neutral-100 pt-1">
          <PreviewRow label="Sessions completed" value="14" />
          <PreviewRow label="Strongest topic" value="System design" />
          <PreviewRow label="Needs work" value="Behavioral" />
        </div>
        <p className="mt-2 font-mono text-[11px] text-neutral-600">On track for your target date.</p>
      </>
    )
  }

  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-neutral-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#407cf9]"><IconFileText className="h-4 w-4" /></span>
          <h3 className="font-display text-base font-semibold">Question set</h3>
        </div>
        <StatusPill>Tailored</StatusPill>
      </div>
      <PreviewRow label="Role match" value="94%" />
      <div className="border-b border-neutral-100 py-2">
        <p className="mb-1.5 font-mono text-xs text-neutral-500">Topics</p>
        <div className="flex flex-wrap gap-1.5">
          {['LLM evaluation', 'RAG', 'System design'].map((topic) => <span key={topic} className="rounded-full bg-neutral-100 px-2 py-1 font-mono text-[10px] text-neutral-700">{topic}</span>)}
        </div>
      </div>
      <PreviewRow label="Questions generated" value="25" />
      <PreviewRow label="Source" value="Job description" />
      <p className="mt-2 flex items-center gap-1.5 border-t border-neutral-100 pt-2.5 font-mono text-[11px] leading-relaxed text-neutral-600"><IconCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" />Built from the job description you uploaded.</p>
    </>
  )
}

export function FeatureShowcase() {
  const [activeId, setActiveId] = useState<FeatureId>(features[0].id)
  const [hasSelectedFeature, setHasSelectedFeature] = useState(false)
  const reducedMotion = useReducedMotion() ?? false
  const activeFeature = features.find((feature) => feature.id === activeId) ?? features[0]

  return (
    <section id="features" className="bg-neutral-300 px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-5 max-w-3xl sm:mb-6">
          <p className="mb-3 flex items-center gap-2 font-mono text-sm font-medium text-[#2563EB]">
            <InlineIcon color="#f59e0b"><IconBriefcase /></InlineIcon>
            A smarter way to prepare
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-neutral-900 sm:text-4xl lg:text-5xl">Practice that takes you from prepared to <span className="text-[#407cf9]">ready.</span></h2>
        </div>

        <div className="relative isolate aspect-[1.1/1] overflow-hidden rounded-[28px] bg-neutral-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.22)] sm:aspect-[2.4/1] sm:rounded-[32px]">
          <motion.div
            aria-hidden="true"
            className="absolute -inset-[8%] bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/beautiful-landscape.webp')", transformOrigin: activeFeature.focus }}
            initial={false}
            animate={{ backgroundPosition: activeFeature.focus, scale: activeFeature.zoom, transformOrigin: activeFeature.focus }}
            transition={reducedMotion ? { duration: 0 } : { duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-neutral-900/10" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeFeature.id}
              initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.99 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.24, ease: 'easeOut' }}
              className="absolute left-1/2 top-1/2 w-[calc(100%-24px)] max-w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/90 bg-white/95 p-4 text-neutral-900 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:w-[390px] sm:p-5"
              aria-live="polite"
            >
              <FeaturePreview feature={activeFeature} reducedMotion={reducedMotion} />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/60 px-3 py-1.5 font-mono text-[10px] text-neutral-700 shadow-sm backdrop-blur sm:bottom-5 sm:left-5 sm:text-xs">
            Built around your next interview
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:grid-cols-4 sm:gap-4">
          {features.map((feature) => {
            const selected = feature.id === activeId
            return (
              <motion.button
                key={feature.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setActiveId(feature.id)
                  setHasSelectedFeature(true)
                }}
                whileTap={reducedMotion ? undefined : { scale: 0.985 }}
                className={`relative flex min-h-20 w-full flex-col items-start justify-start border-t px-3 pb-3 pt-2 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#407cf9] sm:px-4 sm:pt-2.5 ${selected ? 'border-[#407cf9] text-neutral-900' : 'border-neutral-400 text-neutral-600 hover:text-neutral-900'}`}
              >
                {selected && <motion.span layoutId="feature-active-pin" className="absolute -top-[2px] left-0 right-0 h-[3px] rounded-full bg-[#407cf9]" transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 360, damping: 30 }} />}
                <span className="flex w-full items-start gap-2">
                  {feature.id === 'interviews' ? <IconBriefcase className="mt-0.5 h-4 w-4 shrink-0" /> : feature.id === 'feedback' ? <IconSparkles className="mt-0.5 h-4 w-4 shrink-0" /> : feature.id === 'progress' ? <IconTrendingUp className="mt-0.5 h-4 w-4 shrink-0" /> : <IconListCheck className="mt-0.5 h-4 w-4 shrink-0" />}
                  <span className="font-display text-sm font-medium leading-snug sm:text-base">{feature.title}</span>
                </span>
                <AnimatePresence initial={false}>
                  {selected && hasSelectedFeature && (
                    <motion.span
                      initial={reducedMotion ? false : { opacity: 0, height: 0, y: 4 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: 4 }}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' }}
                      className="mt-2 block overflow-hidden font-mono text-xs leading-relaxed text-neutral-600 sm:text-[13px]"
                    >
                      {feature.description}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
