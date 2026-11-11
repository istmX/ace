import Link from 'next/link'
import { IconTicket } from '@tabler/icons-react'

type SaleBadgeProps = {
  href?: string
  ariaLabel?: string
  size?: 'compact' | 'large'
}

export function SaleBadge({ href = '/sale', ariaLabel = 'Ace landing page template, $300. View sale details.', size = 'compact' }: SaleBadgeProps) {
  const large = size === 'large'

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex max-w-full items-center border border-brand/20 bg-surface text-left text-copy shadow-[0_16px_38px_-24px_var(--effect-black-30)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_20px_42px_-22px_var(--effect-black-35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus motion-reduce:transition-none ${large ? 'gap-4 rounded-[22px] p-4 sm:gap-5 sm:p-5' : 'gap-2.5 rounded-2xl p-2.5 sm:gap-3 sm:p-3'}`}
    >
      <span className={`flex shrink-0 items-center justify-center rounded-[15px] border border-white/25 bg-brand text-white shadow-[inset_0_1px_0_var(--effect-white-24)] ${large ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-10 w-10 sm:h-11 sm:w-11'}`}>
        <IconTicket aria-hidden="true" className={large ? 'h-8 w-8' : 'h-6 w-6'} stroke={1.9} />
      </span>

      <span className={`flex min-w-0 flex-col ${large ? 'gap-1.5' : 'gap-1'}`}>
        <span className={`font-mono font-medium uppercase tracking-[0.12em] text-subtle ${large ? 'text-[11px] sm:text-xs' : 'text-[9px] sm:text-[10px]'}`}>
          Ace template
        </span>
        <span className={`whitespace-nowrap font-display font-semibold leading-none text-brand-deep ${large ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'}`}>
          Landing page
        </span>
      </span>

      <span aria-hidden="true" className={`mx-0.5 block shrink-0 ${large ? 'h-12 w-3 sm:mx-1 sm:h-14' : 'h-8 w-[9px] sm:h-9'}`}>
        <svg viewBox="0 0 12 48" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 5V43" stroke="var(--brand-primary)" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="1 4" strokeLinecap="round" />
          <circle cx="6" cy="4" r="3.25" fill="var(--brand-primary)" />
          <circle cx="6" cy="24" r="3.25" fill="var(--brand-primary)" fillOpacity=".72" />
          <circle cx="6" cy="44" r="3.25" fill="var(--brand-primary)" />
        </svg>
      </span>

      <span className={`flex shrink-0 flex-col items-center justify-center rounded-xl bg-brand/8 font-display font-semibold leading-none tracking-[-0.045em] text-brand ${large ? 'min-w-[96px] gap-1.5 px-3 py-3 sm:min-w-[112px] sm:px-4 sm:py-3.5' : 'min-w-[66px] gap-1 px-2 py-2 sm:min-w-[74px] sm:px-2.5'}`}>
        <span className={large ? 'text-2xl sm:text-[28px]' : 'text-base sm:text-lg'}>$300</span>
        <span className="font-mono text-[9px] font-medium tracking-normal text-brand-deep sm:text-[10px]">source code</span>
      </span>
    </Link>
  )
}
