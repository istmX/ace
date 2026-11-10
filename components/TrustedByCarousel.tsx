'use client'

import { useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'motion/react'
import { IconBrandOpenai, IconBuildingSkyscraper } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const companies = [
  { name: 'OpenAI', slug: 'openai', href: 'https://openai.com', artwork: 'openai', story: 'Make complex ideas clear.' },
  { name: 'Stripe', slug: 'stripe', href: 'https://stripe.com', artwork: 'stripe', story: 'Bring care to every detail.' },
  { name: 'Notion', slug: 'notion', href: 'https://www.notion.so', artwork: 'notion', story: 'Give your thinking structure.' },
  { name: 'Vercel', slug: 'vercel', href: 'https://vercel.com', artwork: 'vercel', story: 'Ship thoughtful work.' },
  { name: 'Figma', slug: 'figma', href: 'https://www.figma.com', artwork: 'figma', story: 'Show how you collaborate.' },
  { name: 'Linear', slug: 'linear', href: 'https://linear.app', artwork: 'linear', story: 'Turn decisions into momentum.' },
  { name: 'Shopify', slug: 'shopify', href: 'https://www.shopify.com', artwork: 'shopify', story: 'Connect your work to outcomes.' },
  { name: 'Anthropic', slug: 'anthropic', href: 'https://www.anthropic.com', artwork: 'anthropic', story: 'Explain the trade-offs.' },
]

const duplicatedCompanies = [...companies, ...companies]
const cardWidth = 248
const cardGap = 16
const loopDistance = companies.length * (cardWidth + cardGap)
const speed = 15

function BrandArtwork({ type }: { type: string }) {
  if (type === 'openai') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#f8e4d3]">
        <div className="absolute inset-x-0 bottom-0 h-[74%] -rotate-12 scale-125 bg-[repeating-linear-gradient(90deg,#ff765f_0px,#ff765f_7px,#f7ae56_7px,#f7ae56_15px,#e87ca8_15px,#e87ca8_22px,#957ee8_22px,#957ee8_30px)] opacity-80" />
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[18px] border-white/60" />
        <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full border-[18px] border-[#ffdb85]/70" />
      </div>
    )
  }
  if (type === 'stripe') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#7455f6] via-[#9a7bfa] to-[#d9b8ff]">
        <div className="absolute -left-8 top-10 h-40 w-[125%] -rotate-[18deg] rounded-[42%] bg-gradient-to-r from-[#b4c8ff]/80 via-white/80 to-[#f7b6e6]/80" />
        <div className="absolute -left-8 top-24 h-36 w-[125%] -rotate-[18deg] rounded-[42%] bg-gradient-to-r from-[#66a8ff]/75 via-[#e9c6ff]/80 to-[#ffca99]/75" />
        <div className="absolute -left-8 top-36 h-32 w-[125%] -rotate-[18deg] rounded-[42%] bg-gradient-to-r from-[#a5f0dd]/70 via-[#b7a1ff]/75 to-[#ffc8d9]/80" />
      </div>
    )
  }
  if (type === 'notion') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#f5f3ef]">
        <div className="absolute -right-7 -top-12 rotate-6 rounded-[24px] border border-neutral-300/70 bg-white/80 p-4 shadow-xl">
          <div className="h-3 w-28 rounded bg-neutral-200" />
          <div className="mt-3 h-3 w-36 rounded bg-neutral-100" />
          <div className="mt-2 h-3 w-24 rounded bg-neutral-100" />
          <div className="mt-6 h-20 w-40 rounded-lg bg-[#f0eee9]" />
        </div>
        <div className="absolute -bottom-16 -left-7 h-40 w-40 rounded-full bg-[#e8e4dc]" />
      </div>
    )
  }
  if (type === 'vercel') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#eceef2]">
        <div className="absolute -right-2 -top-14 h-52 w-52 border border-neutral-400/40 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <div className="absolute right-7 top-4 h-40 w-40 border border-neutral-400/50 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <div className="absolute right-[68px] top-[58px] h-24 w-24 bg-gradient-to-br from-white to-neutral-300 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.8%,rgba(0,0,0,0.05)_50%,transparent_50.2%),linear-gradient(0deg,transparent_49.8%,rgba(0,0,0,0.05)_50%,transparent_50.2%)] bg-[size:32px_32px]" />
      </div>
    )
  }
  if (type === 'figma') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#f5e9e4]">
        <div className="absolute -left-7 -top-8 h-32 w-32 rounded-full bg-[#ff7262]" />
        <div className="absolute left-24 -top-8 h-32 w-32 rounded-full bg-[#a259ff]" />
        <div className="absolute -bottom-10 left-5 h-32 w-32 rounded-full bg-[#1abcfe]" />
        <div className="absolute -bottom-10 right-4 h-36 w-36 rounded-full bg-[#0acf83]" />
        <div className="absolute right-16 top-8 h-24 w-24 rounded-full bg-[#ffcd4e]" />
      </div>
    )
  }
  if (type === 'linear') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#e9e5fb]">
        <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#9e8df4] to-[#d9d2ff]" />
        <div className="absolute -right-3 -top-7 h-48 w-48 rounded-full border border-white/70" />
        <div className="absolute right-7 top-5 h-32 w-32 rounded-full border border-white/70" />
        <div className="absolute bottom-5 left-5 h-20 w-40 rounded-full bg-white/55 blur-sm" />
      </div>
    )
  }
  if (type === 'shopify') {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#e0f0dd]">
        <div className="absolute -right-8 -top-12 h-52 w-52 rounded-full bg-[#a8d5a1]" />
        <div className="absolute -bottom-16 -left-9 h-48 w-48 rounded-full bg-[#91c98b]" />
        <div className="absolute right-8 top-9 h-36 w-36 rotate-12 rounded-[28px] border border-white/80 bg-white/30" />
        <div className="absolute right-16 top-16 h-24 w-24 -rotate-6 rounded-[22px] border border-white/80 bg-white/30" />
      </div>
    )
  }
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#f2e8dd]">
      <div className="absolute -right-12 -top-10 h-56 w-56 rounded-full bg-[#e5c2a4]/70" />
      <div className="absolute right-8 top-4 h-40 w-40 rounded-full border border-white/80" />
      <div className="absolute right-16 top-12 h-24 w-24 rounded-full border border-white/80" />
      <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[#f8f2eb]" />
    </div>
  )
}

