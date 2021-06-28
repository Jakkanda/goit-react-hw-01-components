import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from '../FriendsListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        );
      })}
    </ul>
  );
}
