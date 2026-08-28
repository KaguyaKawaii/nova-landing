import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content.js'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Teams get their time back.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card flex flex-col p-6"
            >
              <Quote size={20} className="text-accent/60" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface2 font-mono text-xs text-ink-muted">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{testimonial.name}</p>
                  <p className="text-xs text-ink-dim">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
