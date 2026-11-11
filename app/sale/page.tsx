import Link from 'next/link'
import {
  IconArrowRight,
  IconBrain,
  IconChartBar,
  IconCheck,
  IconFileText,
  IconMail,
  IconMessageCircle,
  IconMicrophone,
  IconSparkles,
  IconTargetArrow,
} from '@tabler/icons-react'
import Logo from '@/components/logo'
import { InlineIcon } from '@/components/ui/inline-icon'

const features = [
  { icon: IconMessageCircle, title: 'Adaptive follow-ups', text: 'Questions respond to each answer, so practice feels like a real conversation.' },
  { icon: IconChartBar, title: 'Clear scorecards', text: 'Turn every session into practical feedback on clarity, structure, and depth.' },
  { icon: IconTargetArrow, title: 'Role-specific prep', text: 'Build focused practice for software, AI, product, data, and more.' },
  { icon: IconBrain, title: 'Job description prep', text: 'Shape a question set around the skills a role actually calls for.' },
]

const deliverables = [
  'Responsive product landing page and navigation',
  'Interview demo, feature stories, and workflow sections',
  'Testimonials, pricing, FAQ, and conversion sections',
  'Login, signup, and password recovery screens',
  'Reusable buttons, inputs, icons, and theme tokens',
]

const inquiry = 'mailto:xparyan68@gmail.com?subject=Ace%20template%20inquiry'

