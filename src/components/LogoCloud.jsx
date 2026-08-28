import { motion } from 'framer-motion'
import { logoCloud } from '../data/content.js'

export default function LogoCloud() {
  return (
    <section className="border-y border-border/70 py-10">
      <div className="section">
        <p className="mb-7 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
          Trusted by modern teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {logoCloud.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="select-none font-display text-lg font-semibold tracking-tight text-ink-dim/80 grayscale transition-colors hover:text-ink-muted"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
