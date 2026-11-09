'use client'

import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import {
  IconBulb,
  IconCamera,
  IconCameraOff,
  IconMicrophone,
  IconMicrophoneOff,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
  IconVolume2,
  IconX,
} from '@tabler/icons-react'
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'motion/react'
import { LogoMark } from '@/components/logo'

const glass =
  'border border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.25)]'

const visualizerBars = Array.from({ length: 28 }, (_, index) => {
  const base = 0.38 + ((Math.sin(index * 1.71) + 1) / 2) * 0.55
  return { base, delay: (index % 7) * 0.055, duration: 0.7 + (index % 6) * 0.12 }
})

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
}

export type InterviewDemoCardProps = {
  question: string
  /** Current question number, starting at 1. */
  questionIndex: number
  totalQuestions: number
  isRecording: boolean
  /** Elapsed recording time in seconds. */
  elapsed: number
  score?: number
  strengths?: string[]
  tip?: string
  role?: string
  cameraOn?: boolean
  micOn?: boolean
  isAceSpeaking?: boolean
  videoSrc?: string
  onCameraChange?: (cameraOn: boolean) => void
  onMicChange?: (micOn: boolean) => void
  onFinish?: () => void
}

function formatTime(seconds: number) {
  const safeSeconds = Math.max(0, Math.floor(seconds))
  const minutes = Math.floor(safeSeconds / 60).toString().padStart(2, '0')
  const remainder = (safeSeconds % 60).toString().padStart(2, '0')
  return `${minutes}:${remainder}`
}

function TopBar({
  questionIndex,
  totalQuestions,
  isPaused,
  onTogglePause,
  reducedMotion,
}: Pick<InterviewDemoCardProps, 'questionIndex' | 'totalQuestions'> & {
  isPaused: boolean
  onTogglePause: () => void
  reducedMotion: boolean
}) {
  const current = Math.min(Math.max(1, questionIndex), Math.max(1, totalQuestions))
  const total = Math.max(1, totalQuestions)

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { delay: 0.12, duration: 0.3 }}
      className={`absolute left-3 right-3 top-3 z-20 flex items-center justify-between gap-2 rounded-full px-3 py-2 sm:left-5 sm:right-5 sm:top-5 sm:px-4 ${isPaused ? 'border border-black/10 bg-white/85 text-neutral-900 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl' : glass}`}
    >
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
        <LogoMark className="h-8 w-8 shrink-0 text-[#2563EB] sm:h-9 sm:w-9" />
        <div className="min-w-0">
          <p className={`truncate font-mono text-xs font-semibold sm:text-sm ${isPaused ? 'text-neutral-900' : 'text-white'}`}>Ace Interviewer</p>
          <p className={`truncate font-mono text-[10px] sm:text-xs ${isPaused ? 'text-neutral-600' : 'text-white/75'}`}>Senior AI Engineer</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
        <span className={`font-mono text-[11px] font-medium tabular-nums sm:text-xs ${isPaused ? 'text-neutral-800' : 'text-white'}`}>
          Q{current} / {total}
        </span>
        <div className="hidden items-center gap-[3px] sm:flex" aria-hidden="true">
          {Array.from({ length: total }, (_, index) => {
            const segment = index + 1
            const completed = segment < current
            const active = segment === current
            return (
              <motion.span
                key={segment}
                className={`h-[3px] w-2.5 rounded-full sm:w-3 ${isPaused ? (completed ? 'bg-neutral-500' : active ? 'bg-[#407cf9]' : 'bg-neutral-300') : (completed ? 'bg-white' : active ? 'bg-[#8bb8ff]' : 'bg-white/30')}`}
                animate={active && !reducedMotion ? { opacity: [0.55, 1, 0.55] } : { opacity: 1 }}
                transition={active && !reducedMotion ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } : undefined}
              />
            )
          })}
        </div>
        <motion.button
          type="button"
          aria-label={isPaused ? 'Resume interview preview' : 'Pause interview preview'}
          title={isPaused ? 'Resume preview' : 'Pause preview'}
          onClick={onTogglePause}
          whileHover={reducedMotion ? undefined : { scale: 1.06 }}
          whileTap={reducedMotion ? undefined : { scale: 0.94 }}
          className={`ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#407cf9] sm:ml-2 ${isPaused ? 'border-[#407cf9] bg-[#407cf9] text-white hover:bg-blue-600' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'}`}
        >
          {isPaused ? <IconPlayerPlayFilled className="h-3.5 w-3.5" /> : <IconPlayerPauseFilled className="h-3.5 w-3.5" />}
        </motion.button>
      </div>
    </motion.div>
  )
}

