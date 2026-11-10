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
  backgroundColor?: string
  className?: string
}

export const InlineIcon = ({
  children,
  color = 'var(--brand-primary)',
  backgroundColor,
  className = '',
}: InlineIconProps) => (
  <motion.span
    variants={pop}
    whileHover={{ rotate: 8, scale: 1.08 }}
    style={{ '--brand': color, '--surface': backgroundColor ?? color } as React.CSSProperties}
    className={
      'mx-[0.12em] inline-flex h-[1.35em] w-[1.35em] -translate-y-[0.04em] items-center justify-center ' +
      'rounded-[0.28em] align-middle text-white ' +
      'border-[0.04em] border-[color:color-mix(in_oklab,var(--brand)_78%,black)] ' +
      'bg-linear-to-b from-[color-mix(in_oklab,var(--surface)_86%,white)] to-(--surface) ' +
      'shadow-[inset_0_0_0_1.5px_var(--effect-white-24)] ' +
      className
    }
  >
    <span className="flex h-[64%] w-[64%] items-center justify-center [&>svg]:h-full [&>svg]:w-full">
      {children}
    </span>
  </motion.span>
)
