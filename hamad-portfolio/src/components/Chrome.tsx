import type { Platform } from '../data/projects'

export function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface/60">
      <span className="w-2.5 h-2.5 rounded-full bg-[#e8ecf4]/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#e8ecf4]/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#e8ecf4]/15" />
      <span className="ml-2 font-mono text-[11px] text-muted tracking-wide truncate">{label}</span>
    </div>
  )
}

const platformMeta: Record<Platform, { label: string; dot: string }> = {
  ios: { label: 'iOS', dot: 'bg-ios' },
  android: { label: 'Android', dot: 'bg-android' },
  web: { label: 'Web', dot: 'bg-muted' },
}

export function PlatformTags({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="flex items-center gap-3">
      {platforms.map((p) => (
        <span key={p} className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <span className={`w-1.5 h-1.5 rounded-full ${platformMeta[p].dot}`} />
          {platformMeta[p].label}
        </span>
      ))}
    </div>
  )
}
