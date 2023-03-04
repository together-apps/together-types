// Profile
export interface UserRecord {
  id: string
  email: string
  firstName: string
  lastName: string
  bio: string
  avatar: string
  agoraUid: number
  queryName: string
  notificationsEnabled: boolean
}

// Sessions
export enum EventFormat {
  OneAtTheTime = 'one_at_the_time',
  AllAtOnce = 'all_at_once',
  HostOnly = 'host_only',
  OnePerson = 'one_person'
}

export const eventFormats: {
  [EventFormat.OneAtTheTime]: {
    value: EventFormat.OneAtTheTime
    label: 'One at the time'
  }
  [EventFormat.AllAtOnce]: {
    value: EventFormat.AllAtOnce
    label: 'All at once'
  }
  [EventFormat.HostOnly]: {
    value: EventFormat.HostOnly
    label: 'Host only'
  }
  [EventFormat.OnePerson]: {
    value: EventFormat.OnePerson
    label: 'One person'
  }
}

export interface Event {
  id: string
  title: string
  description: string
  durationSeconds: number
  format: EventFormat
}

export interface OngoingEvent<FirebaseTimestamp> extends Event {
  startedAt: FirebaseTimestamp
  currentSpeaker: string
}

export type Color = `#${string}` | 'transparent'

export interface Category {
  id: string
  title: string
  description: string
  color: Color
}

export interface SessionStartingTime {
  start: string
  acceptedBy: string[]
}

// When updating this, also update the sessionRequiredFields and sessionOptionalFields in index.js
export interface Session<FirebaseTimestamp> {
  agenda: Event[]
  authoredByUserID: string
  categoryID: string
  createdBy: string
  currentEvent: OngoingEvent<FirebaseTimestamp> | 'waiting' | 'finished'
  description: string
  finishedAt?: string
  help: string
  howItWorks: string
  id: string
  templateID: string
  location: string
  participants: string[]
  principles: string
  proposedStartingTimes: SessionStartingTime[]
  recommendedNumberOfParticipants: number
  setting: string
  startsAt?: string // undefined if no decided time yet
  subtitle: string
  tip: string
  title: string
  videoID?: string
}

export interface SessionReview<FirebaseTimestamp> {
  authorID: string
  sessionID: string
  publicComment: string
  personalComment: string
  createdAt: FirebaseTimestamp
}

export const PushNotificationTypes: {
  sessionInvite: 'sessionInvite'
  sessionStarting: 'sessionStarting'
  sessionTimeConfirmed: 'sessionTimeConfirmed'
  sessionStartingSoon: 'sessionStartingSoon'
}

type SessionKeys = keyof Session<any>

export const sessionRequiredFields: SessionKeys[]
export const sessionOptionalFields: SessionKeys[]

export const test: string
