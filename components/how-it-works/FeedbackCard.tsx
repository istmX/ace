'use client'
import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { IconBulb, IconCheck, IconChecklist } from '@tabler/icons-react'
import { BentoCard, easeOut, heightFeedback, LogoTile, Morph, spring, v } from './shared'

const playBars = [10, 16, 22, 14, 28, 18, 12, 26, 20, 30, 14, 24, 18, 10, 22, 28, 16, 12, 26, 20, 14, 24, 30, 18, 12, 22, 16, 28]

const breakdown = [
  ['Clarity', '9.0'],
  ['Depth', '8.2'],
  ['Structure', '7.9'],
]

function Mark({ children, color, delay }: { children: ReactNode; color: string; delay: number }) {
  return (
    <motion.span
      variants={{
        rest: { backgroundColor: color.replace('ALPHA', '0') },
        hover: { backgroundColor: color.replace('ALPHA', '0.2'), transition: { duration: 0.5, delay } },
      }}
      className="rounded px-0.5 py-0.5 [box-decoration-break:clone]"
    >
      {children}
    </motion.span>
  )
}

export function FeedbackCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <BentoCard
      className="lg:col-span-3"
      height={heightFeedback}
      onHover={setHovered}
      title="Know what made your answer strong"
      description="Get a clear score for clarity, depth, and structure as soon as you finish."
      icon={<IconChecklist className="h-4 w-4" />}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px]"
      />

      <div className="absolute inset-0 flex flex-col p-3 sm:p-4">
        
        <motion.div
          variants={v({ y: 0 }, { y: -2 })}
          transition={spring}
          className="flex shrink-0 items-center gap-3 rounded-2xl bg-white p-3 shadow-md"
        >
          <LogoTile size={36} />
          <div className="min-w-0 flex-1">
            <p className="truncate font-mono text-sm font-medium text-neutral-900">Answer review</p>
            <p className="font-mono text-xs text-emerald-700">
              <Morph>{hovered ? 'Strong answer' : 'Solid answer'}</Morph>
            </p>
          </div>
          <div className="relative grid h-[52px] w-[52px] shrink-0 place-items-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e5e5" strokeWidth="10" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#407cf9"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="264"
                variants={v({ strokeDashoffset: 74 }, { strokeDashoffset: 32 })}
                transition={{ duration: 1, ease: easeOut }}
              />
            </svg>
            <span className="font-display text-base font-semibold tabular-nums text-neutral-900">
              <Morph>{hovered ? '88' : '72'}</Morph>
            </span>
          </div>
        </motion.div>

        
        <motion.div
          variants={v({ height: 0, opacity: 0 }, { height: 'auto', opacity: 1 })}
          transition={{ duration: 0.5, ease: easeOut }}
          className="shrink-0 overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-2 pt-2">
            {breakdown.map(([label, score]) => (
              <div key={label} className="rounded-xl bg-white/90 px-2.5 py-2 shadow-sm">
                <p className="truncate font-mono text-xs text-neutral-500">{label}</p>
                <p className="font-display text-base font-semibold tabular-nums text-neutral-900">{score}</p>
              </div>
            ))}
          </div>
        </motion.div>

        
        <div className="mt-2 flex min-h-0 flex-1 flex-col justify-center gap-3 overflow-hidden rounded-2xl bg-white p-4 shadow-md">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#407cf9] text-white">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-px" fill="currentColor" aria-hidden="true">
                <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />
              </svg>
            </span>
            <span aria-hidden="true" className="flex h-8 min-w-0 flex-1 items-center justify-between overflow-hidden">
              {playBars.map((height, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] shrink-0 rounded-full"
                  style={{ height }}
                  variants={{
                    rest: { backgroundColor: '#d4d4d4' },
                    hover: { backgroundColor: i < 20 ? '#407cf9' : '#d4d4d4', transition: { delay: i * 0.03, duration: 0.2 } },
                  }}
                />
              ))}
            </span>
            <span className="shrink-0 font-mono text-xs tabular-nums text-neutral-500">
              <Morph>{hovered ? '0:42' : '0:00'}</Morph>
            </span>
          </div>

          <p className="font-mono text-[13px] leading-6 text-neutral-800">
            I would <Mark color="rgba(64,124,249,ALPHA)" delay={0.15}>define success metrics</Mark>, run an{' '}
            <Mark color="rgba(16,185,129,ALPHA)" delay={0.4}>offline evaluation</Mark>, then{' '}
            <Mark color="rgba(245,158,11,ALPHA)" delay={0.65}>watch production signals</Mark> after launch.
          </p>
        </div>

        
        <motion.div
          variants={v({ height: 0, opacity: 0 }, { height: 'auto', opacity: 1 })}
          transition={{ duration: 0.5, ease: easeOut }}
          className="shrink-0 overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="rounded-2xl bg-white p-3 shadow-md">
              <p className="flex items-center gap-2 font-mono text-xs font-medium text-neutral-900">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="truncate">Clear structure</span>
              </p>
              <p className="mt-1.5 font-mono text-xs leading-snug text-neutral-500">Plan first, then metrics.</p>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-md">
              <p className="flex items-center gap-2 font-mono text-xs font-medium text-neutral-900">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#2563EB]">
                  <IconBulb className="h-3.5 w-3.5" />
                </span>
                <span className="truncate">Sharpen next</span>
              </p>
              <p className="mt-1.5 font-mono text-xs leading-snug text-neutral-500">Add one real number.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </BentoCard>
  )
}
