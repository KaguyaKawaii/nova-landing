import { Github, Linkedin, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: ['Overview', 'Workflows', 'AI Assistant', 'Integrations'],
  },
  {
    title: 'Solutions',
    links: ['Engineering', 'Product', 'Operations', 'Startups'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Guides', 'Changelog', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security'],
  },
]

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Github, label: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="section">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#top" className="flex items-center gap-2" aria-label="NOVA home">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink">
                <span className="font-display text-sm font-bold text-bg">N</span>
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-ink">
                NOVA
              </span>
            </a>
            <p className="mt-4 max-w-[180px] text-sm text-ink-dim">
              Your AI workspace for getting work done.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-ink">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-ink-dim transition-colors hover:text-ink-muted"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-ink-dim">© 2026 NOVA. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href="#top"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-dim transition-colors hover:border-border-strong hover:text-ink"
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
