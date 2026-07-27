export type Platform = 'ios' | 'android' | 'web'

export interface Project {
  name: string
  tagline: string
  description: string
  platforms: Platform[]
  tech: string[]
  repoUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'HabitStreak',
    tagline: 'Habit tracker · Expo Router',
    description:
      'A daily habit tracker built with Expo Router. Streak tracking with recovery saves, per-check-in notes, local reminders, and theme packs — built to feel calm rather than naggy.',
    platforms: ['ios', 'android'],
    tech: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'AsyncStorage', 'Expo Notifications'],
    repoUrl: 'https://github.com/Ha1mad/HabitStreak',
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
  {
    name: 'Display Errors Logs',
    tagline: 'Windows event log viewer',
    description:
      'A small utility that reads Windows Event Logs, filters down to error events, and renders them in a browsable table — no digging through raw logs required.',
    platforms: ['web'],
    tech: ['Python', 'JSON', 'HTML'],
    repoUrl: 'https://github.com/Ha1mad/Display-Errors-logs',
  },
]
