'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ForgotPasswordPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <main className="grid min-h-screen bg-neutral-300 font-mono text-neutral-900 lg:grid-cols-2">
      <section className="flex min-h-[310px] flex-col px-7 py-7 sm:px-10 sm:py-9 lg:min-h-screen lg:px-14 lg:py-12">
        <Link href="/" aria-label="Ace home" className="w-fit rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]">
          <Logo />
        </Link>
        <div className="my-auto max-w-xl py-12 lg:py-20">
          <h1 className="max-w-lg font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            A fresh start is one step away.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-neutral-700 sm:text-lg">
            We’ll help you get back to practicing with confidence.
          </p>
        </div>
        <p className="hidden text-sm text-neutral-600 lg:block">
          Practice with purpose. Show up with confidence.
        </p>
      </section>

      <section className="flex items-center justify-center border-t border-neutral-400 px-6 py-14 sm:px-10 lg:min-h-screen lg:border-l lg:border-t-0 lg:px-14">
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-medium tracking-tight">Forgot your password?</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Enter your email address and we’ll help you reset it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              tone="light"
              className="font-mono"
              required
            />
            <Button type="submit" variant="primary" size="md" width="full" color="#407cf9" className="font-mono" loading={status === 'loading'} feedback={status === 'success' ? 'success' : null} feedbackText="Done">
              Send reset link
            </Button>
          </form>

          <p className="mt-7 text-center text-sm text-neutral-700">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-neutral-950 underline-offset-4 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
