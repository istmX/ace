'use client'

import * as React from 'react'
import Link from 'next/link'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '../logo'
import { Button } from './button'

const NAVBAR_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
]

const MotionLink = motion.create(Link)

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <nav
      style={{ '--brand': '#407cf9' } as React.CSSProperties}
      className="relative mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-4 font-mono sm:gap-4 sm:px-8"
    >
      <div className="text-xl font-bold">
        <Logo />
      </div>

      <div
        className="hidden items-center justify-center gap-1 md:flex"
        onMouseLeave={() => setHoveredItem(null)}
        onBlur={() => setHoveredItem(null)}
      >
        {NAVBAR_ITEMS.map((item) => {
          const active = hoveredItem === item.href
          return (
            <MotionLink
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.href)}
              onFocus={() => setHoveredItem(item.href)}
              className="relative rounded-xl px-3 py-2 text-foreground outline-none"
            >
              {active && (
                <motion.span
                  layoutId="navbar-pill"
                  className="pointer-events-none absolute inset-0 z-0 rounded-full bg-radial-[at_50%_0%] from-[color-mix(in_oklab,var(--brand)_86%,white)] to-(--brand) outline outline-sky-600 outline-offset-2"
                  transition={{
                    layout: { type: 'spring', stiffness: 400, damping: 30 },
                  }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-150 ${
                  active ? 'text-white' : ''
                }`}
              >
                {item.label}
              </span>
            </MotionLink>
          )
        })}
      </div>

      <div className="flex items-center justify-self-end gap-1.5 sm:gap-2">
        <motion.button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/60 text-neutral-900 outline-none transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-[#407cf9] md:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
        </motion.button>
        <Button variant="primary" size="sm" onClick={() => router.push('/login')}>
          Sign In
        </Button>
        <Button className="hidden md:inline-flex" variant="secondary" size="sm" onClick={() => router.push('/signup')}>
          Sign Up
        </Button>
      </div>

      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.18 }} className="absolute left-4 right-4 top-[calc(100%-4px)] z-50 grid origin-top gap-1 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden">
          {NAVBAR_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-mono text-sm text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-[#407cf9]"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false)
              router.push('/signup')
            }}
            className="rounded-xl px-4 py-3 text-left font-mono text-sm font-medium text-[#2563EB] transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-[#407cf9]"
          >
            Create an account
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
