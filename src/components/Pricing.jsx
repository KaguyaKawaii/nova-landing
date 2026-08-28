import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '../data/content.js'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Simple pricing that scales with your team.
          </h2>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm ${!yearly ? 'text-ink' : 'text-ink-dim'}`}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className="relative h-6 w-11 shrink-0 rounded-full border border-border-strong bg-surface2 transition-colors"
          >
            <motion.span
              animate={{ left: yearly ? 22 : 3 }}
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className="absolute top-0.5 rounded-full bg-accent"
              style={{ height: '18px', width: '18px' }}
            />
          </button>
          <span className={`text-sm ${yearly ? 'text-ink' : 'text-ink-dim'}`}>Yearly</span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent">
            Save 20%
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  plan.highlighted
                    ? 'border-accent/40 bg-surface shadow-glow'
                    : 'border-border bg-surface'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-medium text-bg">
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-display text-lg font-semibold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-ink">
                    ${price}
                  </span>
                  <span className="text-sm text-ink-dim">/month</span>
                </div>
                {yearly && plan.monthly > 0 && (
                  <p className="mt-1 font-mono text-[11px] text-ink-dim">
                    billed annually
                  </p>
                )}

                <a
                  href="#top"
                  className={`mt-7 w-full text-center ${
                    plan.highlighted ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
