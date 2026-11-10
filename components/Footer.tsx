import Link from 'next/link'
import { Logo } from '@/components/logo'

const groups = [
  {
    title: 'Practice',
    links: [
      { label: 'Interview preview', href: '#home' },
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Your account',
    links: [
      { label: 'Create an account', href: '/signup' },
      { label: 'Sign in', href: '/login' },
      { label: 'Frequently asked questions', href: '#faq-heading' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="overflow-hidden bg-page px-4 pb-5 text-copy sm:px-8">
      <div className="mx-auto w-full max-w-6xl border-t border-neutral-500/25">
        <div className="grid grid-cols-1 gap-8 py-9 sm:grid-cols-3 sm:gap-6 sm:py-10">
          <div className="flex flex-col items-start text-left">
            <Logo />
            <p className="mt-4 max-w-xs font-mono text-sm leading-6 text-body">
              A little practice goes a long way. Practice with purpose and show up with confidence.
            </p>
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="text-left">
              <h2 className="mb-3 font-mono text-xs font-medium text-subtle">{group.title}</h2>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-mono text-sm text-body transition-colors hover:text-brand-logo focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div aria-hidden="true" className="overflow-hidden border-b border-neutral-500/15 text-center">
          <p className="select-none whitespace-nowrap font-display text-8xl font-medium leading-[0.72] tracking-[-0.09em] text-copy sm:text-9xl lg:text-[19rem]">
            ace<span className="text-brand">.</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-4 font-mono text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© Ace</span>
          <span>Practice for what comes next.</span>
        </div>
      </div>
    </footer>
  )
}