export default function SalePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-page text-copy">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <Link href="/" aria-label="Back to Ace home" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
          <Logo />
        </Link>
        <Link href="/" className="font-mono text-sm text-body underline-offset-4 transition-colors hover:text-copy hover:underline">Back to site</Link>
      </nav>

      <section className="px-4 pb-16 pt-7 sm:px-8 sm:pb-24 sm:pt-12">
        <div className="relative isolate mx-auto grid min-h-[540px] w-full max-w-7xl overflow-hidden rounded-[30px] bg-neutral-950 shadow-[0_24px_64px_-34px_var(--effect-black-55)] lg:grid-cols-[1.04fr_0.96fr]">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_48%] lg:left-[34%]" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/35 lg:to-neutral-950/10" />
          <div className="flex flex-col items-start justify-center p-7 sm:p-12 lg:p-16">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white/85 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" /> Ace template · available now
            </p>
            <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.06] tracking-[-0.045em] text-white sm:text-6xl">
              A sharper way to show up for your next interview.
            </h1>
            <p className="mt-6 max-w-xl font-mono text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              A complete AI interview practice experience, ready for your brand. Give candidates realistic rehearsal, useful feedback, and a product story that feels ready to ship.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={inquiry} className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border-[3px] border-[color:color-mix(in_oklab,var(--brand-primary)_78%,black)] bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-primary)_86%,white),var(--brand-primary))] px-5 font-mono text-sm font-semibold text-white shadow-[inset_0_0_0_1.5px_var(--effect-white-24)] transition-[filter,transform] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
                <IconMail className="h-4 w-4" /> Ask about the template <IconArrowRight className="h-4 w-4" />
              </a>
              <span className="font-mono text-sm text-white/70">Landing page · $300</span>
            </div>
          </div>
          <div className="relative flex min-h-60 items-end p-6 sm:p-9 lg:items-center lg:justify-center">
            <div className="w-full max-w-[370px] rounded-[22px] border border-white/80 bg-surface/95 p-5 shadow-[0_24px_60px_-22px_var(--effect-black-30)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <InlineIcon color="var(--brand-primary)" className="mx-0 h-9 w-9 rounded-xl"><IconMicrophone /></InlineIcon>
                  <div><p className="font-display text-base font-semibold">Practice session</p><p className="font-mono text-xs text-subtle">Senior AI Engineer</p></div>
                </div>
                <span className="rounded-full bg-success/15 px-2.5 py-1 font-mono text-[11px] font-medium text-success">Ready</span>
              </div>
              <p className="mt-6 font-mono text-xs text-subtle">QUESTION 04 · SYSTEM DESIGN</p>
              <p className="mt-2 font-display text-xl font-medium leading-snug tracking-tight">How would you evaluate a new feature?</p>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-surface-soft p-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white"><IconMicrophone className="h-4 w-4" /></span>
                <div className="flex flex-1 items-center gap-1" aria-hidden="true">{[3, 5, 4, 7, 5, 9, 4, 6, 8, 4, 7, 5, 9, 4, 6, 3, 7, 5, 8, 4].map((height, index) => <span key={index} className="flex-1 rounded-full bg-brand/65" style={{ height: `${height * 2}px` }} />)}</div>
                <span className="font-mono text-xs tabular-nums text-subtle">0:58</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-divider pt-4 font-mono text-xs text-subtle"><span>Clarity</span><span className="font-semibold text-copy">On track</span></div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-9 max-w-3xl sm:mb-12">
            <p className="mb-3 font-mono text-sm font-medium text-brand-logo">Inside the experience</p>
            <h2 id="features-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Everything for practice that feels <span className="text-brand">purposeful.</span></h2>
          </div>
          <div className="grid auto-rows-[minmax(190px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="relative isolate flex min-h-[310px] flex-col justify-end overflow-hidden rounded-[26px] bg-neutral-950 p-6 text-white md:col-span-2 md:row-span-2 sm:p-8">
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_64%]" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
              <InlineIcon color="var(--brand-primary)" className="mx-0 mb-5 h-10 w-10 rounded-xl"><IconMicrophone /></InlineIcon>
              <h3 className="max-w-md font-display text-2xl font-medium tracking-tight sm:text-3xl">A realistic interview, built around the role.</h3>
              <p className="mt-3 max-w-md font-mono text-sm leading-6 text-white/75">Choose a role and difficulty, answer one question at a time, and get thoughtful follow-ups that keep the conversation moving.</p>
            </article>
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[26px] border border-black/8 bg-surface/75 p-5 sm:p-6">
                <InlineIcon color="var(--brand-primary)" className="mx-0 mb-5 h-9 w-9 rounded-xl"><Icon /></InlineIcon>
                <h3 className="font-display text-xl font-medium tracking-[-0.025em]">{title}</h3>
                <p className="mt-2 font-mono text-sm leading-6 text-body">{text}</p>
              </article>
            ))}
            <article className="flex flex-col justify-between rounded-[26px] bg-brand p-6 text-white md:col-span-2 lg:col-span-2 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div><p className="font-mono text-sm text-white/75">One clear next step</p><h3 className="mt-2 font-display text-2xl font-medium tracking-tight">Know what to work on next.</h3></div>
                <InlineIcon color="var(--accent-violet)" className="mx-0 h-10 w-10 rounded-xl"><IconSparkles /></InlineIcon>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/20 bg-white/10 p-3 font-mono text-xs sm:p-4">
                {[['Clarity', '9.0'], ['Depth', '8.2'], ['Structure', '7.9']].map(([label, score]) => <div key={label}><p className="text-white/70">{label}</p><p className="mt-1 font-display text-2xl font-semibold">{score}</p></div>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-surface/35 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-3 font-mono text-sm font-medium text-brand-logo">A solid starting point</p>
            <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">A polished product story, ready to become <span className="text-brand">yours.</span></h2>
            <p className="mt-5 max-w-xl font-mono text-base leading-7 text-body">Customize the theme and content with a clear system of reusable components, then make the experience your own.</p>
          </div>
          <div className="rounded-[26px] border border-brand/15 bg-surface p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3 border-b border-divider pb-5"><InlineIcon color="var(--accent-violet)" className="mx-0 h-9 w-9 rounded-xl"><IconFileText /></InlineIcon><div><h3 className="font-display text-xl font-medium">Included in the template</h3><p className="mt-1 font-mono text-sm text-subtle">The pieces for a complete launch story</p></div></div>
            <ul className="mt-5 space-y-4">{deliverables.map((item) => <li key={item} className="flex items-start gap-3 font-mono text-sm leading-6 text-body"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><IconCheck className="h-3.5 w-3.5" stroke={2.5} /></span>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="relative isolate mx-auto flex min-h-[300px] w-full max-w-7xl flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-950 p-6 shadow-[0_24px_60px_-32px_var(--effect-black-55)] sm:p-10 lg:min-h-[340px] lg:flex-row lg:items-end lg:p-12">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_57%]" style={{ backgroundImage: "url('/beautiful-landscape.webp')" }} />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-950/35" />
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-medium text-white/75">Straightforward pricing</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">Start with the landing page for $300.</h2>
            <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-white/75">Add login, signup, or password recovery for $30 each. Get all three supporting pages with the landing page for $390.</p>
          </div>
          <a href={inquiry} className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/70 bg-surface px-5 py-3 font-mono text-sm font-semibold text-brand-deep shadow-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus lg:mt-0">
            <IconMail className="h-4 w-4" /> Start a conversation <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
