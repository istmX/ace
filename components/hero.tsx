'use client'

import { IconMicrophone, IconTrophy, IconBolt } from '@tabler/icons-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import * as React from 'react'
import Logo from './logo'
import { InlineIcon } from '../components/ui/inline-icon'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Word = ({ children }: { children: React.ReactNode }) => (
  <motion.span variants={word} className="inline-block">
    {children}
  </motion.span>
)

export const Hero = () => {
  const reduce = useReducedMotion()
  const router = useRouter()

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="flex w-full flex-col items-center gap-6 px-4 pt-24 text-center font-mono sm:px-8">
      <motion.span
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-sm uppercase tracking-wide"
      >
        <IconBolt className="h-4 w-4" /> AI mock interviews V1.0
      </motion.span>

      <motion.h1
        variants={container}
        initial={reduce ? 'show' : 'hidden'}
        animate="show"
        className="max-w-5xl font-display text-5xl font-medium leading-[1.15] tracking-tight md:text-7xl"
      >
        <Word>Practice</Word>
        <InlineIcon color="#7c5cff">
          <IconMicrophone />
        </InlineIcon>
        <Word>,</Word> <Word>Improve</Word> <Word>and</Word>
        <br />
        <Word>Ace</Word>
        <InlineIcon >
          <Logo showName={false} />
        </InlineIcon>
        <Word>your</Word> <Word>Interview</Word>
        <InlineIcon color="#f59e0b">
          <IconTrophy />
        </InlineIcon>
      </motion.h1>

      <motion.div
        {...fadeUp(1.3)}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
      >
        <Button
          variant="primary"
          size="md"
          onClick={() => router.push('/signup')}
        >
          Get Started
        </Button>
        <Button
          variant="secondary"
          size="md"
          className="border-white/10 bg-transparent  hover:bg-white/10"
          onClick={() => router.push('/about')}
        >
          Learn More
        </Button>
      </motion.div>
    </section>
  )
}