function RecordingPill({ elapsed, isRecording, isPaused, reducedMotion }: Pick<InterviewDemoCardProps, 'elapsed' | 'isRecording'> & { isPaused: boolean; reducedMotion: boolean }) {
  if (!isRecording) return null

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { delay: 0.2, duration: 0.28 }}
      role="status"
      aria-live="polite"
      className={`absolute left-3 top-[68px] z-20 inline-flex items-center gap-2 rounded-full px-3 py-2 font-mono text-xs sm:left-5 sm:top-[78px] sm:gap-2.5 sm:px-3.5 ${isPaused ? 'border border-black/10 bg-white/85 text-neutral-900 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl' : `text-white ${glass}`}`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        {!reducedMotion && !isPaused && (
          <motion.span
            className="absolute inset-0 rounded-full bg-red-400"
            animate={{ scale: [1, 2.8], opacity: [0.65, 0] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <span className={`relative m-auto h-2 w-2 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.5)] ${isPaused ? 'bg-neutral-400' : 'bg-red-400'}`} />
      </span>
        <span className="font-medium">{isPaused ? 'Paused' : 'Recording'}</span>
      <span className={`tabular-nums ${isPaused ? 'text-neutral-700' : 'text-white/90'}`}>{formatTime(elapsed)}</span>
      <span className={`hidden border-l pl-2.5 sm:inline ${isPaused ? 'border-neutral-300 text-neutral-600' : 'border-white/20 text-white/65'}`}>min. 1:00 suggested</span>
    </motion.div>
  )
}

function QuestionCard({
  question,
  isCollapsed,
  isAceSpeaking,
  isPaused,
  reducedMotion,
}: {
  question: string
  isCollapsed: boolean
  isAceSpeaking: boolean
  isPaused: boolean
  reducedMotion: boolean
}) {
  const words = question.trim().split(/\s+/)

  return (
    <motion.div
      layout
      transition={{ layout: reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 28 } }}
      aria-live="polite"
      aria-atomic="true"
      className={`absolute bottom-[76px] left-3 right-3 z-20 rounded-2xl p-3.5 sm:bottom-[106px] sm:left-5 sm:right-auto sm:w-[58%] sm:max-w-[620px] sm:p-4 ${isPaused ? 'border border-black/10 bg-white/85 text-neutral-900 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl' : `text-white ${glass}`}`}
    >
      <div className="mb-1.5 flex items-center gap-2">
        <motion.span
          animate={isAceSpeaking ? { scale: [1, 1.12, 1] } : { scale: 1 }}
          transition={isAceSpeaking && !reducedMotion ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' } : undefined}
          className={`flex h-5 w-5 items-center justify-center ${isPaused ? 'text-[#407cf9]' : 'text-white/90'}`}
          aria-hidden="true"
        >
          <IconVolume2 className="h-4 w-4" />
        </motion.span>
        <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${isPaused ? 'text-neutral-600' : 'text-white/75'}`}>Ace asks</span>
      </div>

      <p className="sr-only">{question}</p>
      <motion.p
        key={question}
        layout
        aria-hidden="true"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}
        initial={isAceSpeaking && !reducedMotion ? 'hidden' : false}
        animate="visible"
        className={`font-display text-base font-medium leading-snug sm:text-xl lg:text-2xl ${isPaused ? 'text-neutral-900' : 'text-white'} ${isCollapsed ? 'line-clamp-1' : 'line-clamp-2'}`}
      >
        {words.map((word, index) => (
          <motion.span key={`${word}-${index}`} variants={wordVariants} className="mr-[0.28em] inline-block">
            {word}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  )
}

function AudioVisualizer({ active, reducedMotion }: { active: boolean; reducedMotion: boolean }) {
  return (
    <div className="flex h-8 items-center justify-center gap-[2px]" aria-hidden="true">
      {visualizerBars.map(({ base, delay, duration }, index) => (
        <motion.span
          key={index}
          className={`w-[2px] rounded-full bg-gradient-to-t ${active ? 'from-[#407cf9] to-[#a9c8ff]' : 'from-neutral-400 to-neutral-300'}`}
          style={{ height: 24, scaleY: active && !reducedMotion ? base : 0.42 }}
          animate={active && !reducedMotion ? { scaleY: [0.25, base, 0.42, 0.9, 0.3] } : { scaleY: 0.42 }}
          transition={active && !reducedMotion ? { duration, delay, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}
        />
      ))}
    </div>
  )
}

function TooltipButton({
  label,
  pressed,
  paused,
  off,
  onClick,
  reducedMotion,
  children,
}: {
  label: string
  pressed: boolean
  paused: boolean
  off?: boolean
  onClick: () => void
  reducedMotion: boolean
  children: ReactNode
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      onClick={onClick}
      whileHover={reducedMotion ? undefined : { scale: 1.05 }}
      whileTap={reducedMotion ? undefined : { scale: 0.95 }}
      className={`group relative flex h-11 w-11 items-center justify-center rounded-full border outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#407cf9] focus-visible:ring-offset-2 ${paused ? 'border-black/10 bg-white/80 text-neutral-900 focus-visible:ring-offset-neutral-200' : 'border-white/20 text-white focus-visible:ring-offset-neutral-900'} ${off ? (paused ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-red-500/25 hover:bg-red-500/40') : (paused ? 'hover:bg-white' : 'bg-white/15 hover:bg-white/25')}`}
    >
      {children}
      <span role="tooltip" className={`pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[11px] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${paused ? 'border border-black/10 bg-white text-neutral-900 shadow-lg' : `text-white ${glass}`}`}>
        {label}
      </span>
    </motion.button>
  )
}

function ControlDock({
  cameraOn,
  micOn,
  isRecording,
  isPaused,
  reducedMotion,
  onCameraToggle,
  onMicToggle,
  onFinish,
}: {
  cameraOn: boolean
  micOn: boolean
  isRecording: boolean
  isPaused: boolean
  reducedMotion: boolean
  onCameraToggle: () => void
  onMicToggle: () => void
  onFinish: () => void
}) {
  return (
    <div className={`absolute bottom-3 left-1/2 z-30 flex w-[calc(100%-24px)] -translate-x-1/2 flex-row items-center justify-center gap-1.5 rounded-full p-2 sm:bottom-5 sm:w-auto sm:gap-3 sm:px-3 sm:py-2 ${isPaused ? 'border border-black/10 bg-white/90 shadow-[0_10px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl' : glass}`}>
      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
        <TooltipButton label={cameraOn ? 'Turn off camera' : 'Turn on camera'} pressed={cameraOn} paused={isPaused} off={!cameraOn} onClick={onCameraToggle} reducedMotion={reducedMotion}>
          {cameraOn ? <IconCamera className="h-[21px] w-[21px]" /> : <IconCameraOff className="h-[21px] w-[21px]" />}
        </TooltipButton>

        <div className="relative">
          {micOn && isRecording && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 rounded-full border border-blue-100/80"
              animate={reducedMotion ? { scale: 1, opacity: 0.35 } : { scale: [1, 1.18, 1], opacity: [0.25, 0.75, 0.25] }}
              transition={reducedMotion ? undefined : { duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <TooltipButton label={micOn ? 'Mute' : 'Unmute'} pressed={micOn} paused={isPaused} off={!micOn} onClick={onMicToggle} reducedMotion={reducedMotion}>
            {micOn ? <IconMicrophone className="h-[21px] w-[21px]" /> : <IconMicrophoneOff className="h-[21px] w-[21px]" />}
          </TooltipButton>
        </div>
      </div>

      <span className={`h-7 w-px ${isPaused ? 'bg-neutral-300' : 'bg-white/20'}`} aria-hidden="true" />

      <div className="flex items-center justify-center gap-1.5 sm:gap-3">
        <AudioVisualizer active={isRecording && !isPaused} reducedMotion={reducedMotion} />
        <span className={`h-7 w-px ${isPaused ? 'bg-neutral-300' : 'bg-white/20'}`} aria-hidden="true" />
        <div className="relative">
          {isRecording && !isPaused && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 rounded-full border border-red-300/80"
              animate={reducedMotion ? { scale: 1, opacity: 0.3 } : { scale: [1, 1.28], opacity: [0.65, 0] }}
              transition={reducedMotion ? undefined : { duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          <motion.button
            type="button"
            onClick={onFinish}
            disabled={!isRecording}
            aria-label="Finish answer"
            title="Finish answer"
            whileHover={isRecording && !reducedMotion ? { scale: 1.05 } : undefined}
            whileTap={isRecording && !reducedMotion ? { scale: 0.95 } : undefined}
            className="relative flex h-12 w-12 items-center justify-center rounded-full border border-red-600/30 bg-red-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_5px_18px_rgba(239,68,68,0.35)] outline-none transition-colors hover:bg-red-400 focus-visible:ring-2 focus-visible:ring-[#407cf9] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 sm:h-14 sm:w-14"
          >
            <IconPlayerStopFilled className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export type InterviewScoreCardProps = {
  score: number
  strengths: string[]
  tip: string
  role: string
  questionIndex: number
  reducedMotion: boolean
  onDismiss: () => void
}

const scoreCardChildren: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
}

function InterviewScoreCard({
  score,
  strengths,
  tip,
  role,
  questionIndex,
  reducedMotion,
  onDismiss,
}: InterviewScoreCardProps) {
  const gradientId = `score-ring-${useId().replace(/:/g, '')}`
  const safeScore = Math.min(100, Math.max(0, score))
  const [displayScore, setDisplayScore] = useState(reducedMotion ? safeScore : 0)

  useEffect(() => {
    if (reducedMotion) {
      setDisplayScore(safeScore)
      return
    }

    const controls = animate(0, safeScore, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate: (value) => setDisplayScore(Math.round(value)),
    })
    return () => controls.stop()
  }, [reducedMotion, safeScore])

  return (
    <motion.aside
      initial={reducedMotion ? false : 'hidden'}
      animate="visible"
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
      variants={{
        hidden: { opacity: 0, x: 32, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          transition: reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 190, damping: 24, staggerChildren: 0.06 },
        },
      }}
      role="status"
      aria-live="polite"
      aria-label={`Interview scorecard, ${safeScore} out of 100`}
      className="absolute left-3 right-3 top-1/2 z-40 mx-auto w-auto max-w-[360px] -translate-y-1/2 rounded-[24px] border border-[var(--score-card-border)] bg-[var(--score-card-bg)] p-3 text-[var(--score-card-primary)] shadow-[inset_0_1px_0_var(--score-card-highlight),var(--score-card-shadow)] backdrop-blur-2xl backdrop-saturate-150 sm:left-auto sm:right-5 sm:top-[47%] sm:w-[340px] sm:p-[22px]"
    >
      <motion.div variants={scoreCardChildren} className="mb-2 flex items-center justify-between gap-1.5 sm:mb-4 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--score-card-positive-bg)] px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.06em] text-[var(--score-card-strong)] sm:gap-2 sm:px-2.5 sm:py-1.5 sm:text-[11px] sm:tracking-[0.08em]">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Interview complete
        </span>
        <span className="rounded-full bg-[var(--score-card-track)] px-2 py-1 font-mono text-[10px] font-medium tabular-nums text-[var(--score-card-secondary)] sm:px-2.5 sm:py-1.5 sm:text-[11px]">
          Q{questionIndex}
        </span>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close interview scorecard"
          title="Close scorecard"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--score-card-divider)] bg-white/70 text-neutral-700 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407cf9]"
        >
          <IconX className="h-4 w-4" aria-hidden="true" />
        </button>
      </motion.div>

      <motion.div variants={scoreCardChildren} className="mb-2 flex items-center gap-2 sm:mb-4 sm:gap-4">
        <div className="relative h-20 w-20 shrink-0 sm:h-[120px] sm:w-[120px]" role="img" aria-label={`${safeScore} out of 100`}>
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--score-card-track)" strokeWidth="8" />
            <defs>
              <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="color-mix(in srgb, var(--accent), white 55%)" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="1 1"
              initial={reducedMotion ? { pathLength: safeScore / 100 } : { pathLength: 0 }}
              animate={{ pathLength: safeScore / 100 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 1.1, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
            <motion.span className="font-display text-[30px] font-semibold tabular-nums tracking-tight text-[var(--score-card-primary)] sm:text-[40px]">
              {displayScore}
            </motion.span>
            <span className="mt-0.5 font-mono text-[9px] tabular-nums text-[var(--score-card-muted)] sm:mt-1 sm:text-[11px]">/100</span>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-sm font-semibold leading-tight text-[var(--score-card-primary)] sm:text-lg">Your answer score</h3>
          <p className="mt-1 font-mono text-[11px] leading-snug text-[var(--score-card-secondary)] sm:mt-1.5 sm:text-[13px]">
            {role} · Question {questionIndex}
          </p>
          <span className="mt-1.5 inline-flex rounded-full bg-[var(--score-card-strong-bg)] px-2 py-0.5 font-mono text-[9px] font-semibold text-[var(--score-card-strong)] sm:mt-3 sm:px-2.5 sm:py-1 sm:text-[11px]">
            Strong answer
          </span>
        </div>
      </motion.div>

      <motion.ul
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="space-y-1.5 border-t border-[var(--score-card-divider)] pt-2 sm:space-y-2 sm:pt-3.5"
      >
        {strengths.map((strength, index) => (
          <motion.li
            key={`${strength}-${index}`}
            variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: 'easeOut' } } }}
            className="flex items-center gap-2 font-mono text-xs leading-snug text-[var(--score-card-primary)] sm:gap-2.5 sm:text-sm"
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--score-card-positive-bg)] text-green-700 sm:h-5 sm:w-5">
              <motion.svg viewBox="0 0 16 16" className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="none" aria-hidden="true">
                <motion.path
                  d="m3.5 8.2 2.8 2.8 6.2-6.4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { delay: 0.38 + index * 0.06, duration: 0.28, ease: 'easeOut' }}
                />
              </motion.svg>
            </span>
            {strength}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.55, duration: 0.3 } } }}
        className="mt-2 border-l-2 border-[var(--accent)] py-0.5 pl-2.5 sm:mt-4 sm:pl-3.5"
      >
        <div className="flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] sm:text-[11px]">
          <IconBulb className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          Next step
        </div>
        <p className="mt-0.5 font-mono text-[11px] leading-snug text-[var(--score-card-secondary)] sm:mt-1 sm:text-[13px] sm:leading-relaxed">{tip}</p>
      </motion.div>
    </motion.aside>
  )
}

