import { GitHubIcon } from './Icons'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Hamad<span className="text-ios">.</span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/Ha1mad"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-ios/50 hover:text-text"
        >
          <GitHubIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Ha1mad</span>
        </a>
      </nav>
    </header>
  )
}
