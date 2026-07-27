import { WindowChrome } from './Chrome'

export function Experience() {
  return (
    <section className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
        <p className="font-mono text-[13px] text-muted">experience</p>

        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <WindowChrome label="experience.log" />
          <div className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold">Software Developer Intern</h3>
              <p className="mt-1 text-[14px] text-muted">
                SACHLO — Saudi Factory for Chlorine &amp; Alkalies
              </p>
            </div>
            <span className="whitespace-nowrap font-mono text-[12px] text-muted">6 months</span>
          </div>
        </div>
      </div>
    </section>
  )
}
