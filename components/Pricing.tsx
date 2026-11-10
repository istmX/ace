'use client'

import { useState } from 'react'
import { motion, MotionConfig } from 'motion/react'
import { TextMorph } from 'torph/react'
import { IconCheck } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Free',
    description: 'Build a steady practice habit.',
    monthly: 0,
    annual: 0,
    features: ['3 practice sessions each month', 'Core interview question sets', 'Instant answer feedback', 'Essential scorecards', '7-day progress history'],
    action: 'Start for free',
    featured: false,
  },
  {
    name: 'Practice',
    description: 'Get sharper with every answer.',
    monthly: 12,
    annual: 9,
    features: ['Unlimited practice sessions', 'Adaptive follow-up questions', 'Detailed answer scorecards', 'Role-specific question sets', 'Full progress history'],
    action: 'Choose Practice',
    featured: true,
  },
  {
    name: 'Career',
    description: 'Prepare with a specific role in mind.',
    monthly: 24,
    annual: 18,
    features: ['Everything in Practice', 'Job description preparation', 'Company-specific question sets', 'Personalized practice plans', 'Early access to new features'],
    action: 'Choose Career',
    featured: false,
  },
]

const morphEase = 'cubic-bezier(0.19, 1, 0.22, 1)'

export function Pricing() {
  const [annual, setAnnual] = useState(false)
  const router = useRouter()

  return (
    <MotionConfig reducedMotion="user">
      <section id="pricing" aria-labelledby="pricing-heading" className="bg-page px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-sm font-medium text-brand-logo">Plans for your next step</p>
              <h2 id="pricing-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-copy sm:text-4xl lg:text-5xl">
                Make practice <span className="text-brand">part of your plan.</span>
              </h2>
              <p className="mt-4 max-w-xl font-mono text-base leading-7 text-body sm:text-lg">
                Start for free, then choose the practice rhythm that fits your goals.
              </p>
            </div>

            <div className="flex w-fit items-center gap-1 rounded-full border border-black/5 bg-surface/55 p-1 shadow-[inset_0_1px_0_var(--effect-white-80)]" role="group" aria-label="Billing period">
              {[false, true].map((isAnnual) => (
                <button
                  key={String(isAnnual)}
                  type="button"
                  aria-pressed={annual === isAnnual}
                  onClick={() => setAnnual(isAnnual)}
                  className={`relative isolate rounded-full px-4 py-2 font-mono text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-focus ${annual === isAnnual ? 'text-copy' : 'text-neutral-600 hover:text-copy'}`}
                >
                  {annual === isAnnual && <motion.span layoutId="pricing-billing-pill" className="absolute inset-0 -z-10 rounded-full bg-surface shadow-[0_2px_8px_var(--effect-black-10)]" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                  {isAnnual ? 'Yearly' : 'Monthly'}
                  {isAnnual && <span className="ml-1.5 text-xs text-emerald-700">−25%</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[26px] border p-6 shadow-[0_18px_40px_-28px_var(--effect-black-35)] sm:p-7 ${plan.featured ? 'border-brand/40 bg-surface/85 ring-1 ring-focus/15' : 'border-white/65 bg-surface/55'}`}
              >
                {plan.featured && <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent" />}
                <div className="flex min-h-8 items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-medium tracking-[-0.025em] text-copy">{plan.name}</h3>
                  {plan.featured && <span className="rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium text-brand-deep">Most popular</span>}
                </div>
                <p className="mt-2 min-h-6 font-mono text-sm text-neutral-600">{plan.description}</p>

                <div className="mt-7 flex h-[58px] items-baseline gap-1.5 border-b border-black/8 pb-4">
                  <span className="font-display text-4xl font-medium leading-none tracking-[-0.045em] text-copy">
                    <TextMorph as="span" duration={520} ease={morphEase} numbers>
                      ${annual ? plan.annual : plan.monthly}
                    </TextMorph>
                  </span>
                  <span className="font-mono text-sm text-neutral-600">{plan.monthly === 0 ? 'forever' : '/ month'}</span>
                </div>
                <p className="mt-3 h-5 font-mono text-xs text-subtle">
                  {plan.monthly === 0 ? 'No card required' : annual ? 'Billed yearly' : 'Billed monthly'}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex min-h-5 items-start gap-2.5 font-mono text-sm leading-5 text-body">
                      <span className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.featured ? 'bg-brand/12 text-brand-logo' : 'bg-neutral-900/5 text-body'}`}>
                        <IconCheck aria-hidden="true" className="h-3 w-3" stroke={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    width="full"
                    size="sm"
                    variant={plan.featured ? 'primary' : 'secondary'}
                    onClick={() => router.push('/signup')}
                  >
                    {plan.action}
                  </Button>
                  <p className="mt-3 h-4 text-center font-mono text-[11px] text-subtle">
                    {plan.featured ? 'Cancel anytime' : plan.monthly === 0 ? 'Free to get started' : 'For focused preparation'}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
