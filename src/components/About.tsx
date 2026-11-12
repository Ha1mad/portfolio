export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
        <p className="font-mono text-[13px] text-muted">about</p>
        <div className="grid gap-8 sm:grid-cols-[1fr_220px]">
          <p className="max-w-2xl text-lg leading-relaxed text-text/90">
            I’m a recent graduate with a Diploma in Programming &amp; Applications from
            Qassim University. I enjoy turning practical ideas into polished mobile
            and web experiences, from the first screen to the small details that make
            a product reliable.
            <span className="mt-4 block text-sm text-muted">
              Open to junior roles and opportunities to keep learning with a strong team.
            </span>
          </p>
          <div className="space-y-5 border-l border-border pl-5 text-[13px]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Education</p>
              <p className="mt-2 text-text">Diploma in Programming &amp; Applications</p>
              <p className="mt-1 text-muted">Qassim University</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Languages</p>
              <p className="mt-2 text-text">Arabic · Native</p>
              <p className="mt-1 text-muted">English · Fluent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
