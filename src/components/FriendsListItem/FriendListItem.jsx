import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../avatar.png';
import styles from './FriendListItem.module.css';

export function FriendListItem({ avatar = defaultImage, name, isOnline }) {
const onlineStatus = `${isOnline ? 'online' : 'offline'}`
  return (
    <li className={styles.item}>
      <span className={styles[onlineStatus]}></span>
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
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
