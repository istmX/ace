import Link from 'next/link'
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChartBar,
  IconCheck,
  IconFileText,
  IconMail,
  IconMicrophone,
  IconPalette,
  IconTargetArrow,
} from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { InlineIcon } from '@/components/ui/inline-icon'
import { Logo } from '@/components/logo'
import { SaleBadge } from '@/components/SaleBadge'

const inquiry = 'mailto:xparyan68@gmail.com?subject=Ace%20template%20inquiry'

const deliverables = [
  'Responsive landing page and navigation',
  'Interview preview, feature showcase, and workflow section',
  'Testimonials, pricing, FAQ, and closing CTA',
  'Login, signup, and password recovery screens',
  'Shared UI components and editable theme tokens',
]

const questionRows = [
  'How would you evaluate a new feature?',
  'Where would you add retrieval to this system?',
  'How would you measure quality after launch?',
]

function ContactLink({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={inquiry}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-[3px] border-[color:color-mix(in_oklab,var(--brand-primary)_78%,black)] bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-primary)_86%,white),var(--brand-primary))] px-5 font-mono text-sm font-semibold text-white shadow-[inset_0_0_0_1.5px_var(--effect-white-24)] transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${className}`}
    >
      {children}
    </a>
  )
}

export default function SalePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-page text-copy">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <Link href="/" aria-label="Ace home" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
          <Logo />
        </Link>
        <Link href="/" className="rounded-full px-3 py-2 font-mono text-sm text-body transition-colors hover:text-copy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
          Back to Ace <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section aria-labelledby="sale-heading" className="px-4 pb-12 pt-3 sm:px-8 sm:pb-20 sm:pt-5">
        <div className="relative isolate mx-auto grid min-h-[530px] w-full max-w-7xl overflow-hidden rounded-[30px] bg-neutral-950 shadow-[0_24px_64px_-34px_var(--effect-black-55)] lg:min-h-[570px] lg:grid-cols-[1.05fr_0.95fr]">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_57%]" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-950/35 lg:to-neutral-950/15" />
          <div className="flex flex-col items-start justify-center p-6 sm:p-10 lg:p-14">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-highlight" />
              Ace source template
            </p>
            <h1 id="sale-heading" className="max-w-[680px] font-display text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              A polished start for your interview practice product.
            </h1>
            <p className="mt-5 max-w-xl font-mono text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7">
              A responsive Next.js front-end template with a complete product story, reusable UI, and authentication screens. Make the design and content your own.
            </p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center">
              <ContactLink><IconMail aria-hidden="true" className="h-4 w-4" /> Ask about the source <IconArrowRight aria-hidden="true" className="h-4 w-4" /></ContactLink>
              <span className="font-mono text-xs text-white/75">Front-end template · Next.js</span>
            </div>
          </div>

          <div className="relative flex flex-col justify-end gap-4 p-5 sm:p-8 lg:justify-center lg:p-10">
            <div className="absolute inset-x-5 top-5 h-28 rounded-full bg-brand/15 blur-3xl sm:inset-x-10 sm:top-12 sm:h-40" aria-hidden="true" />
            <SaleBadge href={inquiry} size="large" />
            <div className="max-w-[440px] rounded-2xl border border-white/35 bg-surface/90 p-4 shadow-[0_20px_50px_-28px_var(--effect-black-35)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-divider pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white"><IconMicrophone aria-hidden="true" className="h-4 w-4" /></span>
                  <div><p className="font-display text-sm font-semibold">Interview preview</p><p className="font-mono text-[11px] text-subtle">Senior AI Engineer</p></div>
                </div>
                <span className="rounded-full bg-success/10 px-2.5 py-1 font-mono text-[10px] font-medium text-success">Practice</span>
              </div>
              <p className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-subtle">A question to start with</p>
              <p className="mt-1 font-display text-base font-medium leading-snug sm:text-lg">How would you evaluate a new feature?</p>
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-surface-soft px-3 py-2.5">
                <span className="font-mono text-[11px] tabular-nums text-subtle">00:58</span>
                <div className="flex h-6 flex-1 items-center gap-1" aria-hidden="true">
                  {[4, 8, 5, 10, 6, 12, 7, 11, 5, 9, 4, 8, 12, 6, 10, 5, 9, 4].map((height, index) => <span key={index} className="flex-1 rounded-full bg-brand/65" style={{ height: `${height * 1.5}px` }} />)}
                </div>
                <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden="true" />
                <span className="font-mono text-[11px] text-subtle">Live</span>
              </div>
            </div>
            <p className="px-1 font-mono text-[11px] text-white/75">Auth screens are presentation UI; no authentication service is included.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 font-mono text-sm font-medium text-brand-logo">Inside the template</p>
              <h2 id="included-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                The details that make practice feel real.
              </h2>
            </div>
            <p className="max-w-md font-mono text-sm leading-6 text-body">A set of connected product moments, built from reusable components and ready for your visual identity.</p>
          </div>

          <div className="grid auto-rows-[minmax(210px,auto)] grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 xl:grid-cols-12">
            <article className="relative isolate flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[26px] bg-neutral-950 p-5 text-white sm:min-h-[390px] sm:p-7 xl:col-span-7">
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_63%] opacity-75" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/15" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-neutral-950/40 px-3 py-2 backdrop-blur">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white"><IconMicrophone aria-hidden="true" className="h-4 w-4" /></span>
                  <span><span className="block font-display text-xs font-semibold">Ace Interviewer</span><span className="font-mono text-[10px] text-white/70">Question 2 of 5</span></span>
                </div>
                <span className="rounded-full border border-white/20 bg-neutral-950/35 px-3 py-1.5 font-mono text-[10px] text-white/80 backdrop-blur">Role based</span>
              </div>
              <div className="mt-12 max-w-xl rounded-2xl border border-white/30 bg-surface/95 p-4 text-copy shadow-[0_20px_46px_-24px_var(--effect-black-35)] backdrop-blur sm:p-5">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-subtle">Ace asks</p>
                <p className="mt-1 font-display text-lg font-medium leading-snug sm:text-xl">How would you evaluate a new feature before it reaches users?</p>
              </div>
              <div className="mt-5 max-w-xl">
                <h3 className="font-display text-xl font-medium sm:text-2xl">A focused interview flow</h3>
                <p className="mt-2 max-w-lg font-mono text-sm leading-6 text-white/75">Build a more lifelike practice moment with role context, question prompts, and clear recording states.</p>
              </div>
            </article>

            <article className="flex min-h-[350px] flex-col rounded-[26px] border border-white/70 bg-surface p-5 sm:min-h-[390px] sm:p-7 xl:col-span-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <InlineIcon className="mx-0 h-9 w-9 rounded-xl"><IconChartBar /></InlineIcon>
                  <div><h3 className="font-display text-lg font-semibold">Useful feedback</h3><p className="font-mono text-xs text-subtle">An answer review at a glance</p></div>
                </div>
                <span className="rounded-full bg-brand/8 px-2.5 py-1 font-mono text-[10px] font-medium text-brand">8.8 / 10</span>
              </div>
              <div className="my-auto rounded-2xl bg-surface-soft p-4 sm:p-5">
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full border-[7px] border-brand/15 border-t-brand border-r-brand font-display text-2xl font-semibold">88</div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold">Answer review</p>
                    <p className="mt-1 font-mono text-xs text-subtle">Clarity and depth, made visible.</p>
                  </div>
                </div>
                {[['Clarity', '9.0', '90%'], ['Technical depth', '8.2', '82%'], ['Structure', '7.9', '79%']].map(([label, score, width]) => (
                  <div key={label} className="mb-3 last:mb-0">
                    <div className="mb-1 flex justify-between font-mono text-[11px] text-body"><span>{label}</span><span>{score}</span></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-neutral-200"><div className="h-full rounded-full bg-brand" style={{ width }} /></div>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-mono text-sm leading-6 text-body">Help candidates see what landed and where to sharpen their next answer.</p>
            </article>

            <article className="flex min-h-[260px] flex-col rounded-[26px] border border-white/70 bg-surface p-5 sm:p-6 xl:col-span-4">
              <div className="flex items-center gap-3"><InlineIcon className="mx-0 h-9 w-9 rounded-xl"><IconTargetArrow /></InlineIcon><h3 className="font-display text-lg font-semibold">Questions for the role</h3></div>
              <p className="mt-3 font-mono text-sm leading-6 text-body">A question set can start from a role, skills, or an uploaded job description.</p>
              <div className="mt-auto space-y-2 pt-5">
                <div className="flex flex-wrap gap-1.5">{['LLM evaluation', 'RAG', 'System design'].map((tag) => <span key={tag} className="rounded-full bg-surface-soft px-2.5 py-1 font-mono text-[10px] text-body">{tag}</span>)}</div>
                {questionRows.slice(0, 2).map((question) => <div key={question} className="flex items-center gap-2 rounded-xl bg-surface-soft px-3 py-2 font-mono text-xs text-body"><IconCheck aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-brand" />{question}</div>)}
              </div>
            </article>

            <article className="flex min-h-[260px] flex-col rounded-[26px] border border-white/70 bg-surface p-5 sm:p-6 xl:col-span-4">
              <div className="flex items-center gap-3"><InlineIcon color="var(--accent-violet)" className="mx-0 h-9 w-9 rounded-xl"><IconPalette /></InlineIcon><h3 className="font-display text-lg font-semibold">A theme you can make yours</h3></div>
              <p className="mt-3 font-mono text-sm leading-6 text-body">Brand colors, surfaces, type, and radii come from central CSS variables instead of scattered component values.</p>
              <div className="mt-auto flex items-center gap-2 pt-6">
                <span className="h-8 w-8 rounded-xl bg-brand shadow-[inset_0_0_0_1px_var(--effect-white-24)]" />
                <span className="h-8 w-8 rounded-xl bg-neutral-900" />
                <span className="h-8 w-8 rounded-xl bg-white ring-1 ring-neutral-200" />
                <span className="ml-2 font-mono text-xs text-subtle">One place to shape the look</span>
              </div>
            </article>

            <article className="flex min-h-[260px] flex-col rounded-[26px] bg-brand p-5 text-white sm:p-6 xl:col-span-4">
              <div className="flex items-center gap-3"><InlineIcon color="var(--brand-deep)" backgroundColor="var(--brand-primary)" className="mx-0 h-9 w-9 rounded-xl"><IconFileText /></InlineIcon><h3 className="font-display text-lg font-semibold">Responsive by design</h3></div>
              <p className="mt-3 font-mono text-sm leading-6 text-white/80">Marketing and account screens adapt from desktop layouts down to compact mobile views.</p>
              <div className="mt-auto grid grid-cols-3 gap-2 pt-6 font-mono text-[10px]">
                {['Landing', 'Sign in', 'Sign up'].map((label) => <span key={label} className="rounded-lg border border-white/20 bg-white/10 px-2 py-2 text-center">{label}</span>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="source-heading" className="px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[28px] border border-white/65 bg-surface/60 p-5 sm:gap-12 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-10">
          <div>
            <p className="mb-3 font-mono text-sm font-medium text-brand-logo">The source, ready for your direction</p>
            <h2 id="source-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">A clear foundation to build on.</h2>
            <p className="mt-4 max-w-lg font-mono text-sm leading-6 text-body">Keep the parts that fit, reshape what doesn’t, and carry a consistent visual system across the whole experience.</p>
          </div>
          <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {deliverables.map((item) => <li key={item} className="flex items-start gap-3 font-mono text-sm leading-6 text-body"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><IconCheck aria-hidden="true" className="h-3.5 w-3.5" stroke={2.5} /></span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="pricing-heading" className="px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="mb-3 font-mono text-sm font-medium text-brand-logo">Simple package options</p>
            <h2 id="pricing-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">Start with what you need.</h2>
            <p className="mt-3 font-mono text-sm leading-6 text-body">Supporting account pages can be added to the landing page source.</p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-3 sm:gap-4">
            <article className="flex min-h-[270px] flex-col rounded-[24px] border border-white/70 bg-surface p-5 sm:p-6">
              <p className="font-mono text-xs font-medium text-subtle">Core template</p>
              <h3 className="mt-2 font-display text-xl font-semibold">Landing page</h3>
              <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em]">$300</p>
              <p className="mt-2 font-mono text-sm leading-6 text-body">The complete marketing experience and shared design system.</p>
              <a href={inquiry} className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-sm font-semibold text-brand-deep hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">Ask about this package <IconArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
            </article>

            <article className="flex min-h-[270px] flex-col rounded-[24px] border border-white/70 bg-surface p-5 sm:p-6">
              <p className="font-mono text-xs font-medium text-subtle">Optional addition</p>
              <h3 className="mt-2 font-display text-xl font-semibold">One account page</h3>
              <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em]">$30 <span className="font-mono text-sm font-medium tracking-normal text-subtle">each</span></p>
              <p className="mt-2 font-mono text-sm leading-6 text-body">Add login, signup, or password recovery to the landing page.</p>
              <a href={inquiry} className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-sm font-semibold text-brand-deep hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">Ask about an add-on <IconArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
            </article>

            <article className="relative flex min-h-[270px] flex-col overflow-hidden rounded-[24px] border border-brand/20 bg-white p-5 shadow-[0_18px_45px_-30px_var(--effect-black-30)] sm:p-6">
              <span className="absolute right-5 top-5 rounded-full bg-brand/8 px-2.5 py-1 font-mono text-[10px] font-medium text-brand">All pages</span>
              <p className="font-mono text-xs font-medium text-subtle">Complete set</p>
              <h3 className="mt-2 font-display text-xl font-semibold">Landing + all account pages</h3>
              <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em]">$390</p>
              <p className="mt-2 font-mono text-sm leading-6 text-body">The landing page plus login, signup, and password recovery.</p>
              <a href={inquiry} className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-sm font-semibold text-brand-deep hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">Ask about the full set <IconArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
            </article>
          </div>
          <p className="mt-4 font-mono text-xs leading-5 text-subtle">Authentication screens are UI only and are not connected to an authentication service. Purchase terms and written license are confirmed directly.</p>
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
        <div className="relative isolate mx-auto flex min-h-[280px] w-full max-w-7xl flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-950 p-6 shadow-[0_24px_60px_-32px_var(--effect-black-55)] sm:min-h-[310px] sm:p-9 lg:flex-row lg:items-end lg:p-11">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_57%]" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-950/35" />
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-medium text-white/75">Ready to make it yours?</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">Let’s talk about the Ace source.</h2>
            <p className="mt-3 max-w-xl font-mono text-sm leading-6 text-white/75">Ask about the template, the included pages, and licensing.</p>
          </div>
          <ContactLink className="mt-7 shrink-0 lg:mt-0"><IconMail aria-hidden="true" className="h-4 w-4" /> Contact about the template <IconArrowRight aria-hidden="true" className="h-4 w-4" /></ContactLink>
        </div>
      </section>

      <footer className="px-4 pb-6 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-neutral-500/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Ace home" className="w-fit rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"><Logo /></Link>
          <p className="font-mono text-xs text-subtle">Ace interview practice template · <Link href="/" className="underline-offset-4 hover:text-copy hover:underline">Back to the site</Link></p>
        </div>
      </footer>
    </main>
  )
}
