const eventFormats = [
  { value: 'one_at_the_time', label: 'One at the time' },
  { value: 'all_at_once', label: 'All at once' },
  { value: 'host_only', label: 'Host only' },
  { value: 'one_person', label: 'One person' }
]

const pushNotificationTypes = {
  SessionInvite: 'sessionInvite',
  SessionStarting: 'sessionStarting',
  SessionTimeConfirmed: 'sessionTimeConfirmed',
  SessionStartingSoon: 'sessionStartingSoon'
}

const sessionRequiredFields = [
  'agenda',
  'authoredByUserID',
  'categoryID',
  'createdBy',
  'currentEvent',
  'description',
  // 'finishedAt',
  'help',
  'howItWorks',
  'id',
  'location',
  'participants',
  'principles',
  'proposedStartingTimes',
  'recommendedNumberOfParticipants',
  'setting',
  // 'startsAt',
  'subtitle',
  'tip',
  'title'
  // 'videoID',
]

const sessionOptionalFields = [
  'finishedAt',
  'startsAt',
  'videoID'
]

module.exports = {
  eventFormats,
  pushNotificationTypes,
  sessionRequiredFields,
  sessionOptionalFields
}
