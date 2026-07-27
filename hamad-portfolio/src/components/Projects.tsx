import { projects } from '../data/projects'
import { WindowChrome, PlatformTags } from './Chrome'
import { ExternalLinkIcon, GitHubIcon } from './Icons'

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="mb-10 grid gap-8 lg:grid-cols-[160px_1fr]">
        <p className="font-mono text-[13px] text-muted">work</p>
        <h2 className="font-display text-2xl font-semibold tracking-tight">Selected projects</h2>
      </div>

      <div className="grid gap-6 lg:ml-[184px] lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-ios/40"
          >
            <WindowChrome label={p.name.toLowerCase().replace(/\s+/g, '-')} />
            <div className="flex flex-1 flex-col gap-4 px-5 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="font-mono text-[12px] text-muted">{p.tagline}</p>
                </div>
                <PlatformTags platforms={p.platforms} />
              </div>

              <p className="text-[14px] leading-relaxed text-muted">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 pt-2">
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-text transition-colors hover:text-ios"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Source
                </a>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[13px] text-text transition-colors hover:text-ios"
                  >
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
