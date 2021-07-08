import React from 'react';
import PropTypes from 'prop-types';
import List from './styles';
import { User } from '..';

const UsersList = ({ users }) => (
  <List>
    {users.map((user) => <User key={user.id} user={user} />)}
  </List>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    owner: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
};

export default UsersList;
