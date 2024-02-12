import clsx from 'clsx';
import css from '../FriendListItem/FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, status && css.isOnline)}>
        {status ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
