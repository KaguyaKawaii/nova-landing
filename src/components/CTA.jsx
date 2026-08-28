import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface px-6 py-16 text-center sm:px-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(242,163,60,0.16),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-[0.08]"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Build less busywork. Create more.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-ink-muted">
              Bring your team's workflow into one intelligent workspace.
            </p>
            <a
              href="#pricing"
              className="btn-primary mt-8 inline-flex px-6 py-3.5 text-[15px]"
            >
              Start Building Free
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
