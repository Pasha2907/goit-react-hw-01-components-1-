import PropTypes from 'prop-types';
import React from 'react';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, isOnline, name, avatar }) => {
  return (
    <li className={css.friendListItem} key={id}>
      <span className={`${css.status} ${isOnline && css.isOnline}`}>{isOnline}</span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
