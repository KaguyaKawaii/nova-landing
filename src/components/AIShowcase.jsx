import { motion } from 'framer-motion'
import { Sparkles, User } from 'lucide-react'
import { aiAnalysis } from '../data/content.js'

export default function AIShowcase() {
  return (
    <section id="ai-showcase" className="py-24 md:py-32">
      <div className="section grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">AI Assistant</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Ask NOVA. Get an answer, not a search result.
          </h2>
          <p className="mt-4 max-w-md text-balance leading-relaxed text-ink-muted">
            NOVA reads across your projects, tasks, and activity to surface what actually
            needs your attention, then tells you what to do about it.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="card p-5 sm:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-strong text-ink-dim">
              <User size={13} />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {aiAnalysis.question}
            </p>
          </div>

          <div className="my-5 h-px bg-border" />

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Sparkles size={13} />
            </div>
            <div className="w-full">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="font-display text-sm font-semibold text-ink"
              >
                {aiAnalysis.title}
              </motion.p>

              <div className="mt-4 flex flex-col gap-4">
                {aiAnalysis.sections.map((section, i) => (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.15 }}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                      {section.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {section.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
