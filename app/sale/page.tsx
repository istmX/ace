'use client'

import Link from 'next/link'
import { motion, MotionConfig, useReducedMotion } from 'motion/react'
import {
  IconArrowUpRight,
  IconBrain,
  IconChartBar,
  IconCheck,
  IconCircleDot,
  IconMail,
  IconMessageCircle,
  IconMicrophone,
  IconSparkles,
  IconTargetArrow,
} from '@tabler/icons-react'
import Logo from '@/components/logo'
import { InlineIcon } from '@/components/ui/inline-icon'

const features = [
  {
    icon: IconMicrophone,
    title: 'AI mock interviews',
    description: 'A focused practice room for answering realistic, role-specific questions one at a time.',
  },
  {
    icon: IconMessageCircle,
    title: 'Adaptive follow-ups',
    description: 'Keep the conversation moving with follow-up questions that respond to the answer you gave.',
  },
  {
    icon: IconChartBar,
    title: 'Clear scorecards',
    description: 'Turn every session into practical feedback on clarity, structure, and technical depth.',
  },
  {
    icon: IconTargetArrow,
    title: 'Role-specific prep',
    description: 'Shape question sets around software, AI, product, data, and the role you want next.',
  },
  {
    icon: IconBrain,
    title: 'Job description prep',
    description: 'Use the job description to focus practice on the skills and signals a role actually needs.',
  },
  {
    icon: IconSparkles,
    title: 'Progress that compounds',
    description: 'Build a repeatable practice habit with history, plans, and a clear next step after every session.',
  },
]

const deliverables = [
  'Responsive AI interview platform landing page',
  'Interview practice demo and product storytelling',
  'Feature, workflow, testimonials, pricing, and FAQ sections',
  'Responsive navigation and mobile menu',
  'Motion details with reduced-motion support',
  'Shared buttons, inputs, icons, and theme tokens',
]

export default function SalePage() {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-x-clip bg-page text-copy">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
          <Link href="/" aria-label="Back to Ace home" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
            <Logo />
          </Link>
          <Link href="/" className="font-mono text-sm text-body underline-offset-4 transition-colors hover:text-copy hover:underline">
            Back to site
          </Link>
        </nav>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-24">
          <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-8 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-4xl"
          >
            <p className="mb-5 flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-[0.12em] text-brand-logo">
              <InlineIcon color="var(--brand-primary)" className="mx-0 h-6 w-6 rounded-md">
                <IconCircleDot />
              </InlineIcon>
              Ace template · available now
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              A complete AI interview platform, ready to <span className="text-brand">make your own.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-7 text-body sm:text-lg">
              Give candidates a sharper way to prepare. Ace combines realistic mock interviews, thoughtful feedback,
              and a confident product story in one polished landing page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:xparyan68@gmail.com?subject=Ace%20template%20inquiry"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border-[3px] border-[color:color-mix(in_oklab,var(--brand-primary)_78%,black)] bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-primary)_86%,white),var(--brand-primary))] px-6 font-mono text-sm font-semibold text-white shadow-[inset_0_0_0_1.5px_var(--effect-white-24)] transition-[filter,transform] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                <IconMail className="h-4 w-4" />
                Email about the template
                <IconArrowUpRight className="h-4 w-4" />
              </a>
              <span className="font-mono text-sm text-subtle">Full landing page · $300</span>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-black/8 bg-surface/35 px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 max-w-2xl sm:mb-14">
              <p className="mb-3 font-mono text-sm font-medium text-brand-logo">What you get</p>
              <h2 id="features-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                Everything needed to sell <span className="text-brand">better practice.</span>
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.04 }}
                  className="border-t border-brand/20 pt-4"
                >
                  <InlineIcon color="var(--brand-primary)" className="mx-0 mb-4 h-8 w-8 rounded-lg">
                    <Icon />
                  </InlineIcon>
                  <h3 className="font-display text-xl font-medium tracking-[-0.025em]">{title}</h3>
                  <p className="mt-2 max-w-sm font-mono text-sm leading-6 text-body">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
          <div>
            <p className="mb-3 font-mono text-sm font-medium text-brand-logo">Built to be customized</p>
            <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Start with a strong product story. Make it <span className="text-brand">yours.</span>
            </h2>
            <p className="mt-5 max-w-xl font-mono text-base leading-7 text-body">
              The code is organized around a clear theme system and reusable components, so your next visual direction
              can be yours without rebuilding the experience from scratch.
            </p>
          </div>
          <div className="rounded-[26px] border border-brand/20 bg-surface/70 p-6 shadow-[0_18px_40px_-28px_var(--effect-black-35)] sm:p-8">
            <p className="font-mono text-sm font-medium text-subtle">Included in the landing page</p>
            <ul className="mt-6 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 font-mono text-sm leading-6 text-body">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <IconCheck className="h-3.5 w-3.5" stroke={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 rounded-[28px] border border-brand/20 bg-brand/8 p-6 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-brand-logo">Simple pricing</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Landing page for $300.</h2>
              <p className="mt-3 max-w-xl font-mono text-sm leading-6 text-body">
                Add login, signup, or forgot-password pages for $30 each. All three supporting pages with the landing
                page are $390 total.
              </p>
            </div>
            <a
              href="mailto:xparyan68@gmail.com?subject=Ace%20template%20purchase"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand/30 bg-surface px-4 py-3 font-mono text-sm font-semibold text-brand-deep shadow-[0_8px_24px_-14px_var(--effect-black-35)] transition-colors hover:border-brand/60 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Start a conversation
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </MotionConfig>
  )
}
