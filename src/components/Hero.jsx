import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import DashboardPreview from './DashboardPreview.jsx'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="product" className="relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(242,163,60,0.10),transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section flex flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Now with autonomous workflows
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Your AI workspace for getting work done.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg"
        >
          Bring your tools, workflows, and AI assistants together in one intelligent
          workspace.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#pricing" className="btn-primary px-6 py-3.5 text-[15px]">
            Start Building Free
            <ArrowRight size={16} />
          </a>
          <a href="#ai-showcase" className="btn-secondary px-6 py-3.5 text-[15px]">
            <PlayCircle size={16} />
            See How It Works
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="section mt-16 md:mt-20"
      >
        <DashboardPreview />
      </motion.div>
    </section>
  )
}
