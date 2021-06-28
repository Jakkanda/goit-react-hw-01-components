import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.status}>{isOnline}</span>
      ) : (
        <span className={styles.isOffline}>{isOnline}</span>
      )}
      <img
              className={styles.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="48"
      />
          <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
