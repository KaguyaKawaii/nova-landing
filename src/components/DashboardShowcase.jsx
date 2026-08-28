import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  Bell,
  ChevronDown,
  FolderKanban,
  LayoutGrid,
  ListChecks,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import { aiPrompts, workspaceProjects } from '../data/content.js'

const tabs = [
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'tasks', label: 'Tasks', icon: ListChecks },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'analytics', label: 'Analytics', icon: LayoutGrid },
  { id: 'assistant', label: 'AI Assistant', icon: Sparkles },
]

const notifications = [
  { id: 1, text: 'NOVA automated 3 recurring tasks in Aurora Redesign.', time: '12m ago' },
  { id: 2, text: 'Priya Nair mentioned you in Orbit API.', time: '1h ago' },
  { id: 3, text: 'Weekly analytics report is ready.', time: '3h ago' },
]

function ProjectsPanel({ projects, selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => onSelect(project.id)}
          className={`rounded-lg border p-4 text-left transition-colors duration-200 ${
            selectedId === project.id
              ? 'border-accent/50 bg-accent/[0.06]'
              : 'border-border bg-surface2 hover:border-border-strong'
          }`}
        >
          <p className="text-sm font-medium text-ink">{project.name}</p>
          <p className="mt-0.5 font-mono text-[11px] text-ink-dim">{project.tag}</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-2 font-mono text-[11px] text-ink-dim">
            {project.progress}% complete · {project.tasksOpen} open tasks
          </p>
        </button>
      ))}
    </div>
  )
}

function TasksPanel({ project }) {
  const statuses = ['To do', 'In progress', 'Review']
  const tasks = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        id: `${project.id}-${i}`,
        title: `${project.name} · task ${i + 1}`,
        status: statuses[i % statuses.length],
      })),
    [project]
  )

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface2 text-xs text-ink-dim">
            <th className="px-4 py-2.5 font-medium">Task</th>
            <th className="px-4 py-2.5 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-border/60 last:border-0">
              <td className="px-4 py-2.5 text-ink-muted">{task.title}</td>
              <td className="px-4 py-2.5">
                <span
                  className={`rounded-full border px-2 py-0.5 font-mono text-[11px] ${
                    task.status === 'In progress'
                      ? 'border-accent/40 text-accent'
                      : 'border-border-strong text-ink-dim'
                  }`}
                >
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ActivityPanel({ project }) {
  return (
    <ul className="flex flex-col gap-3">
      {project.activity.map((entry, i) => (
        <motion.li
          key={`${project.id}-${i}`}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: i * 0.06 }}
          className="flex items-start gap-3 rounded-lg border border-border bg-surface2 p-3"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <p className="text-sm text-ink-muted">
            <span className="font-medium text-ink">{entry.actor}</span> {entry.action}
          </p>
          <span className="ml-auto shrink-0 font-mono text-[11px] text-ink-dim">
            {entry.time}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}

function AnalyticsPanel({ project }) {
  const cards = [
    { label: 'Velocity', value: project.stats.velocity },
    { label: 'Avg. cycle time', value: project.stats.cycle },
    { label: 'Open bugs', value: project.stats.bugs },
  ]

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          className="rounded-lg border border-border bg-surface2 p-4"
        >
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-dim">
            {card.label}
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-ink">{card.value}</p>
        </motion.div>
      ))}
    </div>
  )
}

function AssistantPanel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = aiPrompts[activeIndex]

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[220px,1fr]">
      <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {aiPrompts.map((p, i) => (
          <button
            key={p.prompt}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`shrink-0 rounded-lg border px-3 py-2.5 text-left text-xs transition-colors ${
              activeIndex === i
                ? 'border-accent/50 bg-accent/[0.06] text-ink'
                : 'border-border bg-surface2 text-ink-dim hover:border-border-strong'
            }`}
          >
            {p.prompt}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-surface2 p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-dim">You</p>
        <p className="mt-1 text-sm text-ink">{active.prompt}</p>
        <div className="my-4 h-px bg-border" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-accent">
              <Sparkles size={12} /> NOVA
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{active.response}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedId, setSelectedId] = useState(workspaceProjects[0].id)
  const [notifOpen, setNotifOpen] = useState(false)

  const selectedProject = workspaceProjects.find((p) => p.id === selectedId)

  return (
    <section id="showcase" className="py-24 md:py-32">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Inside the workspace</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            One workspace, every workflow.
          </h2>
          <p className="mt-4 text-balance text-ink-muted">
            Switch between projects, tasks, and analytics without leaving the page.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-glow-lg"
        >
          {/* top bar */}
          <div className="flex flex-wrap items-center gap-3 border-b border-border bg-surface2 px-4 py-3">
            <div className="flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5">
              <LayoutGrid size={13} className="text-accent" />
              <span className="text-xs font-medium text-ink">Acme Workspace</span>
              <ChevronDown size={12} className="text-ink-dim" />
            </div>

            <div className="flex flex-1 items-center gap-2 rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-ink-dim">
              <Search size={12} />
              <span className="font-mono">Search projects, tasks, people…</span>
              <span className="ml-auto hidden rounded border border-border-strong px-1.5 py-0.5 font-mono text-[10px] sm:inline">
                ⌘K
              </span>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setNotifOpen((v) => !v)}
                aria-label="Toggle notifications"
                aria-expanded={notifOpen}
                className="relative flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-dim transition-colors hover:text-ink"
              >
                <Bell size={14} />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent" />
              </button>

              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 z-30 mt-2 w-72 rounded-lg border border-border-strong bg-surface2 p-2 shadow-card"
                  >
                    <div className="mb-1 flex items-center justify-between px-2 py-1">
                      <span className="text-xs font-medium text-ink">Notifications</span>
                      <button
                        type="button"
                        onClick={() => setNotifOpen(false)}
                        aria-label="Close notifications"
                        className="text-ink-dim hover:text-ink"
                      >
                        <X size={13} />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-0.5">
                      {notifications.map((n) => (
                        <li
                          key={n.id}
                          className="rounded-md px-2 py-2 text-xs text-ink-muted hover:bg-white/[0.04]"
                        >
                          <p>{n.text}</p>
                          <p className="mt-1 font-mono text-[10px] text-ink-dim">{n.time}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px,1fr]">
            {/* sidebar tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-border p-2 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-3">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-current={isActive}
                    className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors md:w-full ${
                      isActive
                        ? 'bg-white/[0.06] text-ink'
                        : 'text-ink-dim hover:bg-white/[0.03] hover:text-ink-muted'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-accent' : ''} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* main content */}
            <div className="min-h-[320px] p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {activeTab === 'projects' && (
                    <ProjectsPanel
                      projects={workspaceProjects}
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                    />
                  )}
                  {activeTab === 'tasks' && <TasksPanel project={selectedProject} />}
                  {activeTab === 'activity' && <ActivityPanel project={selectedProject} />}
                  {activeTab === 'analytics' && <AnalyticsPanel project={selectedProject} />}
                  {activeTab === 'assistant' && <AssistantPanel />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
