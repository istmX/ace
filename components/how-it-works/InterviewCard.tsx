'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { IconBriefcase, IconMicrophone, IconPhoneOff } from '@tabler/icons-react'
import { BentoCard, easeOut, heightWide, LogoTile, Morph, spring, Swap, useTicker, v, Wave } from './shared'

const interviewQuestions = [
  'How would you evaluate a new feature before it reaches users?',
  'What would you measure first after launch?',
  'Walk me through a trade-off you made recently.',
]

export function InterviewCard() {
  const [hovered, setHovered] = useState(false)
  const tick = useTicker(hovered, 1000)
  const qi = Math.floor(tick / 3) % interviewQuestions.length
  const seconds = (38 + tick) % 60

  return (
    <BentoCard
      className="lg:col-span-3"
      height={heightWide}
      onHover={setHovered}
      title="Practice the real conversation"
      description="Answer role-specific questions out loud, with follow-ups that keep the interview moving."
      icon={<IconBriefcase className="h-4 w-4" />}
    >
      
      <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-neutral-700">
        <motion.img
          src="/interview-still.webp"
          alt="Ace's AI interviewer speaking during a mock interview"
          loading="lazy"
          decoding="async"
          variants={v({ scale: 1 }, { scale: 1.06 })}
          transition={{ duration: 1.2, ease: easeOut }}
          className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2 sm:inset-x-4 sm:top-4">
          <span className="flex items-center gap-2 rounded-full border border-white/25 bg-neutral-950/50 px-3 py-1.5 text-white backdrop-blur-md">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="whitespace-nowrap font-mono text-xs font-medium">Ace Interviewer</span>
          </span>
          <span className="rounded-full border border-white/25 bg-neutral-950/50 px-3 py-1.5 font-mono text-xs tabular-nums text-white backdrop-blur-md">
            <Morph>{`Question ${2 + qi} of 5`}</Morph>
          </span>
        </div>

        
        <motion.div
          variants={v({ y: 24, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1 })}
          transition={spring}
          className="absolute inset-x-3 bottom-[76px] rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:inset-x-4 sm:bottom-[84px]"
        >
          <p className="font-mono text-xs font-medium text-neutral-500">Ace asks</p>
          <Swap className="mt-0.5 min-h-[40px] font-display text-sm font-medium leading-snug text-neutral-900 sm:min-h-[44px] sm:text-base">
            {interviewQuestions[qi]}
          </Swap>
        </motion.div>

        
        <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
            <IconMicrophone className="h-5 w-5" />
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
            <IconPhoneOff className="h-5 w-5" />
          </span>
          <motion.span
            variants={v({ opacity: 0, x: -10 }, { opacity: 1, x: 0 })}
            transition={spring}
            className="ml-1 hidden h-11 items-center gap-2.5 rounded-full bg-neutral-950/45 px-3.5 font-mono text-xs tabular-nums text-white backdrop-blur-md min-[400px]:flex"
          >
            <Wave />
            <Morph>{`00:${String(seconds).padStart(2, '0')}`}</Morph>
          </motion.span>
        </div>

        
        <motion.div
          variants={v({ y: 0, scale: 1, rotate: 0 }, { y: -4, scale: 1.08, rotate: -4 })}
          transition={spring}
          className="absolute bottom-3 right-3 grid h-[60px] w-[60px] place-items-center rounded-2xl bg-white shadow-lg sm:bottom-4 sm:right-4"
        >
          <LogoTile size={36} />
        </motion.div>
      </div>
    </BentoCard>
  )
}
