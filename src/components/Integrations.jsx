import { motion } from 'framer-motion'
import { integrations } from '../data/content.js'

export default function Integrations() {
  return (
    <section className="py-24 md:py-32">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Integrations</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Works with the tools you already trust.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((tool, i) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="card group flex flex-col items-center gap-3 p-5 text-center transition-colors duration-300 hover:border-accent/30 hover:shadow-glow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface2 text-ink-muted transition-colors duration-300 group-hover:text-accent">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <span className="text-xs font-medium text-ink-muted">{tool.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
