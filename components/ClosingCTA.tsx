'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, MotionConfig, useMotionValue, useSpring } from 'motion/react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export function ClosingCTA() {
  const router = useRouter()
  const [revealing, setRevealing] = useState(false)
  const [viewSize, setViewSize] = useState({ width: 1000, height: 390 })
  const sizeRef = useRef(viewSize)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const pointerX = useSpring(rawX, { stiffness: 280, damping: 34, mass: 0.45 })
  const pointerY = useSpring(rawY, { stiffness: 280, damping: 34, mass: 0.45 })

  const trackPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextSize = { width: bounds.width, height: bounds.height }
    if (sizeRef.current.width !== nextSize.width || sizeRef.current.height !== nextSize.height) {
      sizeRef.current = nextSize
      setViewSize(nextSize)
    }
    rawX.set(event.clientX - bounds.left)
    rawY.set(event.clientY - bounds.top)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="closing-cta-heading" className="bg-page px-4 pb-10 pt-4 sm:px-8 sm:pb-14">
        <motion.div
          onPointerEnter={(event) => { trackPointer(event); if (event.pointerType === 'mouse') setRevealing(true) }}
          onPointerLeave={(event) => { if (event.pointerType === 'mouse') setRevealing(false) }}
          onPointerMove={(event) => {
            trackPointer(event)
            if (event.pointerType === 'touch') setRevealing(true)
          }}
          onPointerDown={(event) => { trackPointer(event); setRevealing(true) }}
          onPointerUp={(event) => { if (event.pointerType === 'touch') setRevealing(false) }}
          onPointerCancel={() => setRevealing(false)}
          className="group relative isolate mx-auto flex min-h-[390px] w-full max-w-6xl flex-col justify-between overflow-hidden rounded-[30px] border border-black/10 bg-neutral-950 p-6 shadow-[0_24px_60px_-32px_var(--effect-black-55)] sm:min-h-[360px] sm:p-9 lg:p-11"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-cover bg-[center_58%]"
            style={{ backgroundImage: "url('/beautiful-landscape.webp')" }}
          />
          <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-t from-neutral-950/82 via-neutral-950/62 to-neutral-950/55" />
          <motion.svg
            aria-hidden="true"
            animate={{ opacity: revealing ? 1 : 0 }}
            transition={{ duration: 0.16 }}
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
            viewBox={`0 0 ${viewSize.width} ${viewSize.height}`}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="ace-spotlight-edge" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.025 0.04" numOctaves="2" seed="8" result="edgeNoise" />
                <feDisplacementMap in="SourceGraphic" in2="edgeNoise" scale="24" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="ace-spotlight-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={viewSize.width} height={viewSize.height}>
                <rect width={viewSize.width} height={viewSize.height} fill="black" />
                <motion.ellipse cx={pointerX} cy={pointerY} rx="68" ry="68" fill="white" filter="url(#ace-spotlight-edge)" />
              </mask>
            </defs>
            <image href="/beautiful-landscape.webp" width={viewSize.width} height={viewSize.height} preserveAspectRatio="xMidYMid slice" mask="url(#ace-spotlight-mask)" />
          </motion.svg>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-t from-neutral-950/65 via-transparent to-neutral-950/15" />

          <div className="pointer-events-none relative z-10 w-fit">
            <Logo showName={false} markClassName="h-14 w-14 sm:h-16 sm:w-16" />
          </div>

          <div className="relative z-10 mt-16 flex flex-col gap-7 sm:mt-20 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-sm font-medium text-white/75">Your next interview starts here</p>
              <h2 id="closing-cta-heading" className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Walk in ready <span className="text-sky-300">to make your case.</span>
              </h2>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button size="sm" onClick={() => router.push('/signup')}>Start practicing</Button>
              <Button size="sm" variant="secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Explore plans
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}
