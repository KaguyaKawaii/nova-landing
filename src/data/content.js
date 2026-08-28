import {
  Workflow,
  Sparkles,
  Users,
  Search,
  Zap,
  Plug,
  Github,
  Slack,
  Figma,
  FileStack,
  KanbanSquare,
  HardDrive,
} from 'lucide-react'

export const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#faq' },
]

export const logoCloud = ['Vertex', 'Northstar', 'Arc', 'Layer', 'Flux']

export const features = [
  {
    icon: Workflow,
    title: 'AI Workflows',
    description: 'Automate repetitive tasks and workflows.',
  },
  {
    icon: Sparkles,
    title: 'Smart Insights',
    description: 'Turn complex information into useful insights.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: "Keep your team's work organized in one place.",
  },
  {
    icon: Search,
    title: 'Intelligent Search',
    description: 'Find information instantly across your workspace.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Reduce repetitive work with customizable workflows.',
  },
  {
    icon: Plug,
    title: 'Integrations',
    description: 'Connect NOVA with the tools your team already uses.',
  },
]

export const workspaceProjects = [
  {
    id: 'aurora',
    name: 'Aurora Redesign',
    tag: 'Design System',
    progress: 72,
    tasksOpen: 14,
    activity: [
      { actor: 'Maya Lin', action: 'shipped the new token pipeline', time: '2h ago' },
      { actor: 'NOVA', action: 'flagged 3 unused components', time: '4h ago' },
      { actor: 'Devon Ross', action: 'merged spacing-scale into main', time: '6h ago' },
    ],
    stats: { velocity: '+18%', cycle: '2.4d', bugs: 3 },
  },
  {
    id: 'orbit',
    name: 'Orbit API',
    tag: 'Backend',
    progress: 45,
    tasksOpen: 22,
    activity: [
      { actor: 'NOVA', action: 'auto-triaged 9 incoming issues', time: '1h ago' },
      { actor: 'Priya Nair', action: 'opened RFC: rate limiting v2', time: '3h ago' },
      { actor: 'Sam Ortiz', action: 'closed 4 stale tickets', time: '5h ago' },
    ],
    stats: { velocity: '+6%', cycle: '3.1d', bugs: 8 },
  },
  {
    id: 'lumen',
    name: 'Lumen Onboarding',
    tag: 'Growth',
    progress: 91,
    tasksOpen: 5,
    activity: [
      { actor: 'NOVA', action: 'summarized last week of user feedback', time: '30m ago' },
      { actor: 'Ana Cole', action: 'published onboarding v3 copy', time: '2h ago' },
      { actor: 'NOVA', action: 'suggested 2 automation rules', time: '5h ago' },
    ],
    stats: { velocity: '+31%', cycle: '1.2d', bugs: 1 },
  },
]

export const aiPrompts = [
  {
    prompt: 'Summarize open PRs waiting on review.',
    response:
      '4 pull requests have been idle for 2+ days. 3 belong to the Orbit API project. Want me to nudge reviewers?',
  },
  {
    prompt: 'Draft a standup update for Aurora Redesign.',
    response:
      "Shipped the token pipeline, reviewed 2 PRs, blocked on final icon set from design. Tomorrow: finish spacing audit.",
  },
  {
    prompt: 'What changed in Lumen Onboarding this week?',
    response:
      'Onboarding v3 copy shipped, activation rate up 6%. 2 automation rules suggested for drop-off recovery.',
  },
]

export const aiAnalysis = {
  question:
    "Analyze this week's project activity and identify what's slowing the team down.",
  title: 'Weekly Project Analysis',
  sections: [
    {
      label: 'Bottleneck',
      body: 'Too much time spent on repetitive manual tasks.',
    },
    {
      label: 'Impact',
      body: 'Approximately 8 hours lost per week.',
    },
    {
      label: 'Recommendation',
      body: 'Automate recurring reporting and task assignment.',
    },
  ],
}

export const howItWorks = [
  {
    number: '01',
    title: 'Connect',
    description: 'Connect the tools your team already uses.',
  },
  {
    number: '02',
    title: 'Automate',
    description: 'Let NOVA handle repetitive workflows.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Spend more time on meaningful work.',
  },
]

export const integrations = [
  { name: 'GitHub', icon: Github },
  { name: 'Slack', icon: Slack },
  { name: 'Notion', icon: FileStack },
  { name: 'Figma', icon: Figma },
  { name: 'Jira', icon: KanbanSquare },
  { name: 'Google Drive', icon: HardDrive },
]

export const pricingPlans = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    description: 'For individuals trying NOVA out.',
    features: ['3 projects', 'Basic AI tools', '1 integration'],
    cta: 'Start Building Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 15,
    description: 'For teams who want to move faster.',
    features: [
      'Unlimited projects',
      'Advanced AI',
      'Unlimited integrations',
      'Analytics',
      'Automation',
    ],
    cta: 'Start Building Free',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Team',
    monthly: 49,
    yearly: 39,
    description: 'For organizations that need control.',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Advanced permissions',
      'Priority support',
    ],
    cta: 'Start Building Free',
    highlighted: false,
  },
]

export const testimonials = [
  {
    name: 'Jordan Reyes',
    role: 'Head of Engineering',
    company: 'Vertex',
    initials: 'JR',
    quote:
      "Before NOVA, our team spent hours every week doing repetitive reporting. Now most of it happens automatically.",
  },
  {
    name: 'Elena Cho',
    role: 'Product Lead',
    company: 'Northstar',
    initials: 'EC',
    quote:
      "NOVA's search actually finds what I'm looking for across every tool we use. It quietly became the first place I go.",
  },
  {
    name: 'Marcus Webb',
    role: 'COO',
    company: 'Flux',
    initials: 'MW',
    quote:
      'We rolled NOVA out to three teams in a week. The automations paid for the subscription in the first month.',
  },
]

export const faqs = [
  {
    question: 'What is NOVA?',
    answer:
      'NOVA is an AI-powered workspace that brings your tools, workflows, and AI assistants together in one place, so your team spends less time switching contexts.',
  },
  {
    question: 'Does NOVA require technical knowledge?',
    answer:
      'No. NOVA is built for teams of any background. If you can describe a workflow in plain language, you can automate it with NOVA.',
  },
  {
    question: 'Can I connect my existing tools?',
    answer:
      'Yes. NOVA integrates with tools like GitHub, Slack, Notion, Figma, Jira, and Google Drive, with more added regularly.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. The Free plan includes 3 projects, basic AI tools, and 1 integration, no credit card required.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Your data is encrypted in transit and at rest, and you control exactly which tools and teammates can access each workspace.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings, no questions asked.',
  },
]
