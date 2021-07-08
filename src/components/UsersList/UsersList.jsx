import React from 'react';
import PropTypes from 'prop-types';
import List from './styles';
import { User } from '..';
import { OwnerType } from '../../types';

const UsersList = ({ users }) => (
  <List>
    {users.map((user) => <User key={user.id} user={user} />)}
  </List>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    ...OwnerType
  })).isRequired,
};

export default UsersList;
