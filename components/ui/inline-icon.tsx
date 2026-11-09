'use client'

import * as React from 'react'
import { motion, type Variants } from 'motion/react'

const pop: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -25 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 14 },
  },
}

type InlineIconProps = {
  children: React.ReactNode
  color?: string
  className?: string
}

export const InlineIcon = ({
  children,
  color = '#407cf9',
  className = '',
}: InlineIconProps) => (
  <motion.span
    variants={pop}
    whileHover={{ rotate: 8, scale: 1.08 }}
    style={{ '--brand': color } as React.CSSProperties}
    className={
      'mx-[0.12em] inline-flex h-[0.85em] w-[0.85em] -translate-y-[0.04em] items-center justify-center ' +
      'rounded-[0.24em] align-middle text-white ' +
      'border-[0.04em] border-[color:color-mix(in_oklab,var(--brand)_78%,black)] ' +
      'bg-linear-to-b from-[color-mix(in_oklab,var(--brand)_86%,white)] to-(--brand) ' +
      'shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.24)] ' +
      className
    }
  >
    <span className="flex h-[55%] w-[55%] items-center justify-center [&>svg]:h-full [&>svg]:w-full">
      {children}
    </span>
  </motion.span>
)