import { GitHubIcon, MailIcon } from './Icons'

const EMAIL = 'hmdalharby7@gmail.com'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
        <p className="font-mono text-[13px] text-muted">contact</p>
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Have something worth building?
          </h2>
          <p className="mt-3 max-w-md text-[15px] text-muted">
            Open to mobile projects — new builds, or getting an existing app to
            feel right on both platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 rounded-lg bg-text px-5 py-2.5 text-[14px] font-medium text-bg transition-opacity hover:opacity-90"
            >
              <MailIcon className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              href="https://github.com/Ha1mad"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-[14px] text-text transition-colors hover:border-ios/50"
            >
              <GitHubIcon className="h-4 w-4" />
              github.com/Ha1mad
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-[12px] text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Hamad</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ios" />
          ios
          <span className="text-border">/</span>
          <span className="h-1.5 w-1.5 rounded-full bg-android" />
          android
        </span>
      </div>
    </footer>
  )
}