function CompanyCard({ company }: { company: (typeof companies)[number] }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <motion.article
      onHoverStart={() => setRevealed(true)}
      onHoverEnd={() => setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      className="group relative h-[228px] w-[248px] shrink-0 overflow-hidden rounded-[22px] border border-black/[0.07] bg-neutral-100 text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-[box-shadow,border-color] duration-300 hover:border-black/10 hover:shadow-[0_18px_38px_rgba(0,0,0,0.16)] sm:h-[248px]"
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: revealed ? 1 : 0.12, scale: revealed ? 1 : 1.06 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrandArtwork type={company.artwork} />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(rgba(20, 20, 20, 0.8) 0.55px, transparent 0.75px)',
          backgroundSize: '3px 3px',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/5 to-transparent"
        initial={false}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/[0.04]" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ y: revealed ? -13 : 0, scale: revealed ? 0.96 : 1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/75 px-4 py-3 shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
          {company.slug === 'openai' ? (
            <IconBrandOpenai aria-hidden="true" className="h-8 w-8 shrink-0 text-neutral-900" />
          ) : (
            <img
              src={`https://cdn.simpleicons.org/${company.slug}`}
              alt=""
              aria-hidden="true"
              className="h-6 w-6 object-contain sm:h-7 sm:w-7"
              loading="lazy"
              draggable={false}
            />
          )}
          <span className="font-display text-[23px] font-medium tracking-[-0.045em] text-neutral-900 sm:text-[25px]">
            {company.name}
          </span>
        </div>
      </motion.div>

      <motion.a
        href={company.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${company.name} website (opens in a new tab)`}
        onPointerDown={(event) => event.stopPropagation()}
        className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl px-3 py-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/90"
        initial={false}
        animate={{
          opacity: revealed ? 1 : 0.86,
          y: revealed ? 0 : 4,
          color: revealed ? '#ffffff' : '#262626',
          backgroundColor: revealed ? 'rgba(23,23,23,0.78)' : 'rgba(255,255,255,0.88)',
        }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <span className="max-w-[180px] font-mono text-sm leading-snug">Visit {company.name}</span>
        <span aria-hidden="true" className="font-mono text-base">↗</span>
      </motion.a>
    </motion.article>
  )
}

export function TrustedByCarousel() {
  const trackX = useMotionValue(0)
  const [paused, setPaused] = useState(false)
  const isDragging = useRef(false)
  const reducedMotion = useReducedMotion()

  useAnimationFrame((_, delta) => {
    if (paused || isDragging.current || reducedMotion) return
    const next = trackX.get() - (speed * delta) / 1000
    trackX.set(next <= -loopDistance ? next + loopDistance : next)
  })

  return (
    <section
      aria-labelledby="trusted-heading"
      className="overflow-hidden bg-neutral-300 pb-4 pt-8 sm:pb-8 sm:pt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <div className="mx-auto mb-6 flex w-full max-w-5xl items-end justify-between gap-5 px-4 sm:mb-8 sm:px-8">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-sm font-medium text-[#2563EB]">
            <InlineIcon color="#10b981"><IconBuildingSkyscraper /></InlineIcon>
            Aim a little higher
          </p>
          <h2 id="trusted-heading" className="max-w-2xl font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-neutral-900 sm:text-3xl lg:text-4xl">
            Practice for the <span className="text-[#407cf9]">teams you admire.</span>
          </h2>
          <p className="mt-2 font-mono text-sm text-neutral-700 sm:text-base">Build confidence for interviews at leading companies.</p>
        </div>
        <span aria-hidden="true" className="hidden shrink-0 pb-1 font-mono text-xs text-neutral-600 sm:block">Drag to explore&nbsp; ↔</span>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <motion.div
          className="flex w-max cursor-grab gap-4 px-4 active:cursor-grabbing sm:px-6 [&_a]:cursor-pointer"
          style={{ x: trackX, touchAction: 'pan-y' }}
          drag="x"
          dragConstraints={{ left: -loopDistance, right: 0 }}
          dragElastic={0.06}
          onDragStart={() => { isDragging.current = true; setPaused(true) }}
          onDragEnd={() => { isDragging.current = false; setPaused(false) }}
          onHoverStart={() => setPaused(true)}
          onHoverEnd={() => setPaused(false)}
        >
          {duplicatedCompanies.map((company, index) => (
            <CompanyCard key={`${company.slug}-${index}`} company={company} />
          ))}
        </motion.div>
      </div>
      <p className="sr-only">Company logos are examples of teams to prepare for and do not indicate endorsement.</p>
    </section>
  )
}
