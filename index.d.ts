// General
export interface Asset {
  downloadURL1080x1080: string
  downloadURL96x96: string
  id: string
}

export interface AvatarAsset {
  downloadURL200x200: string
  downloadURL1080x1080: string
  id: string
}

// Profile
export interface UserRecord<FirebaseTimestamp> {
  agoraUid: number
  aiThreadID?: string
  avatar?: AvatarAsset
  bio: string
  categoryInterests?: string[]
  createdAt: FirebaseTimestamp
  email: string
  firstName: string
  id: string
  introVersionLastSeen?: number
  lastName: string
  lastSeen: FirebaseTimestamp
  links?: {
    instagram?: string
    linkedIn?: string
    website?: string
    x?: string
  }
  notificationsEnabled: boolean
  publicKey?: string
  queryName: string
  role?: 'creator' | 'user'
  status?: 'online' | 'offline'
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

export type SessionType = 'open_table' | 'invite_only' | 'in_person'

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
  cardTypeID?: string
  confirmButtonText?: string
  description: string
  durationSeconds: number
  durationType: 'confirm' | 'duration'
  format: EventFormat
  id: string
  linkedToNext?: boolean
  nextButtonText?: string
  title: string
  videoID?: string
}

export interface OngoingEvent<FirebaseTimestamp> {
  id: string
  startedAt: FirebaseTimestamp
  videoStartedAt?: FirebaseTimestamp
}

export interface EventWithSpeaker extends Event {
  speaker: string
  agendaEventID: string
}

export type Color = `#${string}` | 'transparent'

export interface Category {
  color: Color
  description: string
  id: string
  icon?: Asset
  title: string
}

export interface TitleDescription {
  title: string
  description: string
}

// When updating this, also update the sessionRequiredFields and sessionOptionalFields in index.js
export interface Session<FirebaseTimestamp> {
  acceptedBy: string[]
  additionalInfo?: TitleDescription[]
  agenda: Event[]
  apiVersion?: number
  archived: boolean
  authoredBy?: string
  categoryID: string
  courseID?: string
  createdAt: FirebaseTimestamp
  createdBy: string
  currentEvent: OngoingEvent<FirebaseTimestamp> | 'waiting' | 'finished'
  description: string
  events?: EventWithSpeaker[] // Calculated from agenda on participant update
  id: string
  image?: Asset
  inCall?: Array<{ userID: string, agoraID: number }>
  intro: string[]
  location: string
  maxNumberOfParticipants: number
  numberOfOpenSeats?: number
  participants: string[]
  rejectedBy: string[]
  startsAt: string
  subtitle: string
  templateID: string
  title: string
  type?: SessionType
  videoID?: string
  videoStreamID?: string // The id of any connected video stream, streaming event videos
  visible?: boolean
}

// Session reviews are public comments visible to everyone
export interface Review<FirebaseTimestamp> {
  authorID: string
  comment: string
  createdAt: FirebaseTimestamp
  templateID: string
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
  sessionOpenTableJoinLeave: 'sessionOpenTableJoinLeave'
  sessionParticipantsChanged: 'sessionParticipantsChanged'
  message: 'message'
  courseInvite: 'courseInvite'
}

type SessionKeys = keyof Session<any>

export const sessionRequiredFields: SessionKeys[]
export const sessionOptionalFields: SessionKeys[]

export const test: string

export interface DiscoverCategory {
  contentType: 'sessions' | 'profiles' | 'courses'
  courses?: string[]
  id: string
  priority: number
  profiles?: string[]
  sessions?: string[]
  thumbnailType: 'video' | 'default'
  title: string
  type: 'curated' | 'latest' // TODO implement more types for auto-added sessions like 'popular' and 'quick' etc
  visible: boolean
}

export interface Course<FirebaseTimestamp> extends CourseTemplate<FirebaseTimestamp> {
  acceptedBy: string[]
  completed: boolean
  createdBy: string
  numberOfCompletedTemplates?: number
  participants: string[]
  rejectedBy: string[]
  startsAt: FirebaseTimestamp
  templateID: string
}

export interface SessionPreview {
  image?: Asset
  categoryID: string
  title: string
}

export interface CourseTemplate<FirebaseTimestamp> {
  accentColor: Color
  additionalInfo: TitleDescription[]
  authoredBy: string
  color: Color
  createdAt: FirebaseTimestamp
  id: string
  image?: Asset
  numberOfTemplates?: number
  order: string[]
  sessionsPreview?: SessionPreview[] // Used for displaying the stack under the thumbnail
  subtitle: string
  title: string
  visible: boolean
  // TODO: Add price using Price type
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

export interface Chat<FirebaseTimestamp> {
  id: string
  name: string
  participants: string[]
  createdAt: FirebaseTimestamp
  createdBy: string
}

export interface Message<FirebaseTimestamp> {
  authorID: string
  chatID: string
  createdAt: FirebaseTimestamp
  id: string
  lovedBy?: string[]
  message: string
  thumbsDownBy?: string[]
  thumbsUpBy?: string[]
}

export interface Thread<FirebaseTimestamp> {
  assistantID: string
  createdAt: FirebaseTimestamp
  createdBy: string
  lastActivityAt: FirebaseTimestamp
  replySuggestions?: {
    messageID: string
    suggestions: string[]
  }
  threadID: string
}
