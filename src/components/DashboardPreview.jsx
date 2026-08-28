import { motion } from 'framer-motion'
import { Activity, Bell, LayoutGrid, Search, Sparkles } from 'lucide-react'
import { workspaceProjects } from '../data/content.js'

export default function DashboardPreview() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-[420px] max-w-4xl rounded-full bg-accent/20 blur-[120px]"
      />

      {/* floating chips */}
      <motion.div
        className="absolute -left-4 top-10 z-20 hidden rounded-lg border border-border-strong bg-surface2 px-3 py-2 shadow-card md:flex md:items-center md:gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.9 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="font-mono text-xs text-ink-muted">Sync complete</span>
      </motion.div>

      <motion.div
        className="absolute -right-6 bottom-16 z-20 hidden rounded-lg border border-border-strong bg-surface2 px-3 py-2 shadow-card md:flex md:items-center md:gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1.1 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Sparkles size={13} className="text-accent" />
        <span className="font-mono text-xs text-ink-muted">3 tasks automated</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-glow-lg"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="ml-4 flex flex-1 items-center gap-2 rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-ink-dim">
            <Search size={12} />
            <span className="font-mono">app.nova.so/workspace</span>
          </div>
          <Bell size={14} className="text-ink-dim" />
        </div>

        <div className="grid grid-cols-[52px,1fr] sm:grid-cols-[180px,1fr]">
          {/* sidebar */}
          <div className="hidden flex-col gap-1 border-r border-border p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1.5">
              <LayoutGrid size={14} className="text-accent" />
              <span className="text-xs font-medium text-ink">Acme Workspace</span>
            </div>
            {['Projects', 'Tasks', 'Activity', 'Analytics'].map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-2 py-1.5 text-xs ${
                  i === 0 ? 'bg-white/[0.06] text-ink' : 'text-ink-dim'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* main panel */}
          <div className="p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="eyebrow">Projects</p>
                <h3 className="font-display text-lg font-semibold text-ink">Overview</h3>
              </div>
              <div className="hidden items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-ink-dim sm:flex">
                <Activity size={12} />
                This week
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {workspaceProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="rounded-lg border border-border bg-surface2 p-3"
                >
                  <p className="text-xs font-medium text-ink">{project.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-ink-dim">{project.tag}</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] text-ink-dim">
                    {project.progress}% · {project.tasksOpen} open
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
