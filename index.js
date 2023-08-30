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
  // 'image',
  // 'inCall',
  'intro',
  'location',
  // 'numberOfOpenSeats',
  'participants',
  'principles',
  'proposedStartingTimes',
  'recommendedNumberOfParticipants',
  'setting',
  // 'startsAt',
  'subtitle',
  'templateID',
  'tip',
  'title',
  'type'
  // 'videoID',
]

const sessionOptionalFields = [
  'authoredBy',
  'finishedAt',
  'image',
  'numberOfOpenSeats',
  'startsAt',
  'videoID',
  'visible'
]

const PushNotificationTypes = {
  sessionInvite: 'sessionInvite',
  sessionStarting: 'sessionStarting',
  sessionTimeConfirmed: 'sessionTimeConfirmed',
  sessionStartingSoon: 'sessionStartingSoon',
  sessionCancelled: 'sessionCancelled',
  sessionOpenTableJoinLeave: 'sessionOpenTableJoinLeave'
}

module.exports = {
  eventFormats,
  sessionRequiredFields,
  sessionOptionalFields,
  PushNotificationTypes
}
