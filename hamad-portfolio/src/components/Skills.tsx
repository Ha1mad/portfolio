const groups = [
  {
    label: 'Mobile',
    dot: 'bg-ios',
    items: ['React Native', 'Expo', 'Expo Router', 'Expo Notifications'],
  },
  {
    label: 'Languages',
    dot: 'bg-android',
    items: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    label: 'Web',
    dot: 'bg-muted',
    items: ['React', 'HTML5', 'CSS3'],
  },
  {
    label: 'Tooling',
    dot: 'bg-muted',
    items: ['Git', 'GitHub', 'AsyncStorage', 'ESLint'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
        <p className="font-mono text-[13px] text-muted">skills</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="mb-3 flex items-center gap-2 font-mono text-[12px] text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${g.dot}`} />
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] text-text/90"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
