import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <div>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </div>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
