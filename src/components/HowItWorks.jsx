import { motion } from 'framer-motion'
import { howItWorks } from '../data/content.js'

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Process</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            From connected tools to finished work.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block"
          />
          {howItWorks.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-surface font-mono text-sm text-accent">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
