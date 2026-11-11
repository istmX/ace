'use client'

import Link from 'next/link'
import { useState, type CSSProperties, type ReactNode } from 'react'
import { IconTicket, IconX } from '@tabler/icons-react'

type SaleBadgeVariant = 'ticket' | 'pill' | 'dock' | 'card'

type SaleBadgeProps = {
  variant?: SaleBadgeVariant
  href?: string
  ariaLabel?: string
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus motion-reduce:transition-none'

const softShadow =
  'shadow-[0_16px_38px_-24px_var(--effect-black-30)] hover:shadow-[0_20px_42px_-22px_var(--effect-black-35)]'

/* Everything lives in the bottom right corner, clear of the iOS home bar. */
function Anchor({ children }: { children: ReactNode }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      {children}
    </div>
  )
}

/* Punches half-circle notches out of the top and bottom corners of one side. */
function notchMask(side: 'left' | 'right'): CSSProperties {
  const x = side === 'right' ? '100%' : '0'
  const mask = [
    `radial-gradient(circle 7px at ${x} 0, transparent 6.5px, #000 7px)`,
    `radial-gradient(circle 7px at ${x} 100%, transparent 6.5px, #000 7px)`,
  ].join(',')

  return {
    maskImage: mask,
    WebkitMaskImage: mask,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  }
}

/* 1. TICKET: a real ticket stub. Info on the left, price on a torn-off stub. */
function TicketBadge({ href, ariaLabel }: Required<Omit<SaleBadgeProps, 'variant'>>) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-stretch transition-transform hover:-translate-y-0.5 [filter:drop-shadow(0_14px_14px_var(--effect-black-30))] ${focusRing}`}
    >
      <span
        style={notchMask('right')}
        className="flex items-center gap-3 rounded-l-2xl bg-surface py-3 pl-3 pr-5 text-copy"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] border border-white/25 bg-brand text-white shadow-[inset_0_1px_0_var(--effect-white-24)] sm:h-12 sm:w-12">
          <IconTicket aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" stroke={1.9} />
        </span>
        <span className="flex min-w-0 flex-col gap-1">
          <span className="font-mono text-[10px] font-medium text-subtle sm:text-[11px]">Ace template</span>
          <span className="whitespace-nowrap font-display text-sm font-semibold leading-none text-brand-deep sm:text-base">
            Landing page
          </span>
        </span>
      </span>

      <span
        style={notchMask('left')}
        className="flex min-w-[76px] flex-col items-center justify-center gap-1 rounded-r-2xl border-l-2 border-dashed border-white/50 bg-brand px-3 font-display font-semibold leading-none text-white transition-colors group-hover:bg-brand-deep sm:min-w-[88px]"
      >
        <span className="text-lg tracking-[-0.045em] sm:text-xl">$300</span>
        <span className="font-mono text-[9px] font-medium tracking-normal text-white/80 sm:text-[10px]">
          source code
        </span>
      </span>
    </Link>
  )
}

/* 2. PILL: the quietest option. One rounded capsule, one gentle ping on load. */
function PillBadge({ href, ariaLabel }: Required<Omit<SaleBadgeProps, 'variant'>>) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-3 rounded-full border border-brand/20 bg-surface py-1.5 pl-1.5 pr-5 text-left text-copy transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand/35 ${softShadow} ${focusRing}`}
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[inset_0_1px_0_var(--effect-white-24)]">
        <span
          aria-hidden="true"
          style={{ animationIterationCount: 3 }}
          className="absolute inset-0 animate-ping rounded-full bg-brand/30 motion-reduce:hidden"
        />
        <IconTicket aria-hidden="true" className="relative h-6 w-6" stroke={1.9} />
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="font-mono text-[10px] font-medium text-subtle">Landing page template</span>
        <span className="flex items-baseline gap-1.5 font-display font-semibold leading-none text-brand-deep">
          <span className="text-base tracking-[-0.045em]">$300</span>
          <span className="font-mono text-[10px] font-medium tracking-normal text-subtle">source code</span>
        </span>
      </span>
    </Link>
  )
}

/* 3. DOCK: a small brand circle with the price tag. Expands on hover or keyboard focus. */
function DockBadge({ href, ariaLabel }: Required<Omit<SaleBadgeProps, 'variant'>>) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group relative inline-flex items-center rounded-full bg-brand p-1.5 text-white transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-brand-deep ${softShadow} ${focusRing}`}
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
        <IconTicket aria-hidden="true" className="h-7 w-7" stroke={1.9} />
        <span className="absolute -left-3 -top-3 rounded-full border border-brand/20 bg-surface px-2 py-1 font-display text-[11px] font-semibold leading-none tracking-[-0.045em] text-brand shadow-[0_6px_14px_-8px_var(--effect-black-30)]">
          $300
        </span>
      </span>
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] motion-reduce:transition-none">
        <span className="overflow-hidden">
          <span className="flex flex-col gap-1 whitespace-nowrap pl-3 pr-4">
            <span className="font-display text-sm font-semibold leading-none">Landing page</span>
            <span className="font-mono text-[10px] font-medium text-white/80">Ace template, source code</span>
          </span>
        </span>
      </span>
    </Link>
  )
}

/* 4. CARD: the most prominent option. Price, a clear action, and a dismiss button. */
function CardBadge({ href, ariaLabel }: Required<Omit<SaleBadgeProps, 'variant'>>) {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div
      className={`relative w-[272px] max-w-[calc(100vw-2rem)] rounded-[22px] border border-brand/20 bg-surface p-4 text-left text-copy shadow-[0_16px_38px_-24px_var(--effect-black-30)]`}
    >
      <button
        type="button"
        aria-label="Dismiss sale badge"
        onClick={() => setOpen(false)}
        className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-subtle transition-colors hover:bg-brand/10 hover:text-brand-deep ${focusRing}`}
      >
        <IconX aria-hidden="true" className="h-4 w-4" stroke={2} />
      </button>

      <span className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-white/25 bg-brand text-white shadow-[inset_0_1px_0_var(--effect-white-24)]">
        <IconTicket aria-hidden="true" className="h-6 w-6" stroke={1.9} />
      </span>

      <p className="mt-3 font-mono text-[11px] font-medium text-subtle">Ace template</p>
      <p className="mt-1 font-display text-xl font-semibold leading-none text-brand-deep">Landing page</p>

      <div className="mt-4 flex items-center gap-3 border-t border-dashed border-brand/25 pt-4">
        <span className="flex flex-col gap-1 font-display font-semibold leading-none text-brand">
          <span className="text-2xl tracking-[-0.045em]">$300</span>
          <span className="font-mono text-[10px] font-medium tracking-normal text-brand-deep">source code</span>
        </span>
        <Link
          href={href}
          aria-label={ariaLabel}
          className={`ml-auto inline-flex h-10 items-center rounded-xl bg-brand px-4 font-display text-sm font-semibold text-white shadow-[inset_0_1px_0_var(--effect-white-24)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-deep ${focusRing}`}
        >
          Get template
        </Link>
      </div>
    </div>
  )
}

export function SaleBadge({
  variant = 'ticket',
  href = '/sale',
  ariaLabel = 'Ace landing page template, $300. View sale details.',
}: SaleBadgeProps) {
  const props = { href, ariaLabel }

  return (
    <Anchor>
      {variant === 'ticket' && <TicketBadge {...props} />}
      {variant === 'pill' && <PillBadge {...props} />}
      {variant === 'dock' && <DockBadge {...props} />}
      {variant === 'card' && <CardBadge {...props} />}
    </Anchor>
  )
}