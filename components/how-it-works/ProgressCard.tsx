'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { IconTrendingUp } from '@tabler/icons-react'
import { BentoCard, easeOut, Morph, spring, v } from './shared'

type Point = [number, number]

const progressPoints: Point[] = [
  [0, 92],
  [42, 84],
  [84, 88],
  [126, 70],
  [168, 64],
  [210, 52],
  [252, 40],
  [292, 26],
]

function smoothPath(points: Point[]) {
  let d = `M${points[0][0]} ${points[0][1]}`
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1]
    const [x1, y1] = points[i]
    const cx = (x0 + x1) / 2
    d += ` C${cx} ${y0} ${cx} ${y1} ${x1} ${y1}`
  }
  return d
}

const progressLine = smoothPath(progressPoints)
const progressArea = `${progressLine} L292 110 L0 110 Z`

const topicScores = [
  ['System design', '92%'],
  ['RAG', '81%'],
  ['Behavioral', '66%'],
]

export function ProgressCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <BentoCard
      className="lg:col-span-2"
      onHover={setHovered}
      title="See your progress take shape"
      description="Notice the topics getting stronger and choose what to practice next."
      icon={<IconTrendingUp className="h-4 w-4" />}
    >
      <div className="absolute inset-0 flex flex-col bg-surface p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xs text-subtle">Interview readiness</p>
            <p className="mt-1 font-display text-5xl font-semibold leading-none tabular-nums text-copy">
              <Morph>{hovered ? '78%' : '64%'}</Morph>
            </p>
          </div>
          <motion.span
            variants={v({ opacity: 0, y: 8, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 })}
            transition={spring}
            className="shrink-0 whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-xs font-medium text-emerald-800"
          >
            +12% this week
          </motion.span>
        </div>

        
        <div className="relative mt-4 min-h-0 flex-1">
          {[20, 45, 70].map((top) => (
            <span
              key={top}
              aria-hidden="true"
              className="absolute inset-x-0 border-t border-dashed border-neutral-200"
              style={{ top: `${top}%` }}
            />
          ))}

          
          <motion.span
            variants={v({ opacity: 0 }, { opacity: 1 })}
            transition={{ duration: 0.4, delay: 0.5 }}
            aria-hidden="true"
            className="absolute inset-x-0 border-t border-dashed border-brand/50"
            style={{ top: '8%' }}
          >
            <span className="absolute -top-5 left-0 font-mono text-[11px] text-brand-logo">Goal 85%</span>
          </motion.span>

          <motion.div
            variants={v({ clipPath: 'inset(0 42% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' })}
            transition={{ duration: 1.1, ease: easeOut }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="progressFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="progressStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--brand-highlight)" />
                  <stop offset="100%" stopColor="var(--brand-logo)" />
                </linearGradient>
              </defs>
              <path d={progressArea} fill="url(#progressFill)" />
              <path
                d={progressLine}
                fill="none"
                stroke="url(#progressStroke)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </motion.div>

          
          {progressPoints.map(([x, y], i) => {
            const last = i === progressPoints.length - 1
            return (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(x / 300) * 100}%`, top: `${(y / 110) * 100}%` }}
              >
                <motion.span
                  variants={v({ scale: 0, opacity: 0 }, { scale: 1, opacity: 1, transition: { ...spring, delay: 0.1 + i * 0.12 } })}
                  className={`block rounded-full border-2 border-brand bg-surface ${last ? 'h-4 w-4 bg-brand ring-4 ring-focus/20' : 'h-2.5 w-2.5'}`}
                />
              </span>
            )
          })}

          
          <motion.span
            variants={v({ opacity: 0, y: 6, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, transition: { ...spring, delay: 0.9 } })}
            className="absolute right-[8%] top-[42%] whitespace-nowrap rounded-lg bg-neutral-900 px-2 py-1 font-mono text-[11px] text-white shadow-lg"
          >
            Today · 78%
          </motion.span>
        </div>

        <div className="mt-1 flex justify-between font-mono text-[11px] text-neutral-400">
          <span>4 weeks ago</span>
          <span>Today</span>
        </div>

        <motion.div
          variants={v({ height: 0, opacity: 0, marginTop: 0 }, { height: 'auto', opacity: 1, marginTop: 10 })}
          transition={{ duration: 0.5, ease: easeOut }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2">
            {topicScores.map(([topic, score]) => (
              <span
                key={topic}
                className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft px-2.5 py-1 font-mono text-xs text-body"
              >
                {topic}
                <b className="font-medium tabular-nums text-copy">{score}</b>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </BentoCard>
  )
}
