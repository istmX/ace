'use client'

import { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import Link from 'next/link'
import { IconBrandGithubFilled } from '@tabler/icons-react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type AuthPageProps = {
  mode: 'login' | 'signup'
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-4 w-4">
      <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11.1c-.5 2.6-2 4.9-4.3 6.4l7 5.4c4.1-3.8 5.8-9.4 5.8-15.5Z" />
      <path fill="#34A853" d="M24 44c5.6 0 10.3-1.8 13.8-4.9l-7-5.4c-1.9 1.3-4.3 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-7.2 5.5C9 39.6 16 44 24 44Z" />
      <path fill="#FBBC05" d="M12.8 27.5a12.5 12.5 0 0 1 0-7.9L5.6 14c-3.1 6.2-3.1 13.6 0 19.8Z" />
      <path fill="#EA4335" d="M24 9.4c3.1 0 5.9 1.1 8.1 3.2l6.1-6.1C34.5 2.9 29.7 1 24 1 16 1 9 5.4 5.6 14l7.2 5.6C14.4 12.8 18.8 9.4 24 9.4Z" />
    </svg>
  )
}

export function AuthPage({ mode }: AuthPageProps) {
  const isLogin = mode === 'login'
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [googleStatus, setGoogleStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [githubStatus, setGithubStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function showSuccess(setStatus: Dispatch<SetStateAction<'idle' | 'loading' | 'success'>>) {
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 1500)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    showSuccess(setFormStatus)
  }

  return (
    <main className="grid bg-neutral-300 font-mono text-neutral-900 lg:min-h-screen lg:grid-cols-2">
      <section className="flex flex-col px-6 py-4 sm:px-10 sm:py-5 lg:min-h-screen lg:px-14 lg:py-12">
        <Link href="/" aria-label="Ace home" className="w-fit rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]">
          <Logo />
        </Link>
        <div className="hidden max-w-xl py-12 lg:my-auto lg:block lg:py-20">
          <h1 className="max-w-lg font-display text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {isLogin ? 'Welcome back to Ace.' : 'Get ready to ace your next interview.'}
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-neutral-700 sm:text-lg">
            {isLogin
              ? 'Pick up your interview preparation where you left off.'
              : 'Build confidence, practice your answers, and take the next step in your career.'}
          </p>
        </div>
        <p className="hidden text-sm text-neutral-600 lg:block">
          Practice with purpose. Show up with confidence.
        </p>
      </section>

      <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:min-h-screen lg:border-l lg:border-neutral-400 lg:px-14 lg:py-14">
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-medium tracking-tight">
              {isLogin ? 'Sign in' : 'Create your account'}
            </h2>
            <p className="mt-2 text-sm text-neutral-700">
              {isLogin ? 'Enter your details to continue.' : 'Start preparing for your next interview.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button type="button" variant="secondary" size="sm" width="full" className="gap-2 font-mono" loading={googleStatus === 'loading'} feedback={googleStatus === 'success' ? 'success' : null} feedbackText="Done" onClick={() => showSuccess(setGoogleStatus)}>
              <GoogleMark />
              Google
            </Button>
            <Button type="button" variant="secondary" size="sm" width="full" className="gap-2 font-mono" loading={githubStatus === 'loading'} feedback={githubStatus === 'success' ? 'success' : null} feedbackText="Done" onClick={() => showSuccess(setGithubStatus)}>
              <IconBrandGithubFilled className="h-4 w-4" />
              GitHub
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
            {!isLogin && (
              <Input label="Name" type="text" autoComplete="name" placeholder="Your name" tone="light" className="font-mono" required />
            )}
            <Input label="Email" type="email" autoComplete="email" placeholder="you@example.com" tone="light" className="font-mono" required />
            <Input
              label="Password"
              type="password"
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              placeholder="Enter your password"
              tone="light"
              className="font-mono"
              required
              labelRight={isLogin ? (
                <Link
                  href="/forgot-password"
                  className="rounded-sm text-xs text-neutral-700 underline-offset-4 hover:text-neutral-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407cf9]"
                >
                  Forgot password?
                </Link>
              ) : undefined}
            />
            <Button type="submit" variant="primary" size="md" width="full" color="#407cf9" className="mt-1 font-mono" loading={formStatus === 'loading'} feedback={formStatus === 'success' ? 'success' : null} feedbackText="Done">
              {isLogin ? 'Sign in' : 'Create account'}
            </Button>
          </form>

          <p className="mt-7 text-center text-sm text-neutral-700">
            {isLogin ? 'New to Ace? ' : 'Already have an account? '}
            <Link href={isLogin ? '/signup' : '/login'} className="font-medium text-neutral-950 underline-offset-4 hover:underline">
              {isLogin ? 'Create an account' : 'Sign in'}
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
