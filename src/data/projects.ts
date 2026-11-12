export type Platform = 'ios' | 'android' | 'web'

export interface Project {
  name: string
  tagline: string
  description: string
  platforms: Platform[]
  tech: string[]
  repoUrl: string
  repoLabel?: string
  liveUrl?: string
  liveLabel?: string
}

export const projects: Project[] = [
  {
    name: 'TNAFS · تنافس',
    tagline: 'Live on the App Store · ~6,000 downloads',
    description:
      'An Arabic-first habit and self-discipline app for iPhone that I built and run on my own. A Shield covers one missed day so a streak survives a slip. Full RTL with all six Arabic plural forms, subscriptions with RevenueCat and StoreKit 2, home-screen widgets, and analytics with PostHog. Live since October 2026.',
    platforms: ['ios'],
    tech: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'RevenueCat', 'i18next', 'PostHog', 'EAS'],
    repoUrl: 'https://github.com/Ha1mad/HabitStreak',
    repoLabel: 'Showcase',
    liveUrl: 'https://apps.apple.com/app/id6819559733',
    liveLabel: 'App Store',
  },
  {
    name: 'Display Errors Logs',
    tagline: 'Internship project · Windows event log viewer',
    description:
      'A small utility that reads Windows Event Logs, filters down to error events, and renders them in a browsable table — no digging through raw logs required.',
    platforms: ['web'],
    tech: ['Python', 'JSON', 'HTML', 'JavaScript'],
    repoUrl: 'https://github.com/Ha1mad/Display-Errors-logs',
  },
  {
    name: 'Interactive Birthday Celebration',
    tagline: 'Front-end interaction study',
    description:
      'A playful birthday page with clickable candles, animated confetti and balloons, and dynamic wish cards — a small study in DOM manipulation and CSS animation.',
    platforms: ['web'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/Ha1mad/Interactive-Birthday-Celebration-Web-App',
    liveUrl: 'https://ha1mad.github.io/Interactive-Birthday-Celebration-Web-App/',
  },
]
