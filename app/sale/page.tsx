import Link from 'next/link'
import { IconArrowRight, IconCheck, IconMail } from '@tabler/icons-react'
import { Logo } from '@/components/logo'
import { SaleBadge } from '@/components/SaleBadge'

const inquiry = 'mailto:xparyan68@gmail.com?subject=Ace%20template%20inquiry'

const features = [
  'Responsive marketing page with hero and navigation',
  'Interview preview with role context, question prompt, and recording state',
  'Trusted-by logo carousel',
  'Interactive feature showcase and “How it works” section',
  'Answer feedback and interview progress visuals',
  'Testimonials, pricing plans, and FAQ',
  'Closing call to action and branded footer',
  'Login, signup, and forgot-password screens',
  'Reusable buttons, inputs, logo, and inline icons',
  'Central theme tokens for colors, surfaces, type, and shape',
  'Responsive layouts and reduced-motion support',
]

const packages = [
  { title: 'Landing page', detail: 'Marketing experience and shared design system', price: '$300' },
  { title: 'Add an account page', detail: 'Login, signup, or password recovery', price: '$30 each' },
  { title: 'Complete set', detail: 'Landing page plus all three account pages', price: '$390' },
]

export default function SalePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-page text-copy">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <Link href="/" aria-label="Ace home" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
          <Logo />
        </Link>
        <Link href="/" className="rounded-full px-3 py-2 font-mono text-sm text-body transition-colors hover:text-copy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
          Back to Ace
        </Link>
      </header>

      <section aria-labelledby="sale-heading" className="relative isolate -mt-[76px] flex min-h-[650px] items-start justify-center overflow-hidden bg-page px-4 pb-28 pt-32 text-center sm:-mt-[84px] sm:min-h-[730px] sm:px-8 sm:pb-36 sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[570px] overflow-hidden sm:h-[650px]">
          <div className="absolute -inset-2 scale-[1.02] bg-cover bg-[center_43%] blur-[1px]" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-300/5 via-neutral-300/5 to-page" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-page sm:h-52" />
        </div>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/55 px-4 py-2 font-mono text-xs font-medium text-neutral-800 shadow-[0_8px_24px_-18px_var(--effect-black-30)] backdrop-blur-md sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Ace source template
          </p>
          <h1 id="sale-heading" className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-neutral-900 drop-shadow-[0_1px_2px_var(--effect-white-65)] sm:text-6xl lg:text-7xl">
            A polished start for your interview practice product.
          </h1>
          <p className="mt-5 max-w-2xl font-mono text-sm leading-6 text-neutral-700 drop-shadow-[0_1px_2px_var(--effect-white-65)] sm:mt-6 sm:text-base sm:leading-7">
            A responsive Next.js front-end template with the product pages, UI, and theme system ready for your own direction.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-9">
            <SaleBadge href={inquiry} ariaLabel="Email to ask about the Ace landing page source code, priced at $300." />
            <a href={inquiry} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-[3px] border-[color:color-mix(in_oklab,var(--brand-primary)_78%,black)] bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-primary)_86%,white),var(--brand-primary))] px-6 font-mono text-sm font-semibold text-white shadow-[inset_0_0_0_1.5px_var(--effect-white-24),0_14px_30px_-18px_var(--effect-black-30)] transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus motion-reduce:transition-none">
              <IconMail aria-hidden="true" className="h-4 w-4" /> Ask about purchasing <IconArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <p className="font-mono text-xs text-neutral-700">Source-code purchase · Written license arranged directly</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="px-4 pb-16 pt-3 sm:px-8 sm:pb-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-7 border-b border-neutral-500/25 pb-5 sm:mb-8 sm:pb-6">
            <p className="mb-2 font-mono text-sm font-medium text-brand-logo">Included in the source</p>
            <h2 id="features-heading" className="font-display text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Everything in the template</h2>
          </div>
          <ul className="grid gap-x-12 md:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 border-b border-neutral-500/15 py-4 font-mono text-sm leading-6 text-body">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <IconCheck aria-hidden="true" className="h-3.5 w-3.5" stroke={2.5} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-xs leading-5 text-subtle">Authentication screens are presentation UI and are not connected to an authentication service.</p>
        </div>
      </section>

      <section aria-labelledby="packages-heading" className="px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto w-full max-w-5xl rounded-[24px] border border-white/75 bg-surface/80 p-5 shadow-[0_18px_45px_-34px_var(--effect-black-30)] sm:p-8">
          <div className="mb-5 sm:mb-6">
            <p className="mb-2 font-mono text-sm font-medium text-brand-logo">Purchase options</p>
            <h2 id="packages-heading" className="font-display text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Choose your package</h2>
          </div>
          <div className="divide-y divide-neutral-500/15 border-y border-neutral-500/20">
            {packages.map(({ title, detail, price }) => (
              <div key={title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-5">
                <div>
                  <h3 className="font-display text-base font-semibold sm:text-lg">{title}</h3>
                  <p className="mt-1 font-mono text-sm leading-5 text-body">{detail}</p>
                </div>
                <p className="font-display text-xl font-semibold tracking-tight text-brand-deep sm:shrink-0 sm:text-2xl">{price}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-mono text-xs leading-5 text-subtle">Purchase terms and the written source-code license are confirmed directly.</p>
            <a href={inquiry} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border-[2px] border-[color:color-mix(in_oklab,var(--brand-primary)_78%,black)] bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-primary)_86%,white),var(--brand-primary))] px-4 font-mono text-sm font-semibold text-white shadow-[inset_0_0_0_1px_var(--effect-white-24)] transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus motion-reduce:transition-none">
              <IconMail aria-hidden="true" className="h-4 w-4" /> Contact to purchase
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-6 sm:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 border-t border-neutral-500/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Ace home" className="w-fit rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"><Logo /></Link>
          <p className="font-mono text-xs text-subtle">Ace interview practice template</p>
        </div>
      </footer>
    </main>
  )
}
