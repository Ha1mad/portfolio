export function About() {
  return (
    <section className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
        <p className="font-mono text-[13px] text-muted">about</p>
        <p className="max-w-2xl text-lg leading-relaxed text-text/90">
          Hamad is a mobile developer focused on turning one codebase into a native
          feel on both iOS and Android. He works mainly in React Native and Expo,
          with TypeScript end to end, and enjoys the parts of an app that people
          notice without thinking about it — smooth navigation, reliable local
          storage, and reminders that actually fire on time.
          <span className="mt-4 block text-sm text-muted">Based in Saudi Arabia.</span>
        </p>
      </div>
    </section>
  )
}
