import { useEffect, useState } from 'react'
import { WindowChrome } from './Chrome'
import { ArrowDownIcon, MailIcon } from './Icons'

const LINES = [
  '$ react-native run --target=ios,android',
  '→ resolving shared codebase…',
  '→ targeting ios       ✓',
  '→ targeting android   ✓',
  '✓ build ready — ship it',
]

function useTypedLines(lines: string[]) {
  const [done, setDone] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const target = lines[lineIndex]
    if (current.length < target.length) {
      const t = setTimeout(() => setCurrent(target.slice(0, current.length + 1)), 22)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => {
        setDone((d) => [...d, target])
        setCurrent('')
        setLineIndex((i) => i + 1)
      },
      lineIndex === lines.length - 1 ? 0 : 260,
    )
    return () => clearTimeout(t)
  }, [current, lineIndex, lines])

  return { done, current, finished: lineIndex >= lines.length }
}

export function Hero() {
  const { done, current, finished } = useTypedLines(LINES)

  return (
    <section id="top" className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-28">
      <div className="animate-fade-up">
        <p className="mb-4 font-mono text-[13px] text-muted">
          <span className="text-ios">●</span> ios <span className="mx-1 text-border">/</span>
          <span className="text-android">●</span> android
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Hamad builds apps
          <br />
          that live in your pocket.
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          Mobile developer shipping for iOS and Android from a single React Native
          codebase — cross-platform without the compromise.
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

      <div className="animate-fade-up overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40 [animation-delay:150ms]">
        <WindowChrome label="build.log" />
        <div className="min-h-[220px] px-5 py-5 font-mono text-[13px] leading-7">
          {done.map((line, i) => {
            const isLast = i === done.length - 1
            return (
              <div key={i} className={line.startsWith('✓') ? 'text-android' : 'text-muted'}>
                {line}
                {finished && isLast && <span className="animate-caret">▍</span>}
              </div>
            )
          })}
          {!finished && (
            <div className="text-muted">
              {current}
              <span className="animate-caret">▍</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
