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
  'acceptedBy',
  'agenda',
  // 'apiVersion',
  // 'authoredBy',
  'categoryID',
  'createdBy',
  'currentEvent',
  'description',
  // 'finishedAt',
  'id',
  // 'image',
  // 'inCall',
  'intro',
  'location',
  'maxNumberOfParticipants',
  // 'numberOfOpenSeats',
  'participants',
  'rejectedBy',
  'startsAt',
  'subtitle',
  'templateID',
  'title'
  // 'type'
  // 'videoID',
  // 'visible'
]

const sessionOptionalFields = [
  'additionalInfo',
  'apiVersion',
  'authoredBy',
  'finishedAt',
  'image',
  'numberOfOpenSeats',
  'startsAt',
  'type',
  'videoID',
  'visible'
]

const PushNotificationTypes = {
  sessionInvite: 'sessionInvite',
  sessionStarting: 'sessionStarting',
  sessionTimeConfirmed: 'sessionTimeConfirmed',
  sessionStartingSoon: 'sessionStartingSoon',
  sessionCancelled: 'sessionCancelled',
  sessionOpenTableJoinLeave: 'sessionOpenTableJoinLeave',
  sessionParticipantsChanged: 'sessionParticipantsChanged',
  message: 'message'
}

module.exports = {
  eventFormats,
  sessionRequiredFields,
  sessionOptionalFields,
  PushNotificationTypes
}
