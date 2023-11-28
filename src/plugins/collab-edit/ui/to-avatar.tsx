import React from 'react';
import type { AvatarProps } from '@atlaskit/avatar-group';
import memoizeOne from 'memoize-one';
import type { CollabParticipant } from '@atlaskit/editor-common/collab';
import { ColoredAvatarItem } from './colored-avatar-item';

const toAvatar = (participant: CollabParticipant): AvatarProps => ({
  name: participant.name,
  src: participant.avatar,
  size: 'medium',
  presence: (
    <ColoredAvatarItem
      name={participant.name}
      sessionId={participant.sessionId}
    />
  ),
});

export default memoizeOne(toAvatar, function participantEquals([a], [b]) {
  return (
    a.name === b.name && a.avatar === b.avatar && a.sessionId === b.sessionId
  );
});
