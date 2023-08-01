// Profile
export interface UserRecord<FirebaseTimestamp> {
  agoraUid: number
  avatar: string
  bio: string
  createdAt: FirebaseTimestamp
  email: string
  firstName: string
  id: string
  lastName: string
  lastSeen: FirebaseTimestamp
  notificationsEnabled: boolean
  queryName: string
  status: 'online' | 'offline'
}

export interface LastInvited<FirebaseTimestamp> {
  sessionID: string
  timestamp: FirebaseTimestamp
  userID: string
}

// Sessions
export enum EventFormat {
  AllAtOnce = 'all_at_once',
  HostOnly = 'host_only',
  OneAtTheTime = 'one_at_the_time',
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
  confirmButtonText?: string
  description: string
  durationSeconds: number
  durationType: 'confirm' | 'duration'
  format: EventFormat
  id: string
  linkedToNext?: boolean
  listenerDescription?: string
  nextButtonText?: string
  title: string
}

export interface OngoingEvent<FirebaseTimestamp> extends Event {
  confirmedBy: string[]
  currentSpeaker: string
  startedAt: FirebaseTimestamp
}

export type Color = `#${string}` | 'transparent'

export interface Category {
  color: Color
  description: string
  id: string
  title: string
}

export interface SessionStartingTime {
  acceptedBy: string[]
  start: string
}

// When updating this, also update the sessionRequiredFields and sessionOptionalFields in index.js
export interface Session<FirebaseTimestamp> {
  agenda: Event[]
  authoredBy?: string
  categoryID: string
  createdBy: string
  currentEvent: OngoingEvent<FirebaseTimestamp> | 'waiting' | 'finished'
  description: string
  finishedAt?: string
  help: string
  howItWorks: string
  id: string
  imageID?: string
  intro: string[]
  location: string
  participants: string[]
  principles: string
  proposedStartingTimes: SessionStartingTime[]
  recommendedNumberOfParticipants: number
  setting: string
  startsAt?: string // undefined if no decided time yet
  subtitle: string
  templateID: string
  tip: string[]
  title: string
  videoID?: string
  visible?: boolean
}

// Session reviews are public comments visible to everyone
export interface Review<FirebaseTimestamp> {
  authorID: string
  comment: string
  createdAt: FirebaseTimestamp
}

// Reflections are private notes only visible to the author
export interface SessionReflection<FirebaseTimestamp> {
  authorID: string
  createdAt: FirebaseTimestamp
  reflection: string
  sessionID: string
}

export const PushNotificationTypes: {
  sessionCancelled: 'sessionCancelled'
  sessionInvite: 'sessionInvite'
  sessionStarting: 'sessionStarting'
  sessionStartingSoon: 'sessionStartingSoon'
  sessionTimeConfirmed: 'sessionTimeConfirmed'
}

type SessionKeys = keyof Session<any>

export const sessionRequiredFields: SessionKeys[]
export const sessionOptionalFields: SessionKeys[]

export const test: string

export interface DiscoverCategory {
  id: string
  priority: number
  sessions?: string[]
  thumbnailType: 'video' | 'default'
  title: string
  type: 'curated' // TODO add types for auto-added sessions like 'popular' and 'quick' etc
  visible: boolean
}

export interface Video<FirebaseTimestamp> {
  createdAt: FirebaseTimestamp
  duration: number
  hdSize?: number
  id: string
  includedInTemplates: string[]
  jobID: string
  name: string
  originalSize: number
  processed: boolean
  sdSize?: number
}

export interface Statistic {
  created?: number
  deleted?: number
  total?: number
}
