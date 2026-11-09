'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '../logo'
import { Button } from './button'

const NAVBAR_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
]

const MotionLink = motion.create(Link)

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const router = useRouter()

  return (
    <nav
      style={{ '--brand': '#407cf9' } as React.CSSProperties}
      className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 font-mono sm:px-8"
    >
      <div className="text-xl font-bold">
        <Logo />
      </div>

      <div
        className="hidden items-center gap-1 sm:flex sm:space-x-1"
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

      <div className="flex items-center justify-self-end gap-2 sm:gap-3">
        <Button variant="primary" size="sm" onClick={() => router.push('/login')}>
          Sign In
        </Button>
        <Button variant="secondary" size="sm" onClick={() => router.push('/signup')}>
          Sign Up
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
