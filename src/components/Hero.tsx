import { ArrowDownIcon, MailIcon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:pb-28">
      <div className="animate-fade-up">
        <p className="mb-4 font-mono text-[13px] text-muted">
          Hamad Alharbi <span className="mx-1 text-border">/</span> Mobile &amp; Web Developer
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Thoughtful software,
          <br />
          from idea to interface.
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          I build useful mobile and web products with React Native, Expo, TypeScript,
          and a strong focus on clear, dependable user experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="flex items-center gap-2 rounded-lg bg-text px-5 py-2.5 text-[14px] font-medium text-bg transition-opacity hover:opacity-90"
          >
            View work
            <ArrowDownIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-[14px] text-text transition-colors hover:border-ios/50"
          >
            <MailIcon className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>

      <div className="animate-fade-up border-l-2 border-ios pl-6 [animation-delay:150ms]">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">Currently</p>
        <p className="mt-3 max-w-xs font-display text-xl leading-snug text-text">
          Looking for a first full-time opportunity in mobile or web development.
        </p>
        <p className="mt-5 font-mono text-[12px] text-muted">Based in Saudi Arabia</p>
      </div>
    </section>
  )
}
