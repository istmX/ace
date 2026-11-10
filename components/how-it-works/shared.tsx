import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, type TargetAndTransition, type Variants } from 'motion/react'
import { TextMorph } from 'torph/react'
import { LogoMark } from '@/components/logo'

export const spring = { type: 'spring', stiffness: 220, damping: 24, mass: 0.8 } as const
export const easeOut = [0.19, 1, 0.22, 1] as const
const morphEase = 'cubic-bezier(0.19, 1, 0.22, 1)'

export const v = (rest: TargetAndTransition, hover: TargetAndTransition): Variants => ({ rest, hover })
export const after = (delay: number) => ({ ...spring, delay })

export function Morph({ children, className = '' }: { children: string; className?: string }) {
  return (
    <TextMorph as="span" duration={450} ease={morphEase} className={`whitespace-nowrap ${className}`}>
      {children}
    </TextMorph>
  )
}

export function Swap({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`block ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={children}
          className="block"
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          transition={{ duration: 0.28, ease: easeOut }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function useTicker(active: boolean, ms: number) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!active) {
      setTick(0)
      return
    }
    const id = setInterval(() => setTick((t) => t + 1), ms)
    return () => clearInterval(id)
  }, [active, ms])
  return tick
}

export function LogoTile({ size }: { size: number }) {
  return (
    <LogoMark
      className="block shrink-0 text-brand-logo"
      style={{ width: size, height: size }}
    />
  )
}

export function Wave({ count = 10, barClass = 'bg-surface/90' }: { count?: number; barClass?: string }) {
  return (
    <span aria-hidden="true" className="flex h-6 items-center gap-[3px]">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className={`h-full w-[3px] origin-center rounded-full ${barClass}`}
          variants={{
            rest: { scaleY: 0.25 },
            hover: {
              scaleY: [0.25, 1, 0.45, 0.85, 0.25],
              transition: { duration: 1 + (i % 5) * 0.12, repeat: Infinity, ease: 'easeInOut', delay: i * 0.03 },
            },
          }}
        />
      ))}
    </span>
  )
}

export const heightWide = 'h-[380px] md:h-[460px]'
export const heightFeedback = 'h-[460px]'
export const heightSmall = 'h-[320px]'

type CardProps = {
  title: string
  description: string
  icon: ReactNode
  className?: string
  height?: string
  onHover?: (hovered: boolean) => void
  children: ReactNode
}

export function BentoCard({ title, description, icon, className = '', height = heightSmall, onHover, children }: CardProps) {
  const [touchActive, setTouchActive] = useState(false)

  return (
    <motion.article
      initial="rest"
      animate={touchActive ? 'hover' : 'rest'}
      whileHover="hover"
      whileFocus="hover"
      whileTap="hover"
      tabIndex={0}
      onPointerDown={(event) => {
        if (event.pointerType !== 'touch') return
        const next = !touchActive
        setTouchActive(next)
        onHover?.(next)
      }}
      onHoverStart={() => onHover?.(true)}
      onHoverEnd={() => onHover?.(false)}
      onFocus={() => onHover?.(true)}
      onBlur={() => onHover?.(false)}
      style={{ touchAction: 'manipulation' }}
      className={`flex min-w-0 flex-col rounded-[28px] bg-surface-soft p-3 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus sm:p-5 ${className}`}
    >
      <div className={`relative isolate overflow-hidden rounded-[20px] ${height}`}>{children}</div>
      <div className="flex items-start gap-3 px-1 pb-1 pt-5">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-surface text-brand-logo shadow-sm">
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-medium leading-snug tracking-[-0.02em] text-copy sm:text-xl">
            {title}
          </h3>
          <p className="mt-1 max-w-md font-mono text-sm leading-relaxed text-neutral-600">{description}</p>
        </div>
      </div>
    </motion.article>
  )
}

