'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { IconMessages, IconMicrophone } from '@tabler/icons-react'
import { UserAvatar } from '@/components/user-avatar'
import { BentoCard, easeOut, LogoTile, Morph, spring, Swap, useTicker, v, Wave } from './shared'

const followUps = [
  'Which metric would you check first, and why?',
  'How would you keep latency flat while improving quality?',
  'What would make you roll this back?',
]

export function FollowUpCard() {
  const [hovered, setHovered] = useState(false)
  const tick = useTicker(hovered, 2400)
  const index = tick % followUps.length

  return (
    <BentoCard
      className="md:col-span-2 lg:col-span-2"
      onHover={setHovered}
      title="Follow-ups that keep you thinking"
      description="Ace listens to each answer and asks the next question like a real interviewer would."
      icon={<IconMessages className="h-4 w-4" />}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/70" />

      <div className="absolute inset-0 flex flex-col justify-center gap-3 p-4">
        
        <div className="flex items-start justify-end gap-2.5">
          <div className="min-w-0 rounded-2xl rounded-tr-md bg-brand px-3.5 py-2.5 font-mono text-[13px] leading-snug text-white shadow-md">
            I would define success metrics first, then compare against a baseline.
          </div>
          <UserAvatar />
        </div>

        
        <motion.div
          variants={v({ y: 0 }, { y: -2 })}
          transition={spring}
          className="flex items-start gap-2.5"
        >
          <LogoTile size={28} />
          <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md bg-surface px-3.5 py-3 shadow-lg">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-medium text-subtle">Ace</span>
              <span className="shrink-0 font-mono text-xs tabular-nums text-subtle">
                <Morph>{`Follow-up ${index + 1} of 3`}</Morph>
              </span>
            </div>
            <Swap className="min-h-[40px] font-display text-sm font-medium leading-snug text-copy">
              {followUps[index]}
            </Swap>
          </div>
        </motion.div>

        
        <motion.div
          variants={v({ height: 0, opacity: 0 }, { height: 'auto', opacity: 1 })}
          transition={{ duration: 0.45, ease: easeOut }}
          className="overflow-hidden"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-neutral-200 bg-surface/90 py-1.5 pl-1.5 pr-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <IconMicrophone className="h-4 w-4" />
              </span>
              <Wave count={12} barClass="bg-brand" />
              <span className="ml-auto whitespace-nowrap font-mono text-xs text-subtle">Your turn</span>
            </div>
            <UserAvatar />
          </div>
        </motion.div>
      </div>
    </BentoCard>
  )
}
