'use client'

import { IconMicrophone, IconTrophy, IconBolt } from '@tabler/icons-react'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react'
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
  const heroRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 56])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -32])

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section ref={heroRef} id="top" className="relative isolate flex w-full flex-col items-center gap-5 bg-page px-4 pb-36 pt-16 text-center font-mono sm:gap-6 sm:px-8 sm:pb-44 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 bottom-0 z-0 overflow-hidden sm:-top-28"
      >
        <motion.div
          className="absolute inset-0 scale-[1.01] bg-cover bg-[center_42%] opacity-90 blur-[0.5px]"
          style={{ backgroundImage: "url('/beautiful-landscape.webp')", y: reduce ? 0 : backgroundY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 via-transparent to-transparent" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-b from-transparent via-neutral-300/65 to-neutral-300 backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,transparent,black_28%)] sm:h-60"
      />
      <motion.span
        {...fadeUp(0)}
        style={{ y: reduce ? 0 : textY }}
        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/70 bg-surface/55 px-4 py-1.5 font-mono text-sm uppercase tracking-wide text-neutral-800 shadow-sm backdrop-blur-md"
      >
        <IconBolt className="h-4 w-4" /> AI mock interviews V1.0
      </motion.span>

      <motion.h1
        variants={container}
        initial={reduce ? 'show' : 'hidden'}
        animate="show"
        style={{ y: reduce ? 0 : textY }}
        className="relative z-10 max-w-5xl font-display text-4xl font-medium leading-[1.15] tracking-tight text-copy drop-shadow-[0_1px_1px_var(--effect-white-45)] sm:text-5xl md:text-7xl"
      >
        <Word>Practice</Word>
        <InlineIcon color="var(--accent-violet)">
          <IconMicrophone />
        </InlineIcon>
        <Word>,</Word> <Word>Improve</Word> <Word>and</Word>
        <br />
        <Word>Ace</Word>
        <InlineIcon >
          <Logo showName={false} />
        </InlineIcon>
        <Word>your</Word> <Word>Interview</Word>
        <InlineIcon color="var(--status-warning)">
          <IconTrophy />
        </InlineIcon>
      </motion.h1>

      <motion.div
        {...fadeUp(1.3)}
        style={{ y: reduce ? 0 : textY }}
        className="relative z-10 mt-6 flex w-full max-w-[220px] flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6"
      >
        <Button
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
          onClick={() => router.push('/signup')}
        >
          Get Started
        </Button>
        <Button
          variant="secondary"
          size="md"
          className="w-full border-white/10 bg-transparent hover:bg-surface/10 sm:w-auto"
          onClick={() => router.push('/about')}
        >
          Learn More
        </Button>
      </motion.div>
    </section>
  )
}
