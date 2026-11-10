'use client'

import { motion, MotionConfig } from 'motion/react'
import { IconBrandOpenai, IconQuoteOpen } from '@tabler/icons-react'
import { InlineIcon } from '@/components/ui/inline-icon'

const companies = {
  openai: { name: 'OpenAI', slug: 'openai' },
  anthropic: { name: 'Anthropic', slug: 'anthropic' },
  vercel: { name: 'Vercel', slug: 'vercel' },
  palantir: { name: 'Palantir', slug: 'palantir' },
  linear: { name: 'Linear', slug: 'linear' },
}

const stories = [
  {
    company: companies.vercel,
    quote: 'I stopped trying to memorize perfect answers and started explaining how I make decisions.',
    name: 'Jordan Rivera',
    role: 'Product engineer',
    image: '/testimonial-samira.webp',
  },
  {
    company: companies.palantir,
    quote: 'The follow-up questions showed me where my reasoning needed more detail.',
    name: 'Samira Patel',
    role: 'Data engineer',
    image: '/testimonial-jordan.webp',
  },
  {
    company: companies.linear,
    quote: 'I found a clearer way to tell the story behind my technical work.',
    name: 'Evelyn Brooks',
    role: 'Software engineer',
    image: '/testimonial-evan.webp',
  },
]

function CompanyMark({ name, slug, inverse = false }: { name: string; slug: string; inverse?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${inverse ? 'text-white' : 'text-neutral-900'}`}>
      {slug === 'openai' ? (
        <IconBrandOpenai aria-hidden="true" className={`h-7 w-7 shrink-0 ${inverse ? 'text-white' : 'text-neutral-900'}`} />
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${inverse ? 'ffffff' : '171717'}`}
          alt=""
          aria-hidden="true"
          className="h-5 w-5 object-contain"
          loading="lazy"
          draggable={false}
        />
      )}
      <span className="font-display text-sm font-medium tracking-[-0.02em]">{name}</span>
    </span>
  )
}

function StoryCard({ story, index }: { story: (typeof stories)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="flex min-h-[286px] flex-col rounded-[24px] border border-white/55 bg-white/55 p-5 shadow-[0_14px_34px_-22px_rgba(0,0,0,0.22)] sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <CompanyMark {...story.company} />
        <span className="rounded-full bg-[#407cf9]/10 px-2.5 py-1 font-mono text-[11px] font-medium text-[#2459c7]">Role focus</span>
      </div>

      <div className="mt-6 text-lg leading-none"><InlineIcon color="#f43f5e"><IconQuoteOpen /></InlineIcon></div>
      <p className="mt-2 flex-1 font-display text-lg font-medium leading-snug tracking-[-0.025em] text-neutral-900 sm:text-xl">
        “{story.quote}”
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
        <img src={story.image} alt="" className="h-11 w-11 rounded-xl object-cover" loading="lazy" />
        <div className="min-w-0">
          <p className="truncate font-mono text-sm font-medium text-neutral-900">{story.name}</p>
          <p className="truncate font-mono text-xs text-neutral-600">{story.role}</p>
        </div>
      </div>
    </motion.article>
  )
}

export function Testimonials() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="testimonials-heading" className="bg-neutral-300 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <div className="max-w-3xl">
              <p className="mb-3 flex items-center gap-2 font-mono text-sm font-medium text-neutral-700">
                <InlineIcon color="#10b981" className="text-base"><IconQuoteOpen /></InlineIcon>
                Candidate stories
              </p>
              <h2 id="testimonials-heading" className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-neutral-900 sm:text-4xl lg:text-5xl">
                Feel <span className="text-[#407cf9]">ready</span> for the conversation.
              </h2>
              <p className="mt-3 max-w-2xl font-mono text-base leading-7 text-neutral-700 sm:text-lg">
                Clearer answers start with practice that feels close to the real thing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="group relative isolate flex min-h-[390px] overflow-hidden rounded-[28px] border border-black/10 bg-neutral-900 p-6 shadow-[0_20px_48px_-26px_rgba(0,0,0,0.42)] sm:min-h-[430px] sm:p-9 lg:col-span-7"
            >
              <img
                src="/testimonial-feature-v2.webp"
                alt="A candidate speaking confidently during a practice interview"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/90 via-neutral-950/68 to-neutral-950/5" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/65 via-transparent to-neutral-950/10" />

              <div className="flex max-w-[34rem] flex-col">
                <span className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                  <CompanyMark {...companies.openai} inverse />
                  <span className="border-l border-white/25 pl-2 font-mono text-[11px] text-white/80">Role focus</span>
                </span>
                <div className="mt-12 text-xl leading-none"><InlineIcon color="#38bdf8"><IconQuoteOpen /></InlineIcon></div>
                <blockquote className="mt-3 font-display text-[22px] font-medium leading-[1.25] tracking-[-0.035em] text-white sm:text-[27px] lg:text-[30px]">
                  “I learned to explain the decisions behind my work, not just list what I had built.”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <img src="/testimonial-maya.webp" alt="" className="h-12 w-12 rounded-full border border-white/30 object-cover" loading="lazy" />
                  <div>
                    <p className="font-mono text-sm font-medium text-white">Arjun Mehta</p>
                    <p className="font-mono text-xs text-white/70">AI engineer</p>
                  </div>
                </div>
              </div>
              <span className="absolute bottom-6 right-6 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[11px] text-white/85 backdrop-blur-sm sm:bottom-8 sm:right-8">
                Practice made visible
              </span>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="flex min-h-[390px] flex-col rounded-[28px] border border-white/60 bg-white/65 p-6 shadow-[0_18px_42px_-25px_rgba(0,0,0,0.24)] sm:min-h-[430px] sm:p-8 lg:col-span-5"
            >
              <div className="flex items-center justify-between gap-3">
                <CompanyMark {...companies.anthropic} />
                <span className="rounded-full bg-[#407cf9]/10 px-2.5 py-1 font-mono text-[11px] font-medium text-[#2459c7]">Role focus</span>
              </div>
              <div className="my-7 flex flex-1 flex-col justify-center rounded-[22px] bg-neutral-100 p-5 sm:p-6">
                <InlineIcon color="#f59e0b" className="text-lg"><IconQuoteOpen /></InlineIcon>
                <p className="mt-4 font-display text-xl font-medium leading-snug tracking-[-0.03em] text-neutral-900 sm:text-2xl">
                  “The follow-ups helped me find the point where my explanation needed more depth.”
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/testimonial-jordan.webp" alt="" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-mono text-sm font-medium text-neutral-900">Jordan Rivera</p>
                  <p className="font-mono text-xs text-neutral-600">Product engineer</p>
                </div>
              </div>
            </motion.article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3 lg:gap-5">
              {stories.map((story, index) => <StoryCard key={story.company.slug} story={story} index={index} />)}
            </div>
          </div>

          <p className="mt-5 font-mono text-xs leading-relaxed text-neutral-600">
            Names and quotes are sample content. Company marks show example role targets and do not imply endorsement.
          </p>
        </div>
      </section>
    </MotionConfig>
  )
}