export function InterviewDemoCard({
  question,
  questionIndex,
  totalQuestions,
  isRecording,
  elapsed,
  score = 88,
  strengths = ['Defined the evaluation plan', 'Connected metrics to production'],
  tip = 'Try explaining how you would catch quality regressions after launch.',
  role = 'Senior AI Engineer',
  cameraOn,
  micOn,
  isAceSpeaking,
  videoSrc = '/video.webm',
  onCameraChange,
  onMicChange,
  onFinish,
}: InterviewDemoCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion() ?? false
  const shouldLoadVideo = useInView(cardRef, { once: false, margin: '120px 0px' })
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'center center'] })
  const lift = useTransform(scrollYProgress, [0, 0.52], [0, 72])
  const rise = useTransform(scrollYProgress, [0, 0.52], [46, 0])
  const scale = useTransform(scrollYProgress, [0, 0.52], [0.94, 1])
  const [localCameraOn, setLocalCameraOn] = useState(cameraOn ?? true)
  const [localMicOn, setLocalMicOn] = useState(micOn ?? true)
  const [finished, setFinished] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showScorecard, setShowScorecard] = useState(false)
  const [scorecardDismissed, setScorecardDismissed] = useState(false)

  const activeCamera = cameraOn ?? localCameraOn
  const activeMic = micOn ?? localMicOn
  const recording = isRecording && !finished
  const paused = isPaused || finished
  const collapsed = recording || finished
  const speaking = isAceSpeaking ?? (!recording && !finished)
  const scrollStyle = reducedMotion
    ? { z: 0, y: 0, scale: 1 }
    : { z: lift, y: rise, scale }

  useEffect(() => {
    if ((!shouldLoadVideo && !finished) || scorecardDismissed) return

    const timer = window.setTimeout(() => setShowScorecard(true), finished ? 1500 : 1800)
    return () => window.clearTimeout(timer)
  }, [shouldLoadVideo, finished, scorecardDismissed])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (recording && activeCamera && !paused && !reducedMotion) {
      void video.play().catch(() => undefined)
    } else {
      video.pause()
    }
  }, [recording, activeCamera, paused, reducedMotion, shouldLoadVideo, videoSrc])

  function toggleCamera() {
    const next = !activeCamera
    if (cameraOn === undefined) setLocalCameraOn(next)
    onCameraChange?.(next)
  }

  function toggleMic() {
    const next = !activeMic
    if (micOn === undefined) setLocalMicOn(next)
    onMicChange?.(next)
  }

  function finishAnswer() {
    if (!recording) return
    setFinished(true)
    setIsPaused(true)
    setScorecardDismissed(false)
    onFinish?.()
  }

  function togglePlayback() {
    if (finished || isPaused) {
      setFinished(false)
      setIsPaused(false)
      if (activeCamera) void videoRef.current?.play().catch(() => undefined)
      return
    }
    videoRef.current?.pause()
    setIsPaused((current) => !current)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={reducedMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 110, damping: 22, mass: 0.9 }}
      style={{ ...scrollStyle, transformPerspective: 1400, transformOrigin: 'center bottom' }}
      className="relative mx-auto w-full max-w-5xl select-none overflow-hidden"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-neutral-300 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]">
        <div className="relative isolate aspect-square overflow-hidden rounded-[30px] bg-neutral-100 ring-1 ring-inset ring-white/10 sm:aspect-video">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_38%,rgba(255,255,255,0.65),transparent_48%),linear-gradient(145deg,#f5f5f5_0%,#d4d4d4_100%)]" />

          {shouldLoadVideo && videoSrc && (
            <video
              key={videoSrc}
              ref={videoRef}
              className="absolute inset-0 h-full w-full rounded-[30px] object-cover saturate-[0.9]"
              src={videoSrc}
              autoPlay={recording && !paused && activeCamera && !reducedMotion}
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Candidate speaking during an interview practice session"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

          {recording && !paused && !reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 rounded-[30px] border border-[#407cf9]/35"
              animate={{ opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          <AnimatePresence mode="wait">
            {(paused || !activeCamera) && (
              <motion.div
                key={paused ? 'paused' : 'camera-off'}
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.22 }}
                role="status"
                aria-live="polite"
                className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-200 to-neutral-300 px-4 text-center"
              >
                <div className="flex max-w-xs flex-col items-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)]">
                    <LogoMark className="h-12 w-12 text-[#2563EB]" />
                  </div>
                  <p className="font-display text-xl font-medium text-neutral-900 sm:text-2xl">
                    {paused ? (finished ? 'Interview paused' : 'Preview paused') : 'Camera is off'}
                  </p>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-neutral-600">
                    {paused
                      ? (finished ? 'Your recording has stopped. Review your answer below.' : 'Resume the preview whenever you are ready.')
                      : 'Turn your camera back on to continue your practice.'}
                  </p>
                  {paused && (
                    <motion.button
                      type="button"
                      onClick={togglePlayback}
                      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#407cf9] px-4 py-2.5 font-mono text-sm font-medium text-white shadow-md outline-none transition-colors hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-[#407cf9] focus-visible:ring-offset-2"
                    >
                      <IconPlayerPlayFilled className="h-3.5 w-3.5" aria-hidden="true" />
                      {finished ? 'Replay preview' : 'Resume preview'}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <TopBar questionIndex={questionIndex} totalQuestions={totalQuestions} isPaused={paused} onTogglePause={togglePlayback} reducedMotion={reducedMotion} />
          <RecordingPill elapsed={elapsed} isRecording={recording} isPaused={paused} reducedMotion={reducedMotion} />

          {!finished && (
            <QuestionCard question={question} isCollapsed={collapsed} isAceSpeaking={speaking} isPaused={paused} reducedMotion={reducedMotion} />
          )}
          <ControlDock
            cameraOn={activeCamera}
            micOn={activeMic}
            isRecording={recording}
            isPaused={paused}
            reducedMotion={reducedMotion}
            onCameraToggle={toggleCamera}
            onMicToggle={toggleMic}
            onFinish={finishAnswer}
          />

          <AnimatePresence>
            {showScorecard && (
              <InterviewScoreCard
                score={score}
                strengths={strengths}
                tip={tip}
                role={role}
                questionIndex={questionIndex}
                reducedMotion={reducedMotion}
                onDismiss={() => {
                  setShowScorecard(false)
                  setScorecardDismissed(true)
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}

