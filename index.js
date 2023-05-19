const eventFormats = {
  one_at_the_time: {
    value: 'one_at_the_time',
    label: 'One at the time'
  },
  all_at_once: {
    value: 'all_at_once',
    label: 'All at once'
  },
  host_only: {
    value: 'host_only',
    label: 'Host only'
  },
  one_person: {
    value: 'one_person',
    label: 'One person'
  }
}

const sessionRequiredFields = [
  'agenda',
  // 'authoredBy',
  'categoryID',
  'createdBy',
  'currentEvent',
  'description',
  // 'finishedAt',
  'help',
  'howItWorks',
  'id',
  'intro',
  'location',
  'participants',
  'principles',
  'proposedStartingTimes',
  'recommendedNumberOfParticipants',
  'setting',
  // 'startsAt',
  'subtitle',
  'templateID',
  'tip',
  'title'
  // 'videoID',
]

const sessionOptionalFields = [
  'authoredBy',
  'finishedAt',
  'startsAt',
  'videoID'
]

const PushNotificationTypes = {
  sessionInvite: 'sessionInvite',
  sessionStarting: 'sessionStarting',
  sessionTimeConfirmed: 'sessionTimeConfirmed',
  sessionStartingSoon: 'sessionStartingSoon'
}

module.exports = {
  eventFormats,
  sessionRequiredFields,
  sessionOptionalFields,
  PushNotificationTypes
}
